function calculateGrade() {
    const mark = parseInt(document.getElementById('mark').value);
    const resultDiv = document.getElementById('result');
    
    if (isNaN(mark) || mark < 0 || mark > 100) {
        resultDiv.innerHTML = 'Please enter your mark between 0 and 100.';
        return;
    }

    let grade;
    let status;

    if (mark >= 90) {
        grade = 'A+';
        status = 'Passed';
    } else if (mark >= 80) {
        grade = 'A';
        status = 'Passed';
    } else if (mark >= 70) {
        grade = 'B+';
        status = 'Passed';
    } else if (mark >= 60) {
        grade = 'B';
        status = 'Passed';
    } else if (mark >= 50) {
        grade = 'C+';
        status = 'Passed';
    } else if (mark >= 40) {
        grade = 'C';
        status = 'Passed';
    } else if (mark >= 30) {
        grade = 'D+';
        status = 'Passed';
    } else if (mark >= 20) {
        grade = 'D';
        status = 'Failed';
    } else {
        grade = 'E';
        status = 'Failed';
    }

    resultDiv.innerHTML = `Grade: ${grade}<br>Status: ${status}`;
       
}