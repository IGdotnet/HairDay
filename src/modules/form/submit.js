import dayjs from "dayjs"

const form = document.querySelector("form")
const selectedDate = document.getElementById("date")

//Date today to format input
const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

//Load the current date and define the minimun date as today
selectedDate.value = inputToday
selectedDate.min = inputToday

form.onsubmit = (event) => {
    event.preventDefault()

    console.log("A")
}