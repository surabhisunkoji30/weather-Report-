async function search(){
    var city=document.querySelector(".search")
    console.log(city)
    var apiURL="https://api.openweathermap.org/data/2.5/weather?q="+city.value+"&appid=d105f06f70d62aca84c52ae7611c6078"
    console.log("This is api url" + apiURL)
    var raw=await fetch(apiURL)
    var data=await raw.json()
    console.log(data)
    
    if(data){
        if(data.message=='city not found'){
            document.querySelector(".temp").innerHTML="0°c";
            document.querySelector(".city").innerHTML='';
            document.querySelector(".h").innerHTML="0%";
            document.querySelector(".w").innerHTML='0 km/hr';

        }else{
            if(data.main.temp-273.15.toFixed(2)<30){
                document.querySelector(".season").innerHTML='Sunny'
                var changeBG=document.getElementById("weather")
                changeBG.style.backgroundImage="url(Lx0q.gif)"
            }
            else{
                document.querySelector(".season").innerHTML='Cloudy'
                var changeBG=document.getElementById("weather")
                changeBG.style.backgroundImage="url(cloudy.gif)"
            }
            document.querySelector(".temp").innerHTML=(data.main.temp-273.15).toFixed(2)+"°c";
            document.querySelector(".city").innerHTML=(data.name);
            document.querySelector(".h").innerHTML=(data.main.humidity)+"0%";
            document.querySelector(".w").innerHTML=(data.wind.speed)+"0 km/hr";
        }
    } 
}