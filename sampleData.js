const data = [
  {
    subject: "Computer-Science",
    courses: [
      {
        crn: "10257",
        title: "CUS1102",
        name: "Software Application",
        credits: "3",
        schedule: [
          { date: "Tuesday", time: "1700-1825" },
          { date: "Friday", time: "1700-1825" }
        ],
        instructor: "Barry Lieberman",
        seats: "18",
        prerequiste: "None",
        lecture_type: "Lecture"
      },
      {
        crn: "11501",
        title: "CUS1115",
        name: "Computer Prog Fund I",
        credits: "3",
        schedule: [
          { date: "Monday", time: "0905-1030" },
          { date: "Thursday", time: "0950-1030" }
        ],
        instructor: "Joan DeBello",
        seats: "0",
        prerequiste: "None",
        lecture_type: "Lecture/Lab"
      },
      {
        crn: "12329",
        title: "CUS1116",
        name: "Computer Prog Fund I",
        credits: "3",
        schedule: [
          { date: "Monday", time: "1215-1340" },
          { date: "Thursday", time: "1215-1340" }
        ],
        instructor: "Bonnie Mackellar",
        seats: "10",
        prerequiste: "None",
        lecture_type: "Lecture/Lab"
      },
      {
        crn: "12560",
        title: "CUS1156",
        name: "Software Design Methods",
        credits: "3",
        schedule: [{ date: "Thursday", time: "1700-1825" }],
        instructor: "Nikhil Yadav",
        seats: "1",
        prerequiste: "CUS1126",
        lecture_type: "Hybrid-Classroom & Online"
      },
      {
        crn: "12948",
        title: "CUS1161",
        name: "Software Engineering",
        credits: "3",
        schedule: [{ date: "Wednesday", time: "1350-1640" }],
        instructor: "Christoforos Christoforou",
        seats: "3",
        prerequiste: "CUS1156",
        lecture_type: "Lecture/Lab"
      },
      {
        crn: "13802",
        title: "CUS1186",
        name: "Theory of Computation",
        credits: "3",
        schedule: [{ date: "Tuesday", time: "1700-1950" }],
        instructor: "Ronald Fechter",
        seats: "12",
        prerequiste: "CUS1126",
        lecture_type: "Lecture"
      }
    ]
  },
  {
    subject: "Computer Security Systems",
    courses: [
      {
        crn: "13323",
        title: "CSS1005",
        name: "Fundamentals of Cyber Security",
        credits: "3",
        schedule: [{ date: "Friday", time: "1040-1205" }],
        instructor: "Erald Troja",
        seats: "0",
        prerequiste: "None",
        lecture_type: "Lecture/Lab"
      },
      {
        crn: "13858",
        title: "CSS1008",
        name: "Healthcare Info Security",
        credits: "3",
        schedule: [{ date: "Wednesday", time: "1700-1825" }],
        instructor: "Sajed Naseem",
        seats: "16",
        prerequiste: "CSS1005 or HCI1001",
        lecture_type: "Hybrid-Classroom & Online"
      },
      {
        crn: "15411",
        title: "CSS1018",
        name: "SQL & Cloud Database Security",
        credits: "3",
        schedule: [{ date: "Monday", time: "1910-2200" }],
        instructor: "Anil Chacko",
        seats: "2",
        prerequiste: "CSS1005 or CUS1165",
        lecture_type: "Lectue/Lab"
      },
      {
        crn: "13913",
        title: "CSS1006",
        name: "Mgmt of Information Security",
        credits: "3",
        schedule: [
          { date: "Monday", time: "1040-1205" },
          { date: "Thursday", time: "1040-1205" }
        ],
        instructor: "Geoffrey Dick",
        seats: "1",
        prerequiste: "CSS1005",
        lecture_type: "Lecture/Lab"
      },
      {
        crn: "13856",
        title: "CSS1011",
        name: "Network Security",
        credits: "3",
        schedule: [{ date: "Tuesday", time: "1350-1515" }],
        instructor: "Suzanna Schmeelk",
        seats: "5",
        prerequiste: "CSS1005 or NET1011",
        lecture_type: "Hybrid-Classroom & Online"
      },
      {
        crn: "14986",
        title: "CSS1015",
        name: "Wireless Security",
        credits: "3",
        schedule: [{ date: "Monday", time: "0905-1030" }],
        instructor: "Suzanna Schmeelk",
        seats: "0",
        prerequiste: "CSS1011",
        lecture_type: "Hybrid-Classroom & Online"
      }
    ]
  },
  {
    subject: "Healthcare Informatics",
    courses: [
      {
        crn: "15413",
        title: "HCI1002",
        name: "Healthcare Info & Data Mgmt",
        credits: "3",
        schedule: [
          { date: "Tuesday", time: "1215-1340" },
          { date: "Friday", time: "1215-1340" }
        ],
        instructor: "Syed Ahmed Chan Bukhari",
        seats: "14",
        prerequiste: "None",
        lecture_type: "Lecture/Lab"
      },
      {
        crn: "15630",
        title: "HCI1015",
        name: "Data Standards/Vocab in HLTHCR",
        credits: "3",
        schedule: [{ date: "Tuesday", time: "1910-2200" }],
        instructor: "Syed Ahmed Chan Bukhari",
        seats: "23",
        prerequiste: "HCI1001",
        lecture_type: "Lecture"
      },
      {
        crn: "11881",
        title: "HCI1021",
        name: "Healthcare Database Mgmt Sys",
        credits: "3",
        schedule: [{ date: "Wednesday", time: "1040-1330" }],
        instructor: "Syed Ahmed Chan Bukhari",
        seats: "4",
        prerequiste: "HCI1002 & CUS1116",
        lecture_type: "Lecture"
      }
    ]
  },
  {
    subject: "Information Technology",
    courses: [
      {
        crn: "13136",
        title: "IT1011",
        name: "Info Technology for Business",
        credits: "3",
        schedule: [
          { date: "Monday", time: "0730-0855" },
          { date: "Thursday", time: "0730-0855" }
        ],
        instructor: "Geoffrey Dick",
        seats: "19",
        prerequiste: "None",
        lecture_type: "Lecture/Lab"
      }
    ]
  },
  {
    subject: "Mathematics",
    courses: [
      {
        crn: "14054",
        title: "MTH1009",
        name: "Calculus I",
        credits: "3",
        schedule: [
          { date: "Tuesday", time: "1525-1640" },
          { date: "Friday", time: "1525-1640" }
        ],
        instructor: "Abdel Aziz Elmrini",
        seats: "0",
        prerequiste: "None",
        lecture_type: "Lecture"
      },
      {
        crn: "10747",
        title: "MTH1009",
        name: "Calculus I",
        credits: "3",
        schedule: [
          { date: "Tuesday", time: "1525-1650" },
          { date: "Friday", time: "1525-1650" }
        ],
        instructor: "Michael Vaisfeld",
        seats: "22",
        prerequiste: "None",
        lecture_type: "Lecture"
      },
      {
        crn: "10031",
        title: "MTH1010",
        name: "Calculus II",
        credits: "3",
        schedule: [{ date: "Wednesday", time: "0730-1020" }],
        instructor: "Frank Servas",
        seats: "15",
        prerequiste: "MTH1009",
        lecture_type: "Lecture"
      },
      {
        crn: "11661",
        title: "MTH1013",
        name: "Probaility & Statistics I",
        credits: "3",
        schedule: [{ date: "Tuesday", time: "0950-1030" }],
        instructor: "Frank Servas",
        seats: "12",
        prerequiste: "None",
        lecture_type: "Lecture"
      },
      {
        crn: "11518",
        title: "MTH1014",
        name: "Probability & Statistics II",
        credits: "3",
        schedule: [
          { date: "Monday", time: "1525-1650" },
          { date: "Thursday", time: "1525-1650" }
        ],
        instructor: "Satyanand Singh",
        seats: "1",
        prerequiste: "MTH1013",
        lecture_type: "Lecture"
      },
      {
        crn: "12571",
        title: "MTH1022",
        name: "Discrete Mathematics",
        credits: "3",
        schedule: [
          { date: "Monday", time: "1700-1825" },
          { date: "Thursday", time: "1700-1825" }
        ],
        instructor: "Satyanand Singh",
        seats: "0",
        prerequiste: "None",
        lecture_type: "Lecture"
      }
    ]
  },
  {
    subject: "Networking",
    courses: [
      {
        crn: "11882",
        title: "Net1011",
        name: "Introduction to Networks",
        credits: "3",
        schedule: [{ date: "Wednesday", time: "1040-1330" }],
        instructor: "Maxine Greenidge",
        seats: "0",
        prerequiste: "None",
        lecture_type: "Lecture/Lab"
      },
      {
        crn: "11634",
        title: "Net1015",
        name: "Routing & Switching Essentials",
        credits: "3",
        schedule: [{ date: "Wednesday", time: "0730-1020" }],
        instructor: "Maxine Greenidge",
        seats: "0",
        prerequiste: "Net1011",
        lecture_type: "Lecture/Lab"
      },
      {
        crn: "12768",
        title: "Net1061",
        name: "Advanced Network Routing",
        credits: "3",
        schedule: [{ date: "Saturday", time: "0830-1120" }],
        instructor: "John Rullan",
        seats: "25",
        prerequiste: "Net1015",
        lecture_type: "Lecture/Lab"
      },
      {
        crn: "11336",
        title: "Net1091",
        name: "Networking Internship",
        credits: "3",
        schedule: [{ date: "None", time: "None" }],
        instructor: "Nikhil Yadav",
        seats: "0",
        prerequiste: "None",
        lecture_type: "Internship"
      }
    ]
  }
];

exports.module=data;