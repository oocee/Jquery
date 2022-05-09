$(document).ready(function(){


    $('#station').on('change',function(){
        loadData();
    });

    function loadData() {
    var stationId = $('#station').val();
    console.log(stationId);
    var data = $.getJSON("/live-trains/station/"+stationId+"?arrived_trains=5&arriving_trains=20&departed_trains=5&departing_trains=20", function(data) {
    })
    console.log(data);
    }
});