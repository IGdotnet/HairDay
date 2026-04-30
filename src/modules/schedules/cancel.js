import { schedulesDay } from "./load.js"
import { scheduleCancel } from "../../services/schedule-cancel"

const periods = document.querySelectorAll(".period")

//Generate click event for each list
periods.forEach((periods) => {
    //Capture the click event from the list
    periods.addEventListener("click", async (event) => {
        //console.log(event.target.classList.contains("cancel-icon"))
        if(event.target.classList.contains("cancel-icon")){
            //Get the li from the clicked element
            const item = event.target.closest("li")
            //onsole.log(item)
            const { id } = item.dataset
            //console.log(id)

            if(id){
                const isConfirm = confirm("Tem certeza que deseja cancelar esse agendamento?")
                            
                //if(isConfirm){
                //    console.log("Confirmado")
                //}

                //Make the request to API to cancel
                if(isConfirm){
                    await scheduleCancel ({ id })

                    //Reload the list
                    schedulesDay()
                }
            }
        }
    })
})