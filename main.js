let homeButton = document.getElementById("home-tab2")
homeButton.addEventListener('click', () => {
    let homeContent = document.getElementById("home").style.display = "block"
    let aboutContent = document.getElementById("about").style.display = "none"
    let contactContent = document.getElementById("contact").style.display = "none"
})

let aboutButton = document.getElementById("profile-tab2")
aboutButton.addEventListener('click', () => {
    let homeContent = document.getElementById("home").style.display = "none"
    let aboutContent = document.getElementById("about").style.display = "block"
    let contactContent = document.getElementById("contact").style.display = "none"
})

let contactButton = document.getElementById("contact-tab2")
contactButton.addEventListener('click', () => {
    let homeContent = document.getElementById("home").style.display = "none"
    let aboutContent = document.getElementById("about").style.display = "none"
    let contactContent = document.getElementById("contact").style.display = "block"
})
