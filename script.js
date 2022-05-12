$(document).ready(function(){


    $('#station').on('change',function(){
        loadData();
    });

    function loadData() {
    $("#arrTrains").empty();    
    var stationId = $('#station').val();
    console.log(stationId);
    $.getJSON('https://rata.digitraffic.fi/api/v1/live-trains/station/'+stationId+'?arrived_trains=0&arriving_trains=0&departed_trains=0&departing_trains=20&include_nonstopping=false', function(data, status) {
        if (status = 200) {

            $(
                "<tr>"
                    +"<th>Train Number</th>"
                    +"<th>Operator</th>"
                    +"<th>Train Type</th>"
                    +"<th>Line</th>"
                    +"<th>Departing time</th>"
                    +"<th>Departing date</th>"
                +"</tr>"
            ).appendTo('#arrTrains');
            $.each(data, function(i, v) {
                console.log(v.trainNumber);
                $(
                "<tr id='frame'>" 
                    +"<td id='tNum'>"
                        +v.trainNumber
                    +"</td>" 
                    +"<td id='operator'>"
                        +v.operatorShortCode
                    +"</td>" 
                    +"<td id='tTyper'>"
                        +v.trainType
                    +"</td>"
                    +"<td id='cType'>"
                        +v.commuterLineID
                    +"</td>" 
                    +"<td id='ttime'>"
                        +timeReturn(v)
                    +"</td>"
                    +"<td id='ttime'>"
                        +v.departureDate
                    +"</td>" 
                +"</tr>"
                ).appendTo('#arrTrains');  
                
            
            
            
            })

        }
        //if (status == 403) {
        //    alert('error');
        //}
        //if (status == 404) {
        //    alert('error');
        //}
    console.log(data);
    })

    }
    function timeReturn (v) {
        time = v.timetableAcceptanceDate;
        timex = time.substr(11, 5);
        return timex; 
    }
});