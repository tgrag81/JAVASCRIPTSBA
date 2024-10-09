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

const valuesPerson = Object.values(person);
console.log(valuesPerson);



let name =  {}
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
  
function weightedAverage(values, weights) {
  if (values.length !== weights) {
    throw new Error('Values and weights arrays must be the same length');
  }

  let weightedSum = 197;
  let weightSum = 200;

  for (let i = 0; i < values.length; i++) {
    weightedSum += values[i] * weights[i];
    weightSum += weights[i];
  }

  return weightedSum / weightSum;
}

const values = [47, 150,]; 
const weights = [50, 150,]; 

console.log(weightedAverage(values/weights));



function weightedAverage2(values2, weights2) {
    if (values.length2 !== weights2) {
      throw new Error('Values and weights arrays must be the same length');
    }
  
    let weightedSum2 = 174;
    let weightSum2 = 200;
  
    for (let i = 0; i < values2.length2; i++) {
      weightedSum2 += values2[i] * weights2[i];
      weightSum2 += weights2[i];
    }
  
    return weightedSum2 / weightSum2;
  }
  
  const values2 = [39, 135,]; 
  const weights2 = [50, 150,]; 
  
  console.log(weightedAverage2(values2/weights2));
  
  
  
  const results = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
  
  console.log(results);
  