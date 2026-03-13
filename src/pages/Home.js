
import { useState, useEffect } from "react";
import axios from "axios";
import CourseCard from "../components/CourseCard";
import coursesData from "../data/courses";

function Home() {

const [courses, setCourses] = useState([]);
const [category, setCategory] = useState("All");

const progressData =
JSON.parse(localStorage.getItem("progress")) || {};

const enrolled =
JSON.parse(localStorage.getItem("myCourses")) || [];

const categories = [
"All",
"Frontend",
"Backend",
"AI",
"Design"
];

useEffect(() => {
fetchCourses();
}, []);

const fetchCourses = async () => {

try {

const res = await axios.get(
"http://localhost:5000/api/courses"
);

/* MERGE BACKEND + FRONTEND COURSES */

setCourses([
...coursesData,
...res.data
]);

} catch (err) {

console.log("Backend not running, using local courses");

setCourses(coursesData);

}

};

const filteredCourses =
category === "All"
? courses
: courses.filter(
(course) => course.category === category
);

const startedCourses =
courses.filter(
(course) =>
progressData[course.id] > 0 ||
progressData[course._id] > 0
);

const trendingCourses = courses.slice(0,4);

return (

<div className="container-fluid p-4">

<div className="hero-banner mb-4">

<h2>Welcome Back 👋</h2>

<p>
Continue learning and improve your development skills.
</p>

</div>


<div className="row mb-5">

<div className="col-6 col-md-3">
<div className="card shadow text-center p-3">
<h6>Total Courses</h6>
<h3>{courses.length}</h3>
</div>
</div>

<div className="col-md-3">
<div className="card shadow text-center p-3">
<h6>Enrolled</h6>
<h3>{enrolled.length}</h3>
</div>
</div>

<div className="col-md-3">
<div className="card shadow text-center p-3">
<h6>Courses Started</h6>
<h3>{startedCourses.length}</h3>
</div>
</div>

<div className="col-md-3">
<div className="card shadow text-center p-3">
<h6>Hours Learned</h6>
<h3>{startedCourses.length * 2}</h3>
</div>
</div>

</div>


<div className="mb-4">

{categories.map((cat) => (

<button
key={cat}
className={`btn me-2 mb-2 ${
category === cat
? "btn-primary"
: "btn-outline-primary"
}`}
onClick={() => setCategory(cat)}
>
{cat}
</button>

))}

</div>


<h4 className="mb-3">
Trending Courses
</h4>

<div className="row g-4 mb-5">

{trendingCourses.map((course,index) => (
<CourseCard
key={course._id || course.id || index}
course={course}
/>
))}

</div>


<h4 className="mb-3">
All Courses
</h4>

<div className="row g-4">

{filteredCourses.map((course,index) => (
<CourseCard
key={course._id || course.id || index}
course={course}
/>
))}

</div>

</div>

);

}

export default Home;
