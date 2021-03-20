function getIdAndSetupRoute(element) {
  const id = element.getAttribute('data-id')
  const usage = element.getAttribute('data-usage')
  const formhook = document.getElementById(`form-${usage}`)
  formhook.action = `/restaurants/${id}/${usage}`
}

// Get restaurants attributes and send to Edit-form
function getInfo(element) {
  setupDefaultInfo(
    element,
    'name',
    'name_en',
    'category',
    'phone',
    'rating',
    'location',
    'google_map',
    'image',
    'description'
  )
  getIdAndSetupRoute(element)
}

function setupDefaultInfo(element, ...dataAttibuteName) {
  for (let i = 1; i < arguments.length; i++) {
    inputhook = document.getElementById(`input-${arguments[i]}`)
    inputhook.value = element.getAttribute(`data-${arguments[i]}`)
  }
}
