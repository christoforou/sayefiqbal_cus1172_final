let express = require("express");
let sampleData = require("./sampleData");

let data = sampleData.module;

let router = express.Router();

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

});






module.exports = router;
