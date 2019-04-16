/*
 * Complete the gradingStudents function below.
 */
function gradingStudents(grades) {
    /*
     * Write your code here.
     */
    for (let i = 0; i < grades.length; i++) {
        if ((grades[i] + 2) % 5 === 0 && grades[i] > 35) {
            grades[i] = grades[i] + 2
        }
    }

    return grades
}

console.log(gradingStudents([73, 67, 38, 33]))