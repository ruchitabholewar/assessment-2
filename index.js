// run `node index.js` in the terminal
// s array of student objects
const students = [
  { name: 'Ruchita', chemistryMarks: 70, biologyMarks: 80, dob: '01-01-2000' },
  { name: 'Abhishek', chemistryMarks: 80, biologyMarks: 75, dob: '05-02-2000' },
  { name: 'Ankita', chemistryMarks: 85, biologyMarks: 90, dob: '02-03-2000' },
  { name: 'Ipshit', chemistryMarks: 80, biologyMarks: 75, dob: '01-01-2000' },
];

// sort the array based on the given criteria
students.sort((a, b) => {
  // sort based on total marks (highest to lowest)
  if (a.chemistryMarks + a.biologyMarks > b.chemistryMarks + b.biologyMarks) {
    return -1;
  } else if (a.chemistryMarks + a.biologyMarks < b.chemistryMarks + b.biologyMarks) {
    return 1;
  }

  // sort based on biology marks (highest to lowest)
  if (a.biologyMarks > b.biologyMarks) {
    return -1;
  } else if (a.biologyMarks < b.biologyMarks) {
    return 1;
  }

  // sort based on date of birth (oldest to youngest)
  const aDob = new Date(a.dob.split('-').reverse().join('-'));
  const bDob = new Date(b.dob.split('-').reverse().join('-'));
  if (aDob < bDob) {
    return -1;
  } else if (aDob > bDob) {
    return 1;
  }

  // if all criteria are the same, maintain original order
  return 0;
});

// print the sorted array
console.log(students);

