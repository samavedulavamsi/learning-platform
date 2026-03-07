import { useState, useEffect } from "react";

function MyCourses() {

  const [courses, setCourses] = useState([]);

  const progress =
    JSON.parse(localStorage.getItem("progress")) || {};

  useEffect(() => {

    const stored =
      JSON.parse(localStorage.getItem("myCourses")) || [];

    setCourses(stored);

  }, []);

  return (
    <div>

      <h1>My Courses</h1>

      {courses.map((course) => (

        <div key={course.id}>

          <h3>{course.title}</h3>

          <img
            src={course.image}
            alt={course.title}
            width="200"
          />

          <p>{course.instructor}</p>

          <p>
            Progress: {progress[course.id] || 0}%
          </p>

          <div style={{
            width: "200px",
            background: "#ddd",
            height: "10px"
          }}>

            <div style={{
              width: `${progress[course.id] || 0}%`,
              background: "green",
              height: "10px"
            }} />

          </div>

        </div>

      ))}

    </div>
  );
}

export default MyCourses;