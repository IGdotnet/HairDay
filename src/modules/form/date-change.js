import { schedulesDay } from "../schedules/load"

//Select data input
const selectedDate = document.getElementById("date")

//Reload the hour list when the date input change
selectedDate.onchange = () => schedulesDay()