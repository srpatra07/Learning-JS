const course = {
    courseName: "FullStack Java",
    courseFee: 30000.00,
    courseInstructor: "Ashok Sir"
}

//To help programmers from writing such lengthy variable name like course.courseInstructor
//We use destructor
const {courseInstructor} = course
console.log(courseInstructor);

// To shorten more
const {courseInstructor: instructor} = course
console.log(instructor);
