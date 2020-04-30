$(document).ready(function () {
    $("rect").css({
        fill: "black"
    });

    $(".box.down.market-narrative .caption button#precovid").click(function () {

        $(".box.down.market-narrative .graphic").animate({
            opacity: '1'
        }, 1000);

        $(".box.down.market-narrative .caption button#postcovid").delay(500).animate({
            opacity: '1'
        }, 500);


    });

    $(".box.down.market-narrative .caption button#postcovid").click(function () {
        $("#sp-2").animate({
            opacity: '1',
            //            strokeDasharray: 1000
        }, 5000);
    });




    $(".box.up.market-narrative .caption button#precovid").click(function () {

        $(".box.up.market-narrative .graphic").animate({
            opacity: '1'
        }, 1000);

        $(".box.up.market-narrative .caption button#postcovid").delay(1000).animate({
            opacity: '1'
        }, 500);


    });

    $(".box.up.market-narrative .caption button#postcovid").click(function () {
        $("#zoom-2").animate({
            opacity: '1',
            strokeDasharray: 1000
        }, 500);
    });





    $(".box.down.pollution-narrative .caption button#precovid").click(function () {


        $(".box.down.pollution-narrative .caption button#postcovid").delay(1000).fadeIn("slow").animate({
            opacity: '1'
        }, 500);
        $("p#vietnam").animate({
            opacity: '1'
        }, 1000);


    });

    $(".box.down.pollution-narrative .caption button#postcovid").click(function () {

        $(".box.down.pollution-narrative .graphic").animate({
            opacity: '1'
        }, 3000);

        $(".box.down.pollution-narrative .graphic .svg").animate({
            fill: "red",
            right: '0px'
        }, 5000);
    });




    $(".box.up.pollution-narrative .caption button#precovid").click(function () {

        $(".box.up.pollution-narrative .graphic").animate({
            opacity: '1'
        }, 1000);

        $(".box.up.pollution-narrative .caption button#postcovid").delay(1000).animate({
            opacity: '1'
        }, 500);


    });

    $(".box.up.pollution-narrative .caption button#postcovid").click(function () {
        $("#venice-svg").animate({
            width: 1000,
            left: -400,
            top: -400
        }, "slow").animate({
            left: -400,
            top: -100
        }, "slow").animate({
            left: -600,
            top: -100
        }, "slow").animate({
            left: -400,
            top: -100,
            left: -200,
            top: 100
        }, "slow");
        $("#dolphins").animate({
            opacity: '1',
            strokeDasharray: 100
        }, 5000);
    });

});
