// const baseURL = "https://api.jokes.one/jod";
// const getJoke = () => {
// 	const text = document.querySelector("h2");
// 	fetch(baseURL)
// 		.then((response) => response.json())
// 		.then((data) => (text.textContent = data.contents.jokes[0].joke.text))
// 		.catch((e) => (text.textContent = "try again"));
// };
// document.querySelector("button").addEventListener("click", getJoke);
const baseURL = "https://api.jokes.one/jod";
const getJoke = async () => {
	const text = document.querySelector("h2");
	const joke = await axios.get(baseURL);
	text.textContent = joke.data.contents.jokes[0].joke.text;
};
document.querySelector("button").addEventListener("click", getJoke);
