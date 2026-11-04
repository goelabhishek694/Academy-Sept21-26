const API_KEY = "";
const temperatureField = document.querySelector(".temp");
const cityField = document.querySelector(".city");
const timeField = document.querySelector(".localtime");
const conditionField = document.querySelector(".condition");
const conditionIcon = document.querySelector(".weather-icon");
const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");



// async/await 
async function fetchWeatherData(city) {
    try {
        const res = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`);
        if (!res.ok) {
            alert("City not found or invalid response")
            throw new Error("City not found or invalid response");
        }
        const data = await res.json();
        console.log(data);
        updateDom(data);
    } catch (err) {
        console.log("from catch block : ", err);
    }
}

// fetchWeatherData("london")

function updateDom(data){
    const location = data.location;
    const current = data.current;

    temperatureField.textContent = `${current.temp_c}`
    cityField.textContent = location.name;
    timeField.textContent= formatTime(location.localtime);
    conditionIcon.src = `https:${current.condition.icon}`;
    conditionField.textContent = current.condition.text;
    conditionIcon.alt = current.condition.text;
}

function formatTime(localtime){
    localtime = localtime.split(" ");
    const date = localtime[0];
    const time = localtime[1];

    const day = getDayName(date);
    return `${time} ${day}, ${date}`;
}

function getDayName(dateString){
    const daysIndex = new Date(dateString).getDay();
    const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      
      return days[daysIndex];
}

searchForm.addEventListener("submit", function(e){
    e.preventDefault();
    const city = searchInput.value;
    if(city == ""){
        alert("Please enter a city name");
        return;
    }

    fetchWeatherData(city);
    searchInput.value="";
})

const aiAdviceField = document.querySelector(".ai-advice");
const aiButton = document.getElementById("aiButton");

//groq api key 
//free , get it from console.groq.com
const GROQ_API_KEY = "";

//fetchAdvice(temp, cuty, condition , locatime){ //make api call to groq, get response , print the advice on screen using dom }


// this is my hw , help me out and not give the soluton , give me hints 