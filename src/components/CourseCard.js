import { Link } from "react-router-dom";

function CourseCard({ course }) {

  return (
    <div className="col-lg-4 col-md-6 col-sm-12">

      <div className="card h-100 shadow-sm border-0 course-card">

       <img
  src={course.image}
  alt={course.title}
  className="card-img-top"
  style={{ height: "180px", objectFit: "cover" }}
/>

        <div className="card-body d-flex flex-column">

          <h5 className="card-title fw-bold">
            {course.title}
          </h5>

          <p className="text-muted mb-3">
            Instructor: {course.instructor}
          </p>

          <Link
            to={`/course/${course.id}`}
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