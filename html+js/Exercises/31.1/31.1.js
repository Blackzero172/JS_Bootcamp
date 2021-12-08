// const searchButton = document.querySelector(".search-btn");
// const userInput = document.querySelector(".username-input");
const baseURL = "https://swapi.dev/api/people/";
const peopleArr = [];
// userInput.select();
// userInput.focus();
const getfirstTen = async () => {
	for (let i = 1; i <= 10; i++) {
		const person = await axios.get(baseURL + i);
		console.log(person);
		const planet = await axios.get(person.data.homeworld);
		console.log(planet);
		const personObj = {
			name: person.data.name,
			height: person.data.height,
			hairColor: person.data.hair_color,
			homeWorld: planet.data.name,
			homeWorldPop: planet.data.population,
		};
		makeCard(personObj);
		peopleArr.push(personObj);
	}
};
getfirstTen();
const search = () => {
	getUser(userInput.value).catch((err) => {
		searchButton.querySelector("i").classList.toggle("search-animation");
		const popup = document.querySelector(".error-popup");
		console.log(err.response);
		if (err.response.status === 404) {
			popup.classList.toggle("opacity-invisible");
			popup.classList.toggle("z-position");
			setTimeout(() => {
				popup.classList.toggle("opacity-invisible");
			}, 1000);
			setTimeout(() => {
				popup.classList.toggle("z-position");
			}, 2000);
		}
		userInput.value = "";
	});
};
// searchButton.addEventListener("click", search);
// userInput.addEventListener("keypress", (e) => {
// 	if (e.key === "Enter") search();
// });
const makeCard = (person) => {
	const cardDiv = document.createElement("div");
	cardDiv.classList.add("card");
	const nameText = document.createElement("p");
	nameText.textContent = `Name : ${person.name}`;
	cardDiv.append(nameText);
	const heightText = document.createElement("p");
	heightText.textContent = `Height : ${person.height}cm`;
	const hairColorText = document.createElement("p");
	hairColorText.textContent = `Hair color : ${person.hairColor}`;
	const homeWorldText = document.createElement("p");
	homeWorldText.textContent = `Home world : ${person.homeWorld}`;
	const homeWorldPop = document.createElement("p");
	homeWorldPop.textContent = `Home world population : ${person.homeWorldPop}`;
	cardDiv.append(nameText, heightText, hairColorText, homeWorldText, homeWorldPop);
	document.querySelector(".card-container").append(cardDiv);
};
