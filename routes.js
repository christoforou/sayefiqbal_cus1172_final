let express = require("express");
let sampleData = require("./sampleData");
let pug = require("pug");

let data = sampleData.module;

let router = express.Router();

router.get("/", function(req, res) {
  // pass parameter here
  console.log(data.module);
  res.send(data);
});

router.get("/courses/qByTitle/",function(req,res){
  res.send([])
});

router.get("/courses/qByName/",function(req,res){
  res.send([])
});

router.get("/courses/qByInstructor/",function(req,res){
  res.send([])
});



//search by course_title
router.get("/courses/qByTitle/:query", function(req, res) {
  query = req.params["query"].toLowerCase();
  console.log(query);
  sendData = [];
  data.map(subject => {
    subject.courses.map(course => {
      if (course.title.toLowerCase().includes(query)) {
        sendData.push(course);
      }
    });
  });
  res.json(sendData);
  // res.render('index',sendData)
});

//search by course_name
router.get("/courses/qByName/:query", function(req, res) {
  query = req.params["query"].toLowerCase();
  console.log(query);
  sendData = [];
  data.map(subject => {
    subject.courses.map(course => {
      if (course.name.toLowerCase().includes(query)) {
        sendData.push(course);
      }
    });
  });
  res.json(sendData);
});

//search by course_instructor
router.get("/courses/qByInstructor/:query", function(req, res) {
  query = req.params["query"].toLowerCase();
  console.log(query);
  sendData = [];
  data.map(subject => {
    subject.courses.map(course => {
      if (course.instructor.toLowerCase().includes(query)) {
        sendData.push(course);
      }
    });
  });
  res.json(sendData);
});

//search by lecture_type
router.get("/courses/qByLectureType/:query", function(req, res) {
  query = req.params["query"].toLowerCase();
  console.log(query);
  sendData = [];
  data.map(subject => {
    subject.courses.map(course => {
      if (course.lecture_type.toLowerCase().includes(query)) {
        sendData.push(course);
      }
    });
  });
  res.json(sendData);
});

//search by schedule
router.get("/courses/qBySchedule/:query", function(req, res) {
  query = req.params["query"].toLowerCase();
  console.log(query);
  sendData = [];
  data.map(subject => {
    subject.courses.map(course => {
      course.schedule.map(schedule => {
        if (schedule.date.toLowerCase().includes(query)) {
          sendData.push(course);
        }
      });
    });
  });
  res.json(sendData);
});

//search by seats available
router.get("/courses/qBySeats", function(req, res) {
  sendData = [];
  data.map(subject => {
    subject.courses.map(course => {
      let seats_avaliable = parseInt(course.seats, 10);
      console.log(seats_avaliable, "hello");
      if (seats_avaliable > 0) {
        console.log(course);
        sendData.push(course);
      }
    });
  });
  res.json(sendData);
});

//search by combinations
router.get("/courses/qByTitle/:queryTitle/qByName/:queryName/qByInstructor/:queryInstructor", function(req, res) {
  
  qtitle = req.params['queryTitle'].toLowerCase();
  qname = req.params["queryName"].toLowerCase();
  qinstructor = req.params['queryInstructor'].toLowerCase();

  sendData = [];
  data.map(subject => {
    subject.courses.map(course => {
      if(qtitle === "none" && qname === "none" && qinstructor === "none"){
        sendData.push(course);
      }

      if(qtitle != "none" && qname != "none" && qinstructor != "none"){
        if (course.title.toLowerCase().includes(qtitle) && course.name.toLowerCase().includes(qname) && course.instructor.toLowerCase().includes(qinstructor)) {
          sendData.push(course);
        }
      }

      if(qtitle ==="none" && qname === "none" && qinstructor != "none"){
        if (course.instructor.toLowerCase().includes(qinstructor)) {
          sendData.push(course);
        }
      }

      if(qtitle ==="none" && qname != "none" && qinstructor === "none"){
        if (course.name.toLowerCase().includes(qname)) {
          sendData.push(course);
        }
      }

      if(qtitle !="none" && qname === "none" && qinstructor === "none"){

        if (course.title.toLowerCase().includes(qtitle)) {
          sendData.push(course);
        }
      }

      if(qtitle !="none" && qname != "none" && qinstructor === "none"){
        if (course.title.toLowerCase().includes(qtitle) && course.name.toLowerCase().includes(qname)) {
          sendData.push(course);
        }
      }

      if(qtitle !="none" && qname === "none" && qinstructor != "none"){

        if (course.title.toLowerCase().includes(qtitle)&&course.instructor.toLowerCase().includes(qinstructor)) {
          sendData.push(course);
        }
      }

      if(qtitle ==="none" && qname != "none" && qinstructor != "none"){
        if (course.name.toLowerCase().includes(qname)&&course.instructor.toLowerCase().includes(qinstructor)) {
          sendData.push(course);
        }
      }
    });
  });
  res.json(sendData);
  // res.render('index',sendData)
});






module.exports = router;
