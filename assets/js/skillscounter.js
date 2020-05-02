// ========================================================================= //
//   skillsProgress
// ========================================================================= //

function skillsProgress() {
    var lang = {
        "python": "70%",
        "deep": "60%",
        "ui": "80%"
    };

    var multiply = 2;

    $.each(lang, function(language, pourcent) {

        var delay = 600;

        setTimeout(function() {
            $('#' + language + '-pourcent').html(pourcent);
            $('#progress-' + language).animate({
                'width': pourcent
            }, 600);
        }, delay * multiply);

        multiply++;

    });
}

if ($(window).scrollTop() >= $("#about").offset().top - 200) {
    skillsProgress();
}

$(window).on("scroll", function() {
    if ($(window).scrollTop() >= $("#about").offset().top - 200) {
        skillsProgress();
    }
});