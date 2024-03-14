$(document).ready(function(){
    // Hide elements
    $("#btn1").click(function(){
        $("h2").hide();
    });

    // Double click event
    $("#btn2").dblclick(function(){
        $("p").hide();
    });

    // Hide container
    $("#hide").click(function(){
        $(".container").hide();
    });

    // Show container
    $("#show").click(function(){
        $(".container").show();
    });

    // Show all images
    $("#show-all").click(function(){
        $(".box").show();
    });

    // Show only cars
    $("#show-cars").click(function(){
        $(".box").hide();
        $(".box img[src*='cars']").parent().show();
    });

    // Show only bikes
    $("#show-bikes").click(function(){
        $(".box").hide();
        $(".box img[src*='bike']").parent().show();
    });

    // Show only buses
    $("#show-bus").click(function(){
        $(".box").hide();
        $(".box img[src*='bus']").parent().show();
    });

    // Lightbox functionality
    $(".box img").click(function() {
        var imgUrl = $(this).attr("src");
        $("#lightbox-image").attr("src", imgUrl);
        $("#lightbox-overlay").fadeIn();
    });

    // Close lightbox
    $("#lightbox-close").click(function() {
        $("#lightbox-overlay").fadeOut();
    });
});
