$(document).ready(function () {

    // script til login formular
    var modal = document.getElementById('id01');

    // Når man trykker udenfor formularen lukker den
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // Baggrund flytter sig med mus
    var windowWidth = $(window).width();

    $('.front').mousemove(function (event) {
        var moveX = (($(window).width() / 2) - event.pageX) * 0.1;
        var moveY = (($(window).height() / 2) - event.pageY) * 0.1;

        $('.back').css('margin-left', moveX + 'px');
        $('.back').css('margin-top', moveY + 'px');
    });

    function openForm() {
        document.getElementById("myForm").style.display = "block";
    }

    function closeForm() {
        document.getElementById("myForm").style.display = "none";
    }

});
