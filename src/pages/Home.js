import { useState } from "react";
import { Link } from "react-router-dom";
import courses from "../data/courses";
import CourseCard from "../components/CourseCard";

function Home() {

  const [search, setSearch] = useState("");
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

  /* Filter courses */

  const filteredCourses = courses.filter((course) => {

    const matchSearch =
      course.title
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchCategory =
      category === "All" ||
      course.category === category;

    return matchSearch && matchCategory;

  });

  /* Courses already started */

  const startedCourses = courses.filter(
    (course) => progressData[course.id] > 0
  );

  /* Trending courses */

  const trendingCourses = courses.slice(0,4);

  return (

    <div className="container-fluid p-4">

      {/* HERO SECTION */}

      <div className="hero-banner mb-4">

        <h2>Welcome Back 👋</h2>

        <p>
          Continue learning and improve your development skills.
        </p>

      </div>


      {/* DASHBOARD STATS */}

      <div className="row mb-5">

        <div className="col-md-3">

          <div className="card dashboard-card shadow text-center p-3">

            <h6>Total Courses</h6>
            <h3>{courses.length}</h3>

          </div>

        </div>


        <div className="col-md-3">

          <div className="card dashboard-card shadow text-center p-3">

            <h6>Enrolled</h6>
            <h3>{enrolled.length}</h3>

          </div>

        </div>


        <div className="col-md-3">

          <div className="card dashboard-card shadow text-center p-3">

            <h6>Courses Started</h6>
            <h3>{Object.keys(progressData).length}</h3>

          </div>

        </div>


        <div className="col-md-3">

          <div className="card dashboard-card shadow text-center p-3">

            <h6>Hours Learned</h6>
            <h3>{Object.keys(progressData).length * 2}</h3>

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


      {/* CATEGORY FILTER */}

      <div className="mb-4">

        {categories.map((cat)=>(
          
          <button
            key={cat}
            className={`btn category-btn ${
              category === cat
                ? "btn-primary"
                : "btn-outline-primary"
            }`}
            onClick={()=>setCategory(cat)}
          >
            {cat}
          </button>

        ))}

      </div>


      {/* CONTINUE LEARNING */}

      {startedCourses.length > 0 && (

        <>

          <h4 className="mb-3">
            Continue Learning
          </h4>

          <div className="row g-4 mb-5">

            {startedCourses.map((course)=>{

              const progress =
                Math.round(progressData[course.id]);

              return(

                <div
                  key={course.id}
                  className="col-md-4"
                >

                  <div className="card shadow course-hover">

                    <img
                      src={course.image}
                      alt={course.title}
                      className="card-img-top"
                      style={{
                        height:"160px",
                        objectFit:"cover"
                      }}
                    />

                    <div className="card-body">

                      <h5>{course.title}</h5>

                      {/* Progress bar */}

                      <div className="progress mb-2">

                        <div
                          className="progress-bar bg-success"
                          style={{
                            width:`${progress}%`
                          }}
                        >
                          {progress}%
                        </div>

                      </div>

                      <Link
                        to={`/player/${course.id}`}
                        className="btn btn-success"
                      >
                        Continue Learning
                      </Link>

                    </div>

                  </div>

                </div>

              )

            })}

          </div>

        </>

      )}


      {/* TRENDING COURSES */}

      <h4 className="mb-3">
        🔥 Trending Courses
      </h4>

      <div className="row g-4 mb-5">

        {trendingCourses.map((course)=>(
          <CourseCard
            key={course.id}
            course={course}
          />
        ))}

      </div>


      {/* ALL COURSES */}

      <h4 className="mb-3">
        All Courses
      </h4>

      <div className="row g-4">

        {filteredCourses.map((course)=>(
          <CourseCard
            key={course.id}
            course={course}
          />
        ))}

      </div>

    </div>

  );

}

export default Home;