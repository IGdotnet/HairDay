//Send new schedule to register on API
import { apiConfig } from "./api-config.js";

export async function scheduleNew({ id, name, when }){
    try {
        //Request to send schedule data
        await fetch(`${apiConfig.baseURL}/schedules`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({ id, name, when })
        })

        //Display a message
        //alert("Agendamento realizado com sucesso")
    } catch (error) {
        console.log(error)
        alert("Não foi possível agendar, tente novamente mais tarde")
    }
}