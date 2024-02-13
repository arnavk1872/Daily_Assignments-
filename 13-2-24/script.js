
// Const value of student specified.
const student = {
    namee: 'Jason',
    age: 21,
    grade: 8,
    subjects: [
        { namee: 'Math', grade: 90 },
        { namee: 'Physics', grade: 85 },
        { namee: 'Chemistry', grade: 55 },
    ],
};

const displayInfo = function (message) {
    console.log(message+"Name of student: " + student.namee + ", Age: " + student.age + ", Grade: " + student.grade);
};
// Display the students information using a loop to iterate over each property in the object.
displayInfo.apply(student, ['Student Information using apply :']);

// Using bind method
const boundDisplayInfo = displayInfo.bind(student, 'Student Information using bind :');
boundDisplayInfo();

// a processSubjects function that takes the input of the subjects a student has an logs it into the console.
// uses callback to check all the elements inside the array.
function processSubjects(subjects, callback) {
    subjects.forEach(callback);
}
processSubjects(student.subjects, (subject) => {
    console.log(`Subject: ${subject.grade} `);
});

//doubleGrades function
function doubleGrades(subjects) {
    const originalGrades = subjects.map((subject) => subject.grade);
    const modifiedGrades = subjects.map((subject) => subject.grade * 2);

    console.log('Original Grades:', originalGrades);
    console.log('Modified Grades:', modifiedGrades);
}

//function to check which subjects the student has passed.
function passingSubjects(subjects, minGrade) {
    const passingSubjects = subjects.filter((subjects) => subjects.grade >= minGrade);
    console.log("Subjects Passed:", passingSubjects);

}
passingSubjects(student.subjects, 70);
doubleGrades(student.subjects);