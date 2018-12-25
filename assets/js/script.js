$(document).ready(() => {
    var postImg = $("#post-content img").first();
    if (postImg.length) {
        var imgUrl = postImg.attr("src");

        $("#bg").css({
            background: "url('"+imgUrl+"') center center / cover",
            filter: "blur(3px)"
        });

        $("#details").css("background-color", "rgba(0, 0, 0, 0.3)");

        $("head").append("<style>.header-wrapper::before { bottom: -6px }</style>");
    }

    //Particle load
    particlesJS.load("particle", "/assets/json/particlesjs-config.json");
});