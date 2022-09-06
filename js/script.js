
const api_key = `b0510d2fbe495821304665ba4675f2fb`;

let weather_data = (city) =>
{
    try{
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`
    fetch(url)
    .then(res => res.json())
    .then(res => displayTemperture(res))
    }
    catch(error){
        console.log('error');
    }
}

let displayTemperture = (data) =>
{
    let temp = document.getElementById('temperature');
    temp.innerText = data.main.temp + ' C'; 
    let mood = document.getElementById('mood');
    mood.innerText = data.weather[0].main;
}


document.getElementById('exampleFormControlInput1').addEventListener('keypress', function(e){
    if(e.key === 'Enter'){
        let searchField = document.getElementById('exampleFormControlInput1');
        searchValue = searchField.value;
        
    let city = document.getElementById('city-name');
    city.innerText = searchValue;

    weather_data(searchValue);
    }
})


weather_data();