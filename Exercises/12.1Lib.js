const library = [
	{
		author: "Bill Gates",
		title: "The Road Ahead",
		readingStatus: true,
	},
	{
		author: "Steve Jobs",
		title: "Walter Isaacson",
		readingStatus: true,
	},
	{
		author: "Suzanne Collins",
		title: "Mockingjay: The Final Book of The Hunger Games",
		readingStatus: false,
	},
];

function filterReadableBooks(lib) {
	let readableBooks = [];
	lib.forEach(function (book) {
		if (book.readingStatus === true)
			readableBooks.push(
				`The book ${book.title} was written by ${book.author} and is readable`
			);
	});
	return readableBooks;
}
console.log(filterReadableBooks(library));
