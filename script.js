var cat = $("#img-cat");
var position = "right";

cat.on("click", function() {
    if (position == "right") {
        cat.css("right", "auto");
        cat.css("left", "0");
        cat.css("transform", "scaleX(-1)")
        position = "left";
    }
    else {
        cat.css("left", "auto");
        cat.css("right", "0");
        cat.css("transform", "scaleX(1)")
        position = "right";
    }
});