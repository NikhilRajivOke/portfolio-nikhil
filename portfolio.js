const compArr = [
  {
    name: "Select Health",
    description:
      "During my internship, I designed dynamic user interfaces with React JS and Angular, boosting engagement by 25%, while developing scalable microservices with C# and ASP.NET to cut system latency by 30%. I optimized SQL performance by 45% and implemented TDD with CI/CD pipelines, reducing post-production defects by 40%. My focus on clean code led to the refactoring of over 3,000 lines using SOLID and DRY principles.",

    location: "Salt Lake City",
    dates: "Aug 2023 - Jun 2024",
    position: "Software Engineer Intern",
  },
  {
    name: "Binghamton University",
    description:
      "I mentored over 50 students in data structures and algorithms, helping them grasp key concepts while also grading their submissions. This experience sharpened my communication skills and deepened my understanding of complex topics, enabling me to foster a collaborative learning environment.",
    location: "Binghamton",
    dates: "Aug 2023 - Dec 2023",
    position: "Grading Assistant",
  },
  {
    name: "WeAgile Software Solutions",
    description:
      "I led the development of end-to-end features for a cloud-based Human Capital Management product, driving a 25% increase in user adoption. By creating scalable RESTful web services with Java, Spring Boot, and GraphQL, I reduced API latency by 40%, while designing responsive UI elements with React JS and Redux boosted interaction rates by 20%. Streamlining our deployment with Docker and Kubernetes cut timelines by 20%, all while ensuring code quality through active reviews and scrum collaboration",
    location: "Pune",
    dates: "Dec 2020 - Jun 2021",
    position: "Software Engineer",
  },
  {
    name: "Accenture",
    description:
      "I pioneered full-stack solutions within a micro-frontend architecture using React JS and Material UI, achieving over 40% faster load times for users. Additionally, I designed RESTful API endpoints that enabled seamless CRUD operations for e-commerce order management, resulting in a 30% improvement in efficiency.",
    location: "Bangalore",
    dates: "Sep 2019 - Oct 2020",
    position: "Associate Software Developer ",
  },
];

function showCompany(indx) {
  const companyName = document.getElementById("compName");
  companyName.innerText = compArr[indx].name;
  const location = document.getElementById("location");
  location.innerText = compArr[indx].location;
  const dates = document.getElementById("date");
  dates.innerText = compArr[indx].dates;
  const description = document.getElementById("desc");
  description.innerText = compArr[indx].description;
  const position = document.getElementById("pos");
  position.innerText = compArr[indx].position;
}

function openTab(link) {
  window.open(link, "_blank");
}
