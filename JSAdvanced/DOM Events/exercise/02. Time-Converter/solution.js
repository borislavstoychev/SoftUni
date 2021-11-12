function attachEventsListeners() {
    let daysInput = document.getElementById('days')
    let hoursInput = document.getElementById('hours')
    let minutesInput = document.getElementById('minutes')
    let secondsInput = document.getElementById('seconds')

    let btnDays = document.getElementById('daysBtn')
    let btnHours = document.getElementById('hoursBtn')
    let btnMinutes = document.getElementById('minutesBtn')
    let btnSeconds = document.getElementById('secondsBtn')

    btnDays.addEventListener('click', () => {
        let days = Number(daysInput.value)
        hoursInput.value = days * 24
        minutesInput.value = days * 24 * 60
        secondsInput.value = days * 24 * 60 * 60  
    })

    btnHours.addEventListener('click', () => {
        let hours = Number(hoursInput.value)
        daysInput.value = hours / 24
        minutesInput.value = hours  * 60
        secondsInput.value = hours * 60 * 60  
    })

    btnMinutes.addEventListener('click', () => {
        let minutes = Number(minutesInput.value)
        hoursInput.value = minutes / 60
        daysInput.value = minutes / 24 / 60
        secondsInput.value = minutes * 60  
    })

    btnSeconds.addEventListener('click', () => {
        let seconds = Number(secondsInput.value)
        hoursInput.value = seconds / 60 / 60
        minutesInput.value = seconds / 60
        daysInput.value = seconds / 24 / 60 / 60  
    })


}