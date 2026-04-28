import { hoursLoad } from "../form/hours-load.js";

//Select the date input
const selectedDate = document.getElementById("date")
export function schedulesDay(){
    //Get the date of input
    const date = selectedDate.value

    //Render avaiable dates
    hoursLoad({ date })

    //Retrieves schedules from the API to load on the right side of the screen

    //Avaiable dates on the left side of the screen (future date or unscheduled dates)
}