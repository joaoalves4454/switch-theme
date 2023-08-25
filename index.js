function change () {
  let body = document.querySelector("body")
  let button = document.querySelector("button")
  if (button.className == 'sun') { // If the button has classname = "sun" toggle the window to be in dark mode else toggle light mode.
    button.className = 'moon'
    body.className = 'lightmode'
  } else {
    button.className = 'sun'
    body.className = 'darkmode'
  }
}