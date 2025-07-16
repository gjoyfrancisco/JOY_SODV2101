
// Makes the image appear after 10 seconds
setTimeout(() => {
  document.getElementById("profileimg").style.display = "block";
}, 10000);

// Makes the footer have the current date
document.getElementById("year").textContent = new Date().getFullYear();

// Converts the Marks to Grades
function convertMarksToGrade() {
    const inputMark = document.getElementById("InputBox").value.trim();
    const validMarks = document.getElementById("validMessage");

    try {
        if (inputMark === "") throw new Error("The input is empty. Please enter a valid mark.");
        const mark = parseFloat(inputMark);

        if (isNaN(mark)) throw new Error("The input is invalid. Please enter a number.");
        if (mark < 0 || mark > 100) throw new Error("The input is out of range. Please enter a mark between 0 and 100.");

        let grade;
        if (mark >= 90) grade = "A";
        else if (mark >= 80) grade = "B";
        else if (mark >= 70) grade = "C";
        else if (mark >=60) grade = "D";
        else if (mark >= 50) grade = "E";
        else grade = "F";

        validMarks.textContent = `Your grade ${mark} is: ${grade}`;
        validMarks.style.color = "green";
    } catch (error) {
        validMarks.textContent = error.message;
        validMarks.style.color = "red";
    }

}
  