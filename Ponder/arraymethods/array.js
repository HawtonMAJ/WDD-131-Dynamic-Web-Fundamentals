// 1. JavaScript arrays
//              0       1           2               3
let names = ["Nark", "Mathen", "Markthaniel", "Markenshmirtz"];
console.log(names);
console.log(names[2]);
let grades = [89, 39, 55, 100];
console.log(grades);
// 2. JS objects
// Own custom datatype
let studentname = "Nark";
let studentclasses = ["WDD131", "CSE111", "ENG101", "CSE130"];
let studentgraee = [100, 90, 72, 54];
// This is an object--literal
let student = {
    // key/value pairs
    name:"Nark",
    classes:["WDD131", "CSE111", "ENG101", "CSE130"],
    grades:[100, 90, 72, 54]
};
// Accessing objecgt property
console.log(student.name);
// 3. Array methods
names.forEach((name) => {
    // Runs this function once for every element in the array, one at a time.
    console.log(name);
});
// map functions
let newNames = names.map((name) =>{
    return name + " Hatchley"
})
console.log(newNames)
// returns new array filtered by boolean
let filteredName = names.filter((name))



function convert(grade) {
    switch (grade){
        case 'A':
            points = 4;
            break;
        case 'B':
            points = 3;
            break;
        case 'C':
            points = 2;
            break;
        case 'D':
            points = 1;
            break;
        case 'F':
            points = 0;
            break;
        default:
            alert('not a valid grade');
    }
    return points;
}

const words = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];

const students = [
    {last: 'Andrus', first: 'Aaron'},
    {last: 'Masa', first:'Manny'},
    {last: 'Tanda', first: 'Tamanda'}
];
