const gen = document.querySelector('#generate');
const img = document.querySelector('img');
const input = document.querySelector('#input');
const demo = document.querySelector('#demo');

async function genGif(){
  let apiUrl;
  
  if (input.value === "") {
    apiUrl = "https://api.giphy.com/v1/gifs/random?api_key=fpAHxNRZhZCBWtvfpolNwzvYTyJ8ApPs&tag=&rating=g";
    demo.innerText = 'empty'
  } else {
    apiUrl = `https://api.giphy.com/v1/gifs/translate?api_key=fpAHxNRZhZCBWtvfpolNwzvYTyJ8ApPs&s=${input.value}`;
  }
  
  img.style.display = 'block'
  const response = await fetch(apiUrl, {mode: 'cors'});
  const newData = await response.json();
}

gen.addEventListener('click', genGif);
