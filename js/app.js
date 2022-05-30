// opens nav menu
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('nav-container')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})

// greys clicked hamburger menu
const toggleBar1 = document.getElementsByClassName('bar')[0]
const toggleBar2 = document.getElementsByClassName('bar')[1]
const toggleBar3 = document.getElementsByClassName('bar')[2]

toggleButton.addEventListener('click', () => {
    toggleBar1.classList.toggle('active')
    toggleBar2.classList.toggle('active')
    toggleBar3.classList.toggle('active')
})
