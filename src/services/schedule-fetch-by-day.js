import dayjs from "dayjs"
import { apiConfig } from "./api-config.js"

export async function scheduleFetchByDay({date}) {
    try {
        //Request
        const response = await fetch(`${apiConfig.baseURL}/schedules`)

        //Convert to JSON
        const data =  await response.json()

        //Filter schedules by the selected day
        const dailySchedules = data.filter((schedule) => dayjs(date).isSame(schedule.when, "day"))

        return dailySchedules

    } catch (error) {
        console.log(error)
        alert("Não foi possível buscar os agendamentos do dia selecionado")
    }
}