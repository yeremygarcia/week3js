const input = document.querySelector('.input_text');
const main = document.querySelector('#name');
const temp = document.querySelector('.temp');
const desc = document.querySelector('.desc');
const clouds = document.querySelector('.clouds');
const button= document.querySelector('.submit');

button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=50a7aa80fa492fa92e874d23ad061374')
.then(response => response.json())
.then(data => {
  const tempValue = data['main']['temp'];
  const nameValue = data['name'];
  const descValue = data['weather'][0]['description'];

  main.innerHTML = nameValue;
  desc.innerHTML = "Conditions - "+descValue;
  temp.innerHTML = "Temperature - "+tempValue;
  input.value ="";

})
})