// console.log("Hello, World");
// ตัวแปรที่มีคือ String,Number,Boolean,Object,Array

// String
// let fname = "John";

// Number
// let age = 30;
// let height = 5.9;

// console.log("Name :",fname);
// console.log("Age :",age);
// console.log("Height :",height);


// + = บวก
// - = ลบ
// * = คูณ
// / = หาร
// % = mod

// let number1 = 10;
// let number2 = 3;

// let result = number1 + number2;

// console.log("ผลบวก = ",result);


/**
    == เท่ากับ
    != ไม่เท่ากับ
    > มากกว่า
    < น้อยกว่า
    >= มากกว่าเท่ากับ
    <= น้อยกว่าเท่ากับ
*/

// let number1 = 5;
// let number2 = 5;
// let condition = number1 < number2; //boolean
// console.log("condition :",condition);

// }if- else condition
// if (number1 > number2){
//      console.log("this is else if")

// }else if(number1 + number2){
//      console.log("this is else if")
// }
// else{
//      console.log("this is else");
// }


/**
 Grade
 >= 80 = A
    >= 70 B
    >= 60 C
    >= 50 D
    <  50 F
 */

    // let score = 85;
    // if(score>=80){
    //      console.log("Grade : A")
    // }else if(score >=70){
    //      console.log("Grade : B")
    // }else if(score >=60){
    //      console.log("Grade : C")
    // }else if(score >=50){
    //      console.log("Grade : D")
    // }else{
    //      console.log("Grade : C")
    // }

// let number1 = 5;
// let number2 = 10;

// let condition = (number > 0)&&(number2 > 0)
// console.log("Condition:",condition);

// let age = 25;
// let gender = "Female";
// if(age >= 18 && gender == "Female"){
//      console.log("คุณสามารถเข้าร่วมกิจกรรมได้")
// }

// let number1 = 20;

// if(!(number1 % 2 == 0)){
//      console.log("Even")
// }else{
//      console.log("Odd")
// }

// let counter = 0;
// while(counter <= 11){
//     counter = counter+1
//     console.log("While :",counter);
// }

// for(i=1;i <=5; i++){
//     console.log("For:",i)
// }

/**
 array
 */
// let age1 = 25;
// let age2 = 30;
// let age3 = 35;
// console.log(age1, age2. age3) // 25 30 35
// let ages = [25, 30, 35];
// console.log(ages); // [25, 30, 35]
//ระบุตำแหน่ง
// console.log(ages[1]);

//แทนที่ค่่าใน array
// ages = [40 ,45, 50];
// console.log(ages); // [40, 45, 50]

//ต่อ array
// ages.push(55);
// console.log(ages); // [40, 45, 50]

//นับความยาว array
// console.log(ages.length); //4

//ลบสมาชิกตัวสุดท้ายของ array
// ages.pop();
// console.log(ages); //[40, 45, 50]

// if (ages.includes(45)){
//     console.log("พบ 45 in array"); 
// }

//เรียงจากน้อยไปมาก
// let numbers = [90, 60, 80, 40, 50];
// numbers.sort();
// console.log(numbers); // [40, 50, 60, 80, 90]

//เก็บตัวอักษรใน array
// let names = ["John", "Jane", "Doe"];
// names.push("Smith");
// console.log(names);
// console.log(names.length);

// for (let i = 0; i < names.length; i++){
//     console.log(names[i]);
// }

// let score = [10, 20, 30, 40, 50];

// // let newScore = []

// for (let index = 0; index < score.length; index++) {
//     console.log('score',score[index])
//     if(score[index] >= 30){
//         newScore.push(score[index])
//     }
// }

// let newScore = score.filter((s) => {
//     if(s>=30){
//         return true
//     }else{
//         return false
//     }
// })

// // console.log('newScore :',newScore)

// newScore.forEach((ns) => {
//     console.log('new score: ',ns)
// })

// for (let i = 0; i < score.length; i++) {
//     console.log(`Score at index ${i} is ${score[i]}`);
// }

// // score.forEach((s) => {
// //     console.log('score', s)
// // })

// score = score.map((s) => {
//     return s * 2
// })

// score[0] = score[0] * 2

// score.forEach((s) => {
//     console.log('new score:',s)
// })

/**
 object <---- เก็บประเภทของข้อมูล ---->
 */

// let student = [{
//     age: 30,
//     name: "John",
//     grade: 'A'
// },{
//     age: 22,
//     name: "Liam",
//     grade: 'B'
//  }];

// for (let i = 0; i < student.length; i++) {
//     console.log("Student" + (i+1) + ":")
//     console.log("Name: " + student[i].name)
//     console.log("Age: " + student[i].age)
//     console.log("Grade: " + student[i].grade)

// }
// student.push({
//     age: 21,
//     name: "Olivia",
//     grade: 'A'
// })
// console.log(student)

//  console.log(student);
//  console.log(student.name)

/**
 fuction
 */
// ประกาศฟังห์ชัน

// function calculate_grade(score){
//     if(score>=90){
//         grade = 'A';
//     }else if(score>=80){
//         grade = 'B';
//     }else if(score>=70){
//         grade = 'C';
//     }else if(score>=60){
//         grade = 'D';
//     }else{
//         grade = 'F';
//     }
//     return grade;
// }
// //เรียกใช้ฟังก์ชัน
// let student_score = 85;
// let student_grade = calculate_grade(student_score);
// console.log("Student's grade is: " + student_grade)

/**
 object + function <------ midterm ----->
 */
let students = [
    {
        name: 'aa',
        score: '50',
        grade: 'A'
    },
    {
        name: 'bb',
        score: '60',
        grade: 'B'

    }
]
console.log('Student ;',students[0])

// หา data ว่ามีหรือไม่
let student = students.find((s) => {
    if(s.name == 'bb'){
        return true
    }
})

let doublescore_student = students.map((s) => {
    s.score = s.score * 2
    return s
})

console.log('student:',student)
console.log(doublescore_student)

// filter หาสิ่งที่ต้องการจะหา
let hightScore_student = students.filter((s) => {
    if(s.score >=110){
        return true
    }
})
console.log('highScore_student',hightScore_student)