import dayjs from "dayjs"
import { openingHours } from "../../utils/opening-hours.js"
import { hoursClick } from "./hours-click.js"

const hours = document.getElementById("hours")

export function hoursLoad({ date }) {
    const opening = openingHours.map((hour) => {
        //Get hour
        const [scheduleHour] = hour.split(":")
        
        
        //Add hour on date and verify if it is in the past
        const isHourPast = dayjs(date).add(scheduleHour, "hour").isAfter(dayjs())

        //Definy if the date is available
        return {
            hour, 
            available: isHourPast,
        }
    })

    //console.log(opening)

    //Render schedules
    opening.forEach(({hour, available}) => {
        const li = document.createElement("li")
        li.classList.add("hour")
        li.classList.add(available ? "hour-available" : "hour-unavailable")

        li.textContent = hour

        if(hour === "9:00"){
            hourHeaderAdd("Manhã")
        }else if(hour === "13:00"){
            hourHeaderAdd("Tarde")
        }else if(hour === "18:00"){
            hourHeaderAdd("Noite")
        }

        hours.append(li)
    })

    //Call hoursClick, add click event on the avaiable time
    hoursClick()
}

function hourHeaderAdd(title) {
    const header = document.createElement("li")
    header.classList.add("hour-period")
    
    header.textContent = title

    hours.append(header)
}