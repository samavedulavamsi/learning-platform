
import { useParams, Link } from "react-router-dom";
import courses from "../data/courses";
import CertificateButton from "../components/CertificateButton";

function CourseDetails() {

  const { id } = useParams();

  /* Find course from old frontend data */

  const course =
    courses.find((c) =>
      String(c.id) === String(id)
    );

  /* Prevent crash if course not found */

  if(!course){
    return(
      <div className="container p-4">
        <h3>Course not found</h3>
      </div>
    )
  }

  function enrollCourse(){

    const enrolled =
      JSON.parse(localStorage.getItem("myCourses")) || [];

    if(!enrolled.includes(course.id)){
      enrolled.push(course.id);
    }

    localStorage.setItem(
      "myCourses",
      JSON.stringify(enrolled)
    );

    alert("Course enrolled successfully!");

  }

  return(

    <div className="container p-4">

      <h2>{course.title}</h2>

      <img
        src={course.image}
        alt={course.title}
        style={{width:"400px"}}
      />

      <p className="mt-3">
        Instructor: {course.instructor}
      </p>

      <p>
        ⭐ {course.rating} ({course.students} students)
      </p>

      <button
        className="btn btn-primary me-2"
        onClick={enrollCourse}
      >
        Enroll Course
      </button>

      <Link
        to={`/player/${course.id}`}
        className="btn btn-success me-2"
      >
        Start Learning
      </Link>

      {/* Certificate Button */}

      <div className="mt-3">

        <CertificateButton
        courseTitle={course.title}
        />

      </div>

    </div>

  )

}

export default CourseDetails;
