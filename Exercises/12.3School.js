const school = {
	teachers: [
		{
			id: 1,
			name: "Pinchas",
			subjects: ["chemistry", "biology", "physics"],
			students: [],
			capacityLeft: 3,
		},
		{
			id: 2,
			name: "Williams",
			subjects: ["history", "ethics"],
			students: [],
			capacityLeft: 2,
		},
	],
	students: [
		{
			id: 10,
			name: "Jennifer",
			age: 20,
		},
		{
			id: 11,
			name: "Howard",
			age: 23,
		},
		{
			id: 12,
			name: "Old-Timmy",
			age: 86,
		},
		{
			id: 13,
			name: "Houston",
			age: 21,
		},
	],
};

function findPerson(isTeacher, id) {
	let wantedPerson;
	let catalog;
	if (isTeacher) {
		catalog = school.teachers;
	} else {
		catalog = school.students;
	}
	catalog.forEach(function (person) {
		if (person.id === id) {
			wantedPerson = person;
		}
	});
	return wantedPerson;
}
console.log(findPerson(true, 1));

function assignStudent(id, subject) {
	let students = school.students;
	let wantedStudent;
	students.forEach(function (student) {
		if (student.id === id) {
			wantedStudent = student;
		}
	});
	let teachers = school.teachers;
	let wantedTeacher;
	teachers.forEach(function (teacher) {
		if (teacher.subjects.includes(subject)) {
			wantedTeacher = teacher;
		}
	});
	if (typeof wantedTeacher === "undefined" || wantedTeacher.capacityLeft <= 0) {
		console.log("Sorry no available Teachers Left");
		return;
	}
	wantedTeacher.students.push(wantedStudent);
	wantedTeacher.capacityLeft -= 1;
	console.log(wantedTeacher);
}
assignStudent(10, "chemistry");
assignStudent(11, "chemistry");
assignStudent(12, "chemistry");
assignStudent(13, "chemistry");

function assignTeachersSubject(id, subject) {
	let teachers = school.teachers;
	let wantedTeacher;
	teachers.forEach(function (teacher) {
		if (teacher.id === id) {
			wantedTeacher = teacher;
		}
	});
	if (!wantedTeacher.subjects.includes(subject)) {
		wantedTeacher.subjects.push(subject);
		console.log(wantedTeacher);
	} else {
		console.log("Sorry this teacher already teaches this subject");
		return;
	}
}
assignTeachersSubject(1, "math");
assignTeachersSubject(1, "chemistry");
