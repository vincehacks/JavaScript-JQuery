// Created by: Vince Chang
// Run with: nodemon index.js or test it with Postman

/* =========================================================================
 * File Name: index.js
 * Task: Create a basic REST API that will demonstrate the C.R.U.D properties
 * using Express.js
 *
 * METHODS AVAILABLE FOR C.R.U.D
 * app.get();
 * app.post();
 * app.put();
 * app.delete();
 ========================================================================= */
// Load Joi class module that will help with validation
const Joi = require('joi');

// Load express module and create and express object
const express = require('express');
const app = express();
app.use(express.json()); // This is middleware to use json
const courses = [
  { id: 1, name: 'course1' },
  { id: 2, name: 'course2' },
  { id: 3, name: 'course3' }
];

/* =========================================================================
 * GET
 * Route Name: '/'
 * Parameters: None
 * Task: Print out the response 'Hello World!'
 * get(path, callback function)
 ========================================================================= */
app.get('/', (req, res) => {
  res.send('Hello World!');
});
/* =========================================================================
 * GET
 * Route Name: '/api/courses'
 * Parameters: None
 * Task: Response will be the array of courses listed above
 ========================================================================= */
app.get('/api/courses', (req, res) => {
  res.send(courses);
});

/* =========================================================================
 * GET
 * Route Name: '/api/courses/:id'
 * Parameters: id, the id of the course
 * Task: Response will return back the object that matches the id from the param
 * if not found, the response will throw an error message of not found
 ========================================================================= */
app.get('/api/courses/:id', (req, res) => {
  const course = courses.find(c => c.id == parseInt(req.params.id));
  if (!course)
    return res.status(404).send(`Course with id: ${req.params.id} not found!`);
  else
    res.send(course);
});

/* =========================================================================
 * POST
 * Route Name: '/api/courses/'
 * Parameters: None
 * Task: Response will post a new course to the courses array, validate first
 * manually and then with the Joi module
 ========================================================================= */
app.post('/api/courses/', (req, res) => {

  // Validate by calling the Joi validation function
  const { error } = validate(req.body)
  if (error)
    return res.status(404).send(error.details[0].message);


  // WITHOUT USING JOI MODULE : Validate the request first
  // if (!req.body.name || req.body.name.length < 3) {
  //   res.status(400).send('Name is required and should be min of 3 characters');
  //   return;
  // }

  const newCourse = {
    id: courses.length + 1, // If working with a DB, this would auto increment
    name: req.body.name     // Need to enable json because not done by default
  };

  // Update the courses array with this new course
  courses.push(newCourse);
  res.send(newCourse); // Return the new object to the body of the response
})


/* =========================================================================
 * PUT
 * Route Name: '/api/courses/:id/'
 * Parameters: id, the id of the course
 * Task: Update the course information
 ========================================================================= */
app.put('/api/courses/:id', (req, res) => {
  const course = courses.find(c => c.id == parseInt(req.params.id));
  if (!course)
    return res.status(404).send(`The course id ${req.params.id} is not found!`);


  // Validate by calling the Joi validation function
  const { error } = validate(req.body)
  if (error)
    return res.status(400).send(error.details[0].message);

  // Update the object and return the update course
  course.name = req.body.name;
  res.send(course);

});

/* =========================================================================
 * DELETE
 * Route Name: '/api/courses/:id/'
 * Parameters: id, the id of the course that you want to delete
 * Task: Update the course information
 ========================================================================= */
app.delete('/api/courses/:id', (req, res) => {
  const course = courses.find(c => c.id == parseInt(req.params.id));
  if (!course)
    return res.status(404).send(`The course id ${req.params.id} is not found!`);

  // Delete the course by getting the index, use splice to remove at the index
  const index = courses.indexOf(course);
  courses.splice(index, 1); // 1 means remove 1 object

  // Update the courses array by removing the id
  res.send(course);
})

/* =========================================================================
 * VALIDATE LOGIC
 * Function Name: validate
 * Parameters:
 * Task: Validate the course information using the Joi module
 ========================================================================= */
function validate(course) {

  // Validate using Joi
  const schema = {
    name: Joi.string().min(3).required()
  };

  return Joi.validate(course, schema);
}


// Get the port of what the system wants to use as a default port, can't always
// hard code port:3000 because port is dynamically assigned in production
// Achieve this using Environment Variables
// Can set the port manually by going to the root directory 'export PORT=5000'
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));