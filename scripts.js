// SELECIONANDO ELEMENTOS
let generate = document.querySelector('#generate');
let favorite = document.querySelector('#favorite');
let counter = document.querySelector('#counter');
let color = document.querySelector('.color')
let favoriteColors = document.querySelector('.favorite-colors')


// INICIANDO CONTADOR DE FAVORITAS COM 0;
let favoritesCounter = 0;
counter.innerText = favoritesCounter;

// SETANDO UM BACKGROUND INICIAL PARA O GERADOR
let finalColor = `rgb(200,200,200)`;
color.style.background = finalColor;


// GERANDO UMA COR ALEATÓRIA
generate.addEventListener('click', () => {
  let red = Math.floor(Math.random()*256);
  let green = Math.floor(Math.random()*256);
  let blue = Math.floor(Math.random()*256);

  finalColor = `rgb(${red}, ${green}, ${blue})`
  color.style.background = finalColor;

})


// FAVORITANDO UMA COR
favorite.addEventListener('click', () => {

  const parentDiv = document.createElement('div');
  parentDiv.classList.add('favorite-color');
  favoriteColors.appendChild(parentDiv);

  const childDiv = document.createElement('div');
  parentDiv.appendChild(childDiv);

  const span = document.createElement('span');
  childDiv.appendChild(span);



  favoritesCounter++;
  counter.innerText = favoritesCounter;

  const spanCounter = document.createElement('span');
  parentDiv.appendChild(spanCounter);
  spanCounter.classList.add('index');
  spanCounter.innerText = favoritesCounter


  favoriteColor(finalColor);

  function favoriteColor(finalColor) {
    parentDiv.style.background = finalColor;
    span.innerText = finalColor;
  }
  
})


