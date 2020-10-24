function gradingStudents(grades) {
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] > 100 || grades.length > 60) {
      return;
    }

    const roundedFive = Math.ceil(grades[i] / 5) * 5;
    const difference = roundedFive - grades[i];

    if (difference < 3 && grades[i] > 35) {
      grades[i] = roundedFive;
    }
  }
  return grades;
}

gradingStudents([73, 67, 38, 33]);
gradingStudents([84, 29, 57]);
