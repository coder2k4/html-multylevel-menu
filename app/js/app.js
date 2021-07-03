// // Import jQuery module (npm i jquery)
// import $ from 'jquery'
// window.jQuery = $
// window.$ = $

// // Import vendor jQuery plugin example (not module)
// require('~/app/libs/mmenu/dist/mmenu.js')

document.addEventListener('DOMContentLoaded', () => {

	// Custom JS
    document.querySelector('.header-menu__icons').addEventListener('click', function (e) {
        document.querySelector('nav').classList.toggle('active')
    })

})
