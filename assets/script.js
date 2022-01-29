// display current day and date
var todayDate = moment().format("dddd, MM do YYYY");
$("#currentDay").html(todayDate);

$(document).ready(function () {
    // click listener and declarations for save button
    $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        // text saved to local storage
        localStorage.setItem(time, text);
    })

    function timeTracker() {
        
        var timeNow = moment().hour();

        
        $(".time-block").each)function () {
            var blockTime = parseInt($(this).attr("id").split("hour")[1]);

            
            if (blockTime < timeNow) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (blockTime === timeNow) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })
    }
