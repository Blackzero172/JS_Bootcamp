let firstBook = { name: "Arcane", Author: "Susan", yearPublished: "2020" };
let secondBook = {
	name: "Ready Player One",
	Author: "Ernest",
	yearPublished: "2019",
};
const bookUtils = {};

bookUtils.getFirstPublished = function (book1, book2) {
	if (book1.yearPublished < book2.yearPublished) {
		return book1;
	} else {
		return book2;
	}
};

bookUtils.setEdition = function (book, editionYear) {
	book.latestEdition = editionYear;
	return book;
};

bookUtils.setLanguage = function (book, language) {
	book.language = language;
	return book;
};

bookUtils.setTranslator = function (book, translator) {
	book.translator = translator;
	return book;
};

bookUtils.setPublisher = function (book, publisher) {
	book.publisher = publisher;
	return book;
};

bookUtils.isSamePublisher = function (book1, book2) {
	let samePublisher = false;
	if (
		book1.publisher.name === book2.publisher.name &&
		book1.publisher.location === book2.publisher.location
	) {
		samePublisher = true;
	}
    return samePublisher;
};

bookUtils.setEdition(firstBook, 2021);
bookUtils.setEdition(secondBook, 2020);

bookUtils.setLanguage(firstBook, "English");
bookUtils.setLanguage(secondBook, "English");

bookUtils.setTranslator(firstBook, {
	translator: "Akane",
	language: "Japanese",
});
bookUtils.setTranslator(secondBook, { translator: "Hwan", language: "Korean" });

bookUtils.setPublisher(firstBook, { name: "Riot Games", location: "USA" });
bookUtils.setPublisher(secondBook, { name: "Riot Games", location: "USA" });


console.log(firstBook)
console.log(secondBook)
console.log(bookUtils.isSamePublisher(firstBook,secondBook));