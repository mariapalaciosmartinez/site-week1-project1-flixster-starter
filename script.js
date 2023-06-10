let requestNumber = 1;
let apiPage = 2;
let grid = document.querySelector("#movie-grid")
let specifySearchButton = document.getElementById('specify-search-button');
let loadMoreButton = document.querySelector("#load-more-button")
let searchBar = document.getElementById('search-box');
    
 function generateCards(movieObject){ // function that will generate the movie cards in our mini netflix
    // create star
    let star = document.createElement('span'); // creating a span element
    let starContent = document.createTextNode('⭐️'); // the content of the span star will have the emoji of star
    star.appendChild(starContent); // we then put the content inside the span star
    //document.body.appendChild(star); // we then put the star span inside the body of the html document
    star.classList.add('star')
    // create rating
    let rating = document.createElement('span');
    let ratingContent = document.createTextNode(movieObject.vote_average);
    rating.appendChild(ratingContent);
    document.body.appendChild(rating);
    rating.classList.add('rating')
    // create average container
    let averageContainer = document.createElement('div');
    averageContainer.classList.add('average');
    averageContainer.appendChild(star);
    averageContainer.appendChild(rating);
    document.body.appendChild(averageContainer);
    // image
    let image = document.createElement('img');
    image.src = "https://image.tmdb.org/t/p/w342" + movieObject.poster_path
    document.body.insertBefore(image, averageContainer);
    // movie name
    let name = document.createElement('div')
    name.classList.add('name');
    name.innerText = movieObject.original_title;
    document.body.insertBefore(name, averageContainer.nextSibling);
    //create movie section
    let movie = document.createElement('section');
    movie.classList.add('name')
    movie.appendChild(image)
    movie.appendChild(averageContainer)
    movie.appendChild(name)
    document.body.appendChild(movie)
    movie.classList.add('movie');

    grid.appendChild(movie);
    return movie;
}
function requestForMore(requestNum){
    fetch("https://api.themoviedb.org/3/discover/movie?api_key=adcea8098267daad7efd09aa1db2d419&page=".concat(apiPage)).then((response) => response.json()).then((data) => {
        console.log(data);
        for (let i = 0; i < 20; i++) {
            generateCards(data.results[i]);
       }
        ++requestNumber;
        ++apiPage;
    })
}

function search(keyword){
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1N2I1OGE2NDlmNjFlM2E5ZWEwY2Y2MDNjOTMyZmZlYyIsInN1YiI6IjY0ODIwNjAyZDJiMjA5MDEwYzE3Y2Y0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.o-USUsNsrlcEm9NNKSAJ7022AYC37EhewmyoWt2Xhwg'
        }
      };
      fetch(`https://api.themoviedb.org/3/search/movie?query=${keyword}&include_adult=false&language=en-US&page=1`, options)
        .then(response => response.json())
        .then((data) => {
            console.log(data)
            for (let i = 0; i < data.results.length; i++) {
                grid.appendChild(generateCards(data.results[i]));
                console.log(data.results[i])
            }
        })
}

//main
  fetch("https://api.themoviedb.org/3/discover/movie?api_key=adcea8098267daad7efd09aa1db2d419&page=1").then((response) => response.json()).then((data) => {
      console.log(data);
      for (let i = 0; i < 20; i++) {
           generateCards(data.results[i]);
      }
  })

  loadMoreButton.addEventListener('click', () => {
     requestForMore(requestNumber);
   });

   specifySearchButton.addEventListener('click', function(event){
    event.preventDefault()
    grid.innerHTML = '';
    let searchValue = searchBar.value;
    search(searchValue);
    console.log(searchBar.value)
});




