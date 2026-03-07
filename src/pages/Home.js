import { useState } from "react";
import { Link } from "react-router-dom";
import courses from "../data/courses";
import CourseCard from "../components/CourseCard";

function Home() {

  const [search, setSearch] = useState("");

  const progressData =
    JSON.parse(localStorage.getItem("progress")) || {};

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(search.toLowerCase())
  );

  const startedCourses = courses.filter(
    (course) => progressData[course.id] > 0
  );

  const enrolled =
    JSON.parse(localStorage.getItem("myCourses")) || [];

  return (
    <div className="container-fluid p-4">

      {/* HERO SECTION */}

      <div className="p-4 mb-4 bg-primary text-white rounded">

        <h2>Welcome Back 👋</h2>

        <p>
          Continue learning and improve your development skills.
        </p>

      </div>


      {/* DASHBOARD STATS */}

      <div className="row mb-5">

        <div className="col-md-4">

          <div className="card shadow text-center p-3">

            <h5>Total Courses</h5>
            <h3>{courses.length}</h3>

          </div>

        </div>

        <div className="col-md-4">

          <div className="card shadow text-center p-3">

            <h5>Enrolled Courses</h5>
            <h3>{enrolled.length}</h3>

          </div>

        </div>

        <div className="col-md-4">

          <div className="card shadow text-center p-3">

            <h5>Learning Progress</h5>
            <h3>
              {Object.keys(progressData).length}
            </h3>

          </div>

        </div>

      </div>


      {/* SEARCH BAR */}

      <input
        type="text"
        className="form-control mb-4"
        placeholder="Search courses..."
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
      />


      {/* CONTINUE LEARNING */}

      {startedCourses.length > 0 && (
        <>
          <h4 className="mb-3">Continue Learning</h4>

          <div className="row g-4 mb-5">

            {startedCourses.map((course) => (

              <div key={course.id} className="col-md-4">

                <div className="card shadow">

                  <img
                    src={course.image}
                    className="card-img-top"
                    alt={course.title}
                  />

                  <div className="card-body">

                    <h5>{course.title}</h5>

                    <p>
                      Progress: {Math.round(progressData[course.id])}%
                    </p>

                    <Link
                      to={`/player/${course.id}`}
                      className="btn btn-success"
                    >
                      Continue Learning
                    </Link>

                  </div>

                </div>

              </div>

            ))}

          </div>
        </>
      )}


      {/* ALL COURSES */}

      <h4 className="mb-3">All Courses</h4>

      <div className="row g-4">

        {filteredCourses.map((course) => (
          <CourseCard key={course.id} course={course}/>
        ))}

      </div>

    </div>
  );
}

export default Home;