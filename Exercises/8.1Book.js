let book = {
	bookName: "Arcane",
	authorName: "Susan Wakawski",
	yearPublished: "2015",
	publisher: "Riot Games",
};
function bookDetails(bookObj) {
	console.log(
		`The book ${bookObj.bookName} was written by ${bookObj.authorName} in the year ${bookObj.yearPublished} and was published by ${bookObj.publisher}`
	);
}
bookDetails(book);
