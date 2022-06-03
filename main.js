let menuRight = false

//Menu Open & Close
function openMenuRight() {
  if (menuRight == false) {
    menuRight = true

    document.getElementById('menuRight').style.width = '18em'
    document.getElementById('iconMenu').src = './sources/Close.svg'
  } else {
    menuRight = false
    document.getElementById('menuRight').style.width = '0em'
    document.getElementById('iconMenu').src = './sources/Hamburguer.svg'
  }
}

//Menu Close
function closeMenuRight() {
  if (menuRight == true) {
    menuRight = false

    document.getElementById('menuRight').style.width = '0em'
    document.getElementById('iconMenu').src = './sources/Hamburguer.svg'
  } else {
    menuRight = true
    document.getElementById('menuRight').style.width = '18em'
    document.getElementById('iconMenu').src = './sources/Close.svg'
  }
}

//scrollReveal
window.sr = ScrollReveal({ reset: true })

sr.reveal('.titleSection', { duration: 700 })
sr.reveal('.image1', { duration: 700 })
sr.reveal('.description', { duration: 700 })
sr.reveal('.video1', { duration: 700 })
sr.reveal('.configBack', { duration: 700 })
sr.reveal('.backgroundImage2', { duration: 700 })
sr.reveal('.cardCreditis', { duration: 700 })
