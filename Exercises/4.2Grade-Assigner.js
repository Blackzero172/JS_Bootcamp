function gradeAssigner(grade) {
  if (grade <= 64) {
    console.log("Your Grade is : F");
  } else if (grade >= 65 && grade <= 69) {
    console.log("Your Grade is : D");
  } else if (grade >= 70 && grade <= 79) {
    console.log("Your Grade is : C");
  } else if (grade >= 80 && grade <= 89) {
    console.log("Your Grade is : B");
  } else if (grade >= 90 && grade <= 100) {
    console.log("Your Grade is : A");
  }
}
gradeAssigner(65);
gradeAssigner(50);
gradeAssigner(90);
