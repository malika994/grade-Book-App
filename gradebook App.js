

// return averageScore ex:92, 88, 12, 77, 57, 100, 67, 38, 97, 89=71.7
function getAverage(scores) {
    let numberofSubject = scores.length;
    let averageScore;
    let sum = 0;
    for (let s of scores) {
        sum += s;
    }
    averageScore = sum / numberofSubject;
    return averageScore;

}
let avrageScore = getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]);

let grade;
//return the grade according to the avrage score
function getGrade(avrageScore) {
    if (avrageScore == 100) {
        grade = "A+";

    }
    else if (avrageScore >= 90 && avrageScore <= 99) {
        grade = "A";

    } else if (avrageScore >= 80 && avrageScore <= 89) {
        grade = "B";

    } else if (avrageScore >= 70 && avrageScore <= 79) {
        grade = "C";

    }
    else if (avrageScore >= 60 && avrageScore <= 69) {
        grade = "D";

    } else if (avrageScore >= 0 && avrageScore <= 59) {
        grade = "F";
    }
    return grade;
}
let studentGrade = getGrade(avrageScore);

function hasPassingGrade(scores) {
    return getGrade(scores) !== "F";
}
function studentMsg(scoreArr, score) {

    let studentPassed = (hasPassingGrade(score))
    let avScore = getAverage(scoreArr);
    let grade = getGrade(score);

    return studentPassed == false
        ? `Class average: ${avScore}. Your grade: ${grade}. You failed the course.`
        : `Class average: ${avScore}. Your grade: ${grade}. You passed the course.`;
}

console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
console.log(studentMsg([56, 23, 89, 42, 75, 11, 68, 34, 91, 19], 100));
