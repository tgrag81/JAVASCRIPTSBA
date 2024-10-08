let id= "Software Engineering UCI 1018: MERN"

// hoist 
//Function Declaration then Function Expression
//fuDeclaration()
//funExpression()
//Arrow Functions 
//Return true if planet argument is either "true" othewise return false


const person = {
    name: 'Terence Gragston',
    age: 42,
    job: 'Engineer'
};

const values = Object.values(person);
console.log(values);



let name =  "Terence Gragston"
const func1 = function () {}

const object = {
  func2: function () {},
};

console.log(func1.name);
// Expected output: "Terence Gragston"

console.log(object.func2.name);
// Expected output: "func2"
//Name



//Time

const now = new Date();

const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const timeOptions = { hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };

const formattedDate = now.toLocaleDateString(undefined, dateOptions);
const formattedTime = now.toLocaleTimeString(undefined, timeOptions);

console.log(formattedDate);
console.log(formattedTime); 






// The provided course information.
const CourseInfo = {
    id: 451,
    name: "Introduction to JavaScript"
  };
  
  // The provided assignment group.
  const AssignmentGroup = {
    id: 12345,
    name: "Fundamentals of JavaScript",
    course_id: 451,
    group_weight: 25,
    assignments: [
      {
        id: 1,
        name: "Declare a Variable",
        due_at: "2024-10-08",
        points_possible: 50
      },
      {
        id: 2,
        name: "Loops and Iterations",
        due_at: "2024-09-30",
        points_possible: 150
      },
      {
        id: 3,
        name: "SBA JavaScript Fundamentals",
        due_at: "2024-10-08",
        points_possible: 500
      }
    ]
  };
  
  // The provided learner submission data.
  const LearnerSubmissions = [
    {
      learner_id: 125,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-25",
        score: 47
      }
    },
    {
      learner_id: 125,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-02-12",
        score: 150
      }
    },
    {
      learner_id: 125,
      assignment_id: 3,
      submission: {
        submitted_at: "2023-01-25",
        score: 400
      }
    },
    {
      learner_id: 132,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-24",
        score: 39
      }
    },
    {
      learner_id: 132,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-03-07",
        score: 140
      }
    }
  ];
  
  function getLearnerData(course, ag, submissions) {
    // here, we would process this data to achieve the desired result.  Add formulas here.
    const result = [
      {
        id: 125,
        avg: 0.985, // (47 + 150) / (50 + 150)
        1: 0.94, // 47 / 50
        2: 1.0 // 150 / 150
      },
      // 
      {
        id: 132,
        avg: 0.82, // (39 + 125) / (50 + 150)
        1: 0.78, // 39 / 50
        2: 0.833 // late: (140 - 15) / 150
      }
    ];

    function calculateAverage(numbers) {
        if (numbers.length === 0) {
          return 0; 
        }
      
        let sum = 0;
        for (let i = 0; i < numbers.length; i++) {
          sum += numbers[i];
        }
      
        return sum / numbers.length;
      }
  
    return result;
  }
  
  const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
  
  console.log(result);
  