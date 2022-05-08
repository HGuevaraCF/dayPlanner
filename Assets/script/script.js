
var actualTime = moment();
var today = moment().format('MMMM Do YYYY');
var hoy = moment('3:00pm', 'h:mma');
$('#currentDay').text(today);
var events = {
    nine: '',
    ten: '',
    eleven: '',
    twelve: '',
    one: '',
    two: '',
    three: '',
    four: '',
    five: '',
}

// Container change color depending on time
var table = $('#timeBlocks tr');
table.each(function() {
    var hourString = $('.dayHour', this).text();
    var hour = hourString.slice(0, -2).concat(':00').concat(hourString.substring(hourString.length -2).toLowerCase());
    var hourRow = moment(hour, 'h:mma');
    if(Number(hourRow.format('H', 'HH')) == Number(actualTime.format('H', 'HH')) ){
        // console.log('present');
        $(this).addClass('present');
    } else if(Number(hourRow.format('H', 'HH')) < Number(actualTime.format('H', 'HH'))  ) {
        // console.log('past');
        $(this).addClass('past');
    } else {
        // console.log('future');
        $(this).addClass('future');
    }
});

//Save events on local storage

$('.btn').on('click', function() {
    var section = $(this).attr('id');
    switch(section) {
        case 'nine':
            var currentRow = $(this).closest('tr');
            var input = currentRow.find('td:eq(1) input:text').val();
            events.nine = input
            console.log(input);
            break;
        case 'ten':
            var currentRow = $(this).closest('tr');
            var input = currentRow.find('td:eq(1) input:text').val();
            events.ten = input
            console.log(input);
            break;
        case 'eleven':
            var currentRow = $(this).closest('tr');
            var input = currentRow.find('td:eq(1) input:text').val();
            events.eleven = input
            console.log(input);
            break;
        case 'twelve':
            var currentRow = $(this).closest('tr');
            var input = currentRow.find('td:eq(1) input:text').val();
            events.twelve = input
            console.log(input);
            break;
        case 'one':
            var currentRow = $(this).closest('tr');
            var input = currentRow.find('td:eq(1) input:text').val();
            events.one = input
            console.log(input);
            break;
        case 'two':
            var currentRow = $(this).closest('tr');
            var input = currentRow.find('td:eq(1) input:text').val();
            events.two = input
            console.log(input);
            break;
        case 'three':
            var currentRow = $(this).closest('tr');
            var input = currentRow.find('td:eq(1) input:text').val();
            events.three = input
            console.log(input);
            break;
        case 'four':
            var currentRow = $(this).closest('tr');
            var input = currentRow.find('td:eq(1) input:text').val();
            events.four = input
            console.log(input);
            break;
        case 'five':
            var currentRow = $(this).closest('tr');
            var input = currentRow.find('td:eq(1) input:text').val();
            events.five = input
            console.log(input);
            break;
    }
    console.log(events)
    localStorage.setItem('Events', JSON.stringify(events));
});

$(document).ready(function () {
    if(localStorage.getItem('Events') != null){
        var storedEvents = JSON.parse(localStorage.getItem('Events'));
        $('#timeBlocks tr:eq(0) input:text').val(storedEvents.nine);
        $('#timeBlocks tr:eq(1) input:text').val(storedEvents.ten);
        $('#timeBlocks tr:eq(2) input:text').val(storedEvents.eleven);
        $('#timeBlocks tr:eq(3) input:text').val(storedEvents.twelve);
        $('#timeBlocks tr:eq(4) input:text').val(storedEvents.one);
        $('#timeBlocks tr:eq(5) input:text').val(storedEvents.two);
        $('#timeBlocks tr:eq(6) input:text').val(storedEvents.three);
        $('#timeBlocks tr:eq(7) input:text').val(storedEvents.four);
        $('#timeBlocks tr:eq(8) input:text').val(storedEvents.five);
    }
})


