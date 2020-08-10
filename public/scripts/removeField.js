document.querySelector('#rm-time')
.addEventListener('click', removeField)

function removeField() {
    const scheduleRemove = document.querySelectorAll('.schedule-item')
    if (scheduleRemove.length == 1) {
        return 
    }
    else {
        document.querySelector('#schedule-items').removeChild(scheduleRemove[scheduleRemove.length - 1])
    }
}
