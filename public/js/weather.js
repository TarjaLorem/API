$(document).ready(function() {

    $.getJSON("current.list.city.json", (data) => {
        $(".city-button").on("click", () => {
            let out = "";
            for(let i=0; i<data.length; i++) {
                out +=`<p class='city-weather' value='${data[i].id}'>${data[i].name}</p>`;
            };
            $("#city").html(out);
            $("#city .city-weather").sort(asc_sort).appendTo("#city");
            function asc_sort(a, b){
                    return ($(b).text()) < ($(a).text()) ? 1 : -1;    
            };
            $("#city .city-weather").on("click", (e) => {
                $.get(
                    "http://api.openweathermap.org/data/2.5/weather",
                     {
                        "id": $(e.target).attr("value"),
                        "appid": "240f1238d82bd897c0ff0885ffe8b4f1"
                     },
                        (data) => {
                            let out = "";
                            out +="<p><img class='weather-img' src='https://openweathermap.org/img/w/"+data.weather[0].icon+".png'></p>";
                            out +="<span class='weather-text'>Weather: "+data.weather[0].main+"</span></br>";
                            out +="<span class='weather-text'>Temperature: "+Math.round(data.main.temp-273)+"&#176;C</span><br>";
                            out +="<span class='weather-text'>Humidity: "+data.main.humidity+"%</span><br>";
                            out +="<span class='weather-text'>Pressure: "+Math.round(data.main.pressure*0.0075006375541921*100-25)+" mm hg</span><br>";
                            $(".weather").html(out);

                        }
                );
            });
        })
    });
});