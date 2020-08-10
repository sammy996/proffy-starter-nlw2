


$('#rm-time').hide();
$('#add_time').on("click", showRemoveField)


function showRemoveField() {
  const showButton = document.querySelectorAll('.schedule-item')

  if (showButton.length > 1) {
    return $('#rm-time').show()
  } else {
}
}

$('#rm-time').on("click", hideRemoveField)

function hideRemoveField() {
  const hideButton = document.querySelectorAll('.schedule-item')
  if (hideButton.length <= 1) {
    return $('#rm-time').hide()
  } else {

  }
}