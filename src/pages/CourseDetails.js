import { useParams, Link } from "react-router-dom";
import courses from "../data/courses";

function CourseDetails() {

  const { id } = useParams();

  const course =
    courses.find((c) => c.id === Number(id));

  function enrollCourse() {

    const stored =
      JSON.parse(localStorage.getItem("myCourses")) || [];

    stored.push(course);

    localStorage.setItem(
      "myCourses",
      JSON.stringify(stored)
    );

    alert("Course Enrolled!");
  }

  return (
    <div className="container mt-4">

      <h2>{course.title}</h2>

      <img
        src={course.image}
        alt={course.title}
        width="400"
        className="mb-3"
      />

      <p>Instructor: {course.instructor}</p>

      <p>Duration: {course.duration}</p>

      <button
        className="btn btn-primary me-2"
        onClick={enrollCourse}
      >
        Enroll Course
      </button>

      <Link
        to={`/player/${course.id}`}
        className="btn btn-success"
      >
        Start Learning
      </Link>

    </div>
  );
}

export default CourseDetails;