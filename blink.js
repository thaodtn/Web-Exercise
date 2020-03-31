setInterval(timer1second, 1000);

var count = 0;

function timer1second()
{
    var time = new Date();
    $('#textTime').html(time.toLocaleTimeString());
    count++;
    colorIndex = count % 3;
    switch (colorIndex)
    {
        case 0:
            $('#textTime').addClass("changeColor1");
            $('#textTime').removeClass("changeColor2");
            $('#textTime').removeClass("changeColor3");
            break;
        case 1:
            $('#textTime').addClass("changeColor2");
            $('#textTime').removeClass("changeColor1");
            $('#textTime').removeClass("changeColor3");
            break;
        case 2:
            $('#textTime').addClass("changeColor3");
            $('#textTime').removeClass("changeColor1");
            $('#textTime').removeClass("changeColor2");
            break;
        default:
            $('#textTime').removeClass("changeColor1");
            $('#textTime').removeClass("changeColor2");
            $('#textTime').removeClass("changeColor3");
            break;
    }
}


//cách 1:
// $('li').mouseenter(function() {
//     $(this).css('fontWeight', 'bold');
//     $(this).css('color', 'red');
//     $(this).css('font-size', '120%');
// })

// $('li').mouseleave(function() {
//     $(this).css('fontWeight', 'normal');
//     $(this).css('color', 'black');
//     $(this).css('font-size', '100%');
// })

//cách 2:
// $('li').hover(
//     function() {
//         $(this).css('fontWeight', 'bold');
//         $(this).css('color', 'red');
//         $(this).css('font-size', '120%');
//     },
//     function() {
//         $(this).css('fontWeight', 'normal');
//         $(this).css('color', 'black');
//         $(this).css('font-size', '100%');
//     }
// )

//cách 3:
$('li').on({
    mouseenter: function() {
        $(this).css('fontWeight', 'bold');
        $(this).css('color', 'red');
        $(this).css('font-size', '120%');
    },
    mouseleave: function() {
        $(this).css('fontWeight', 'normal');
        $(this).css('color', 'black');
        $(this).css('font-size', '100%');
    },
    click: function() {
        $(this).css('background-color', 'yellow');
    }
})
