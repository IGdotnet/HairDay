import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js";
import { hoursLoad } from "../form/hours-load.js";
import { scheduleShow } from "./show.js";

//Select the date input
const selectedDate = document.getElementById("date")
export async function schedulesDay(){
    //Get the date of input
    const date = selectedDate.value

    //Retrieves schedules from the API to load on the right side of the screen
    const dailySchedules = await scheduleFetchByDay({ date })
    console.log(dailySchedules)

    //Avaiable dates on the left side of the screen (future date or unscheduled dates)

    //Render avaiable dates
    hoursLoad({ date })
}