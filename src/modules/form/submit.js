import dayjs from "dayjs"
import { scheduleNew } from "../../services/schedule-new.js"

const form = document.querySelector("form")
const clientName = document.getElementById("client")
const selectedDate = document.getElementById("date")

//Date today to format input
const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

//Load the current date and define the minimun date as today
selectedDate.value = inputToday
selectedDate.min = inputToday

form.onsubmit = async (event) => {
    event.preventDefault()

    try {
        //Retrieves the customer's name
        const name = clientName.value.trim()
        if(!name){
            return alert("Informe o nome do cliente")
        }

        const hourSelected = document.querySelector(".hour-selected")

        //Retrieves the selected hour
        if(!hourSelected){
            return alert("Selecione a hora")
        }

        //Retrieves the hour
        const [hour] = hourSelected.innerText.split(":")
        
        //Insert the hour on the date
        const when = dayjs(selectedDate.value).add(hour, "hour")

        //Generates an ID
        const id = new Date().getTime()

       
        await scheduleNew({
            id,
            name, 
            when,
        }) 

    } catch (error) {
        alert("Não foi possível realizar o agendamento")
        console.log(error)
    }
}