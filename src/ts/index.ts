var fps = 30;
var frameTime = 1000 / 30;
var timer_id = null;
var target_time = null;

$(function(){
    $('div.buttons').on('click', '.button', function (evt) {
        var min = $(this).find('.set_min').val();
        min = parseInt(min, 10);
        console.log(min);

        target_time = new Date();
        target_time.setMinutes( target_time.getMinutes() + min);
        console.log(target_time);

        timer_id = setInterval(function(){
            var now = new Date();
            var diffTime = target_time.getTime() - now.getTime();

            if (diffTime <= 0) {
                clearInterval(timer_id);
                diffTime = 0;
            }

            writeTimer(diffTime);

            if (diffTime <= 0) {
                alert('終了！');
            }

        }, frameTime);
    });
});

function writeTimer (time) {
    var date = new Date(time);
    // var hour = date.getHours() + (date.getTimezoneOffset() / 60);
    var min = date.getMinutes();
    var sec = date.getSeconds();
    var msec = date.getMilliseconds();
    var timer_string = /*hour+':'+*/min+':'+sec+'.'+msec;

    $(".timer_string").text(timer_string);
}
