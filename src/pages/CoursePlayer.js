import { useParams } from "react-router-dom";
import { useState } from "react";
import courses from "../data/courses";

function CoursePlayer() {

  const { id } = useParams();

  const course = courses.find((c) => c.id === Number(id));

  const lessons = [
    {
      title: "Introduction",
      video: "https://www.youtube.com/embed/bMknfKXIFA8"
    },
    {
      title: "Core Concepts",
      video: "https://www.youtube.com/embed/Tn6-PIqc4UM"
    },
    {
      title: "Project Demo",
      video: "https://www.youtube.com/embed/Ke90Tje7VS0"
    },
    {
      title: "Advanced Topics",
      video: "https://www.youtube.com/embed/0riHps91AzE"
    }
  ];

  const [activeLesson,setActiveLesson]=useState(0);

  return (

    <div className="container-fluid p-4">

      <h3 className="mb-4">{course.title}</h3>

      <div className="row">

        {/* VIDEO PLAYER */}

        <div className="col-md-8">

          <div className="card shadow">

            <iframe
              width="100%"
              height="420"
              src={lessons[activeLesson].video}
              title="Course video"
              allowFullScreen
            />

          </div>

        </div>

        {/* LESSON PLAYLIST */}

        <div className="col-md-4">

          <div className="card shadow">

            <div className="card-header">
              <h5>Course Content</h5>
            </div>

            <ul className="list-group list-group-flush">

              {lessons.map((lesson,index)=>(
                <li
                  key={index}
                  className={`list-group-item ${
                    activeLesson===index ? "active" : ""
                  }`}
                  style={{cursor:"pointer"}}
                  onClick={()=>setActiveLesson(index)}
                >
                  {index+1}. {lesson.title}
                </li>
              ))}

            </ul>

          </div>

        </div>

      </div>

    </div>

  )

}

export default CoursePlayer;