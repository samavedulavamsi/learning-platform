
import { Link } from "react-router-dom";

function CourseCard({ course }) {

const courseId = course._id || course.id;

return (
<div className="col-12 col-sm-6 col-md-4 col-lg-3">

  <div className="card shadow-sm h-100">

    <img
      src={course.image}
      alt={course.title}
      className="card-img-top"
      style={{
        height: "160px",
        objectFit: "cover"
      }}
    />

    <div className="card-body d-flex flex-column">

      <h6 className="fw-bold">
        {course.title}
      </h6>

      <p className="text-muted small mb-1">
        Instructor: {course.instructor}
      </p>

      <p className="text-warning small mb-1">
        ⭐ {course.rating || 4.5}
      </p>

      <p className="text-muted small mb-3">
        {course.lessons || 0} lessons
      </p>

      <Link
        to={`/course/${courseId}`}
        className="btn btn-primary mt-auto"
      >
        View Course
      </Link>

    </div>

  </div>

</div>
);
}

export default CourseCard;
