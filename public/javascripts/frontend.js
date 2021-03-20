function getIdAndSetupRoute(element) {
  const id = element.getAttribute('data-id')
  const usage = element.getAttribute('data-usage')
  const formhook = document.getElementById(`form-${usage}`)
  formhook.action = `/restaurants/${id}/${usage}`
}
