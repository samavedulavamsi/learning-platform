import { useState } from "react";
import { useParams } from "react-router-dom";
import courses from "../data/courses";

function CoursePlayer() {

  const { id } = useParams();

  const course =
    courses.find((c) => c.id === Number(id));

  const lessons = [
    {
      title: "React Introduction",
      video: "https://www.youtube.com/embed/bMknfKXIFA8"
    },
    {
      title: "React Components",
      video: "https://www.youtube.com/embed/Ke90Tje7VS0"
    },
    {
      title: "React Project",
      video: "https://www.youtube.com/embed/w7ejDZ8SWv8"
    }
  ];

  const [activeLesson, setActiveLesson] = useState(0);

  return (
    <div className="container mt-4">

      <h2>{course.title}</h2>

      <div className="row">

        {/* Video Section */}
        <div className="col-md-8">

          <div style={{width:"100%", height:"400px"}}>

            <iframe
              width="100%"
              height="100%"
              src={lessons[activeLesson].video}
              title="Course Video"
              frameBorder="0"
              allowFullScreen
            ></iframe>

          </div>

          <h5 className="mt-3">
            {lessons[activeLesson].title}
          </h5>

        </div>


        {/* Lesson List */}
        <div className="col-md-4">

          <h5>Lessons</h5>

          <ul className="list-group">

            {lessons.map((lesson, index) => (

              <li
                key={index}
                className={`list-group-item ${
                  index === activeLesson ? "active" : ""
                }`}
                style={{cursor:"pointer"}}
                onClick={() => setActiveLesson(index)}
              >
                {lesson.title}
              </li>

            ))}

          </ul>

        </div>

      </div>

    </div>
  );
}

export default CoursePlayer;