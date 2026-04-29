import dayjs from "dayjs";

//Select the sessions
const periodMorning = document.getElementById("period-morning")
const periodAfternoon = document.getElementById("period-afternoon")
const periodNight = document.getElementById("period-night")

export function scheduleShow({ dailySchedules }){
    try {
        //Clear lists
        periodMorning.innerHTML = ""
        periodAfternoon.innerHTML = ""
        periodNight.innerHTML = ""

        //Render schedules
        dailySchedules.forEach((schedule) => {
            const item = document.createElement("li")
            const time = document.createElement("strong")
            const name = document.createElement("span")

            //Add the schedule's id
            item.setAttribute("data-id", schedule.id)

            time.textContent = dayjs(schedule.when).format("HH:mm")
            name.textContent = schedule.name

            //Create delete icon
            const cancelIcon = document.createElement("img")
            cancelIcon.classList.add("cancel-icon")
            cancelIcon.setAttribute("src", "./src/assets/cancel.svg")
            cancelIcon.setAttribute("alt", "Cancelar")

            //Add the time, name and icon in the item
            item.append(time, name, cancelIcon)

            //Get the hour
            const hour = dayjs(schedule.when).hour()

            //Render the schedule in the session (Morning, afternoon, evenning)
            if(hour <= 12){
                periodMorning.appendChild(item)
            }else if(hour >12 && hour <= 18){
                periodAfternoon.appendChild(item)
            }else{
                periodNight.appendChild(item)
            }
        })

    } catch (error) {
        alert("Não foi possível carregar os agendamentos")
        console.log(error)
    }
}