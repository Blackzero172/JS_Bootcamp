const searchButton = document.querySelector(".search-btn");
const userInput = document.querySelector(".username-input");
userInput.select();
userInput.focus();
const baseURL = "https://api.github.com/users/";
const getUser = async (userID) => {
	searchButton.querySelector("i").classList.toggle("search-animation");
	const user = await axios.get(baseURL + userID);
	searchButton.querySelector("i").classList.toggle("search-animation");
	makeCard(user.data);
	userInput.value = "";
};
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
searchButton.addEventListener("click", search);
userInput.addEventListener("keypress", (e) => {
	if (e.key === "Enter") search();
});
const makeCard = (data) => {
	const cardDiv = document.createElement("div");
	cardDiv.classList.add("card");
	const avatar = document.createElement("img");
	avatar.src = data.avatar_url;
	const usernameText = document.createElement("p");
	usernameText.textContent = `Username : ${data.login}`;
	cardDiv.append(avatar, usernameText);
	if (data.name !== null) {
		const nameText = document.createElement("p");
		nameText.textContent = `Name : ${data.name}`;
		cardDiv.append(nameText);
	}
	const publicRepoCount = document.createElement("p");
	publicRepoCount.textContent = `Public Repos : ${data.public_repos}`;
	const followerCount = document.createElement("p");
	followerCount.textContent = `Followers : ${data.followers}`;
	cardDiv.append(publicRepoCount, followerCount);
	document.querySelector(".card-container").append(cardDiv);
};
