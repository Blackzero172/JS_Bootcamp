/*
1. Movie poster
2. Movie title
3. Genre
4. Year
5. Plot
6. Director
7. Actors
8. Ratings of movies from imdb, rotten tomatoes and
metacritic.
(make sure that particular movie gives you all the ratings.
It could be, that movie won’t give you all 3 ratings)
*/
const searchButton = document.querySelector(".search-btn");
const userInput = document.querySelector(".movie-input");
userInput.select();
userInput.focus();
const baseURL = "http://www.omdbapi.com/?apikey=b92ae137&";
const getMovie = async (movieName) => {
	searchButton.querySelector("i").classList.toggle("search-animation");
	movieName = movieName.replace(" ", "+");
	const movie = await axios.get(baseURL + `t=${movieName}`);
	console.log(movie.data);
	makeMoviePoster(movie.data);
	searchButton.querySelector("i").classList.toggle("search-animation");
	userInput.value = "";
};
const search = () => {
	getMovie(userInput.value).catch((err) => {
		searchButton.querySelector("i").classList.toggle("search-animation");
		const popup = document.querySelector(".error-popup");
		console.log(err.response);
		// if (err.response.status === 404) {
		popup.classList.toggle("opacity-invisible");
		popup.classList.toggle("z-position");
		setTimeout(() => {
			popup.classList.toggle("opacity-invisible");
		}, 1000);
		setTimeout(() => {
			popup.classList.toggle("z-position");
		}, 2000);
		// }
		userInput.value = "";
	});
};
searchButton.addEventListener("click", search);
userInput.addEventListener("keypress", (e) => {
	if (e.key === "Enter") search();
});
const makeMoviePoster = (data) => {
	const movieContainer = document.querySelector(".movie-container");
	movieContainer.innerHTML = "";
	console.log(movieContainer);
	console.log(data.Poster);
	const posterIMG = document.createElement("img");
	posterIMG.src = data.Poster;
	console.log(posterIMG);
	const titleText = document.createElement("p");
	titleText.textContent = `Movie Title: ${data.Title}`;
	console.log(titleText);
	const genreText = document.createElement("p");
	genreText.textContent = `Genre: ${data.Genre}`;
	console.log(genreText);
	const yearText = document.createElement("p");
	yearText.textContent = `Year: ${data.Year}`;
	console.log(yearText);
	const plotText = document.createElement("p");
	plotText.textContent = `Plot: ${data.Plot}`;
	console.log(plotText);
	const directorText = document.createElement("p");
	directorText.textContent = `Director: ${data.Director}`;
	console.log(directorText);
	const actorsText = document.createElement("p");
	actorsText.textContent = `Actors: ${data.Actors}`;
	console.log(actorsText);
	const ratingsText = document.createElement("p");
	let ratingString = "";
	data.Ratings.forEach((rating) => {
		ratingString += `${rating.Source}: ${rating.Value} `;
	});
	ratingsText.textContent = `Ratings: ${ratingString}`;
	console.log(ratingsText);
	movieContainer.append(
		posterIMG,
		titleText,
		genreText,
		yearText,
		plotText,
		directorText,
		actorsText,
		ratingsText
	);
};
