$(document).ready(function(){


    $('#station').on('change',function(){
        loadData();
    });

    function loadData() {
    var stationId = $('#station').val();
    console.log(stationId);
    $.getJSON('https://rata.digitraffic.fi/api/v1/live-trains/station/'+stationId+'?arrived_trains=5&arriving_trains=5&departed_trains=5&departing_trains=5&include_nonstopping=false', function(data, status) {
        if (status = 200) {
            $.each(data, function(i, v) {
                console.log(v.trainNumber);
            })

        }
        if (status = 403) {
            alert('error');
        }
        if (status = 404) {
            alert('error');
        }
    console.log(data);
    })

    }
});