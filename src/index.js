const gen = document.querySelector('#generate')
const img = document.querySelector('img');
const input = document.querySelector('#input')
const form = document.querySelector('#form')
const button = document.querySelector('#submit')
const demo = document.querySelector('#.demo')

function genGif(){
  fetch(`https://api.giphy.com/v1/gifs/translate?api_key=fpAHxNRZhZCBWtvfpolNwzvYTyJ8ApPs&s=${input.value}`, {mode: 'cors'})
  .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      img.src = response.data.images.original.url;
    });
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
})


gen.addEventListener('click', genGif)
button.addEventListener('click', genGif)