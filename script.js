$(document).ready(function(){
    function weather(){
        var URL = 'https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22';
        $.getJSON(URL, function(data){
            console.log(data);
            updateDOM(data);

        });
    }
    weather();

    function updateDOM(data){
        var city = data.name;
        var temp = data.main.temp;
        $("#city").html(city);
    
    }
});

