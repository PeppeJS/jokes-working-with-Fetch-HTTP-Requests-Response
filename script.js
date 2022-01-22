let jokeEl = document.getElementById('jokeID');
let jokeBtn = document.getElementById('jokeButton');

jokeBtn.addEventListener('click', callAjaxGameJoke);

callAjaxGameJoke();

async function callAjaxGameJoke() {
  const config = {
    headers: {
      Accept: 'Application/json',
    },
  };

  const result = await fetch('https://icanhazdadjoke.com', config);

  const data = await result.json();

  jokeEl.innerHTML = data.joke;
}

// USING .then()
// function callAjaxGameJoke() {
//   const config = {
//     headers: {
//       Accept: 'application/json',
//     },
//   }

//   fetch('https://icanhazdadjoke.com', config)
//     .then((risultato) => risultato.json())
//     .then((data) => {
//       jokeEl.innerHTML = data.joke
//     })
// }
