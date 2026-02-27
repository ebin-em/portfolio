/*!
* Converted to jQuery
*/

$(document).ready(function () {
  console.log("Ebin");
function myFunction() {
  alert("Working");
}
    // Activate Bootstrap scrollspy
    var sideNav = $('#sideNav');

    if (sideNav.length) {
        $('body').scrollspy({
            target: '#sideNav',
            offset: 100
        });
    }

    // Collapse responsive navbar when nav-link clicked
    var navbarToggler = $('.navbar-toggler');

    $('#navbarResponsive .nav-link').on('click', function () {
        if (navbarToggler.is(':visible')) {
            navbarToggler.click();
        }
    });

});
