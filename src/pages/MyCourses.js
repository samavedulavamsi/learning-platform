import courses from "../data/courses";
import { Link } from "react-router-dom";

function MyCourses() {

  const enrolled =
    JSON.parse(localStorage.getItem("myCourses")) || [];

  const progressData =
    JSON.parse(localStorage.getItem("progress")) || {};

  // remove duplicate enrollments
  const uniqueCourses = [...new Set(enrolled)];

  const myCourses = courses.filter((course) =>
    uniqueCourses.includes(course.id)
  );

  if (myCourses.length === 0) {
    return (
      <div className="container p-4">
        <h2>My Courses</h2>
        <p>You have not enrolled in any courses yet.</p>
      </div>
    );
  }

  return (
    <div className="container-fluid p-4">

      <h2 className="mb-4">My Courses</h2>

      <div className="row g-4">

        {myCourses.map((course) => (

          <div key={course.id} className="col-md-4">

            <div className="card shadow course-card h-100">

              <img
                src={course.image}
                alt={course.title}
                className="card-img-top"
                style={{ height: "180px", objectFit: "cover" }}
              />

              <div className="card-body">

                <h5>{course.title}</h5>

                <p className="text-muted">
                  Instructor: {course.instructor}
                </p>

                <p>
                  Progress: {Math.round(progressData[course.id] || 0)}%
                </p>

                <div className="progress mb-3">

                  <div
                    className="progress-bar bg-success"
                    style={{
                      width: `${progressData[course.id] || 0}%`
                    }}
                  ></div>

                </div>

                <Link
                  to={`/player/${course.id}`}
                  className="btn btn-primary w-100"
                >
                  Continue Learning
                </Link>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default MyCourses;