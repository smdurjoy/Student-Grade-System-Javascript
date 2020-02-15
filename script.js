
const result = () => {
    let bangla = document.getElementById('bangla').value; 
    let english = document.getElementById('english').value; 
    let math = document.getElementById('math').value; 
    let physics = document.getElementById('physics').value; 
    let chemestry = document.getElementById('chemestry').value; 
    let grade = '';
    let passFail = '';

    let totalMarks = parseFloat(bangla) + parseFloat(english) + parseFloat(math) + parseFloat(physics) + parseFloat(chemestry);
    
    if(totalMarks <= 400 && totalMarks >= 500) {
        grade = 'A+';
    }else if(totalMarks <= 350 && totalMarks >= 399) {
        grade = 'A';
    }else if(totalMarks <= 300 && totalMarks >= 349) {
        grade = 'B';
    }else if(totalMarks <= 250 && totalMarks >= 299 ) {
        grade = 'C';
    }else if(totalMarks <= 200 && totalMarks >= 249) {
        grade = 'D';
    }else {
        grade = 'F';
    }

    if(totalMarks <= 164) {
        passFail = 'Fail';
    }else {
        passFail = 'Pass';
    }

    document.querySelector('.showData').innerHTML = `Your Total Marks is: ${totalMarks} <br> Grade: ${grade} <br> You are ${passFail}`;
}