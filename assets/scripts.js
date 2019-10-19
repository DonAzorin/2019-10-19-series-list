const searchByName = document.querySelector('#searchSeries');
const seriesName = document.querySelector('#seriesName');
const seriesCardResults = document.querySelector('.series-card-results');

searchByName.addEventListener('submit', function(){
  event.preventDefault();
  const search = seriesName.value;
  const apiUrl = `https://kitsu.io/api/edge/anime?filter[text]=${search}`;

  fetch(apiUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (respJson) {
    const resultsList = respJson.data;
      for (let i = 0; i < resultsList.length; i++) {
        const result = resultsList[i];
        console.log(result);
        const seriesName = result.attributes.canonicalTitle;
        const seriesPoster = result.attributes.posterImage.tiny;
        const seriesSlug = result.attributes.slug;
        const seriesLink = `https://kitsu.io/anime/${seriesSlug}`;
        const seriesResults = `
          <div class="card" style="width: 20rem;">
            <img class="img-card-top" src="${seriesPoster}">
            <div class="card-body">
              <h3 class="card-title">${seriesName}</h3>
            </div>
            <a class="btn btn-primary" href="${seriesLink}" target="_blank">Find more info here!</a>
            <a class="btn btn-success">Añade a tus series</a>

          </div>
        `
        seriesCardResults.innerHTML += seriesResults
      }
    })
  
})

function series(name, picture, ranking) {
  this.name = name;
  this.picture = picture;
  this.ranking = ranking;
};

var mySeries = [];

function addSeries() {

};