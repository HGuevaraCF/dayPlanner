
var actualTime = moment().toDate();
var today = moment().format('MMMM Do YYYY');
var hoy = moment('3:00pm', 'h:mma');
$('#currentDay').text(today);



// Container change color depending on time
var table = $('#timeBlocks tr');
table.each(function() {
    var hourString = $('.dayHour', this).text();
    var hour = hourString.slice(0, -2).concat(':00').concat(hourString.substring(hourString.length -2).toLowerCase());
    var hourRow = moment(hour, 'h:mma');
    if(hourRow.format('H', 'HH') == hoy.format('H', 'HH') ){
        console.log(true);
        $(this).addClass('present');
    } else if(hourRow < hoy ) {
        console.log(false);
        $(this).addClass('past');
    } else {
        $(this).addClass('future');
    }
});

//Save events on local storage


