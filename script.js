$(document).ready(function(){

    //When select value is changed, loadData() function will be executed.
    $('#station').on('change',function(){
        loadData();
    });

    function loadData() {
       
    $("#arrTrains").empty();
    //This get value of select and put it into variable.    
    var stationId = $('#station').val();
    console.log(stationId);
    //This get 20 departing trains of selected station.
    $.getJSON('https://rata.digitraffic.fi/api/v1/live-trains/station/'+stationId+'?arrived_trains=0&arriving_trains=0&departed_trains=0&departing_trains=20&include_nonstopping=false', function(data, status) {
        //check if status is ok.
        if (status = 200) {
            //make first row of table.
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
    console.log(data);
    })

    }
    //This function take only time from timetableAcceptanceDate.
    function timeReturn (v) {
        time = v.timetableAcceptanceDate;
        timex = time.substr(11, 5);
        return timex; 
    }
});