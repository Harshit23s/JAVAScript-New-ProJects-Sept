const apiKey = "e57963c570da2508b2e34be290da79d9";
const apiURl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric7q=banglore";
async function checkWeahter() {
  const response = await fetch(apiURl + `&appid=${apiKey}`);
  var data = await response.json();
  console.log(data);
}
checkWeahter();
