export function hoursClick(){
    const hours = document.querySelectorAll('.hour-available')

    hours.forEach((avaiable) => {
        avaiable.addEventListener("click", (selected) => {

            //Removing hour-selected class of all li's that aren't selected
            hours.forEach((hour) => {
                hour.classList.remove("hour-selected")
            })

            selected.target.classList.add("hour-selected")
        })
    })
}