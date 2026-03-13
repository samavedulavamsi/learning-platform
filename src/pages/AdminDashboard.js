import { useEffect, useState } from "react";
import axios from "axios";

function AdminDashboard() {

const [courses,setCourses] = useState([]);
const [title,setTitle] = useState("");
const [description,setDescription] = useState("");
const [instructor,setInstructor] = useState("");

const users =
JSON.parse(localStorage.getItem("users")) || [];

const enrolled =
JSON.parse(localStorage.getItem("myCourses")) || [];

const watchTime =
JSON.parse(localStorage.getItem("watchTime")) || 0;

const totalStudents = users.length;
const totalEnrollments = enrolled.length;

const fetchCourses = async () => {

try{

  const res = await axios.get(
    "http://localhost:5000/api/courses"
  );

  setCourses(res.data);

}catch(err){
  console.log(err);
}

};

useEffect(()=>{
fetchCourses();
},[]);

const createCourse = async () => {

if(!title || !description || !instructor){
  alert("Please fill all fields");
  return;
}

try{

  await axios.post(
    "http://localhost:5000/api/courses/create",
    {
      title,
      description,
      instructor
    }
  );

  setTitle("");
  setDescription("");
  setInstructor("");

  fetchCourses();

}catch(err){
  console.log(err);
}

};

const deleteCourse = async(id)=>{

try{

  await axios.delete(
    `http://localhost:5000/api/courses/${id}`
  );

  fetchCourses();

}catch(err){
  console.log(err);
}


};

return (


<div className="container-fluid p-4">

  <h2 className="mb-4">Admin Dashboard</h2>


  {/* ANALYTICS */}

  <div className="row mb-5">

    <div className="col-md-3">
      <div className="card shadow text-center p-3">
        <h6>Total Students</h6>
        <h3>{totalStudents}</h3>
      </div>
    </div>

    <div className="col-md-3">
      <div className="card shadow text-center p-3">
        <h6>Total Courses</h6>
        <h3>{courses.length}</h3>
      </div>
    </div>

    <div className="col-md-3">
      <div className="card shadow text-center p-3">
        <h6>Total Enrollments</h6>
        <h3>{totalEnrollments}</h3>
      </div>
    </div>

    <div className="col-md-3">
      <div className="card shadow text-center p-3">
        <h6>Total Watch Time</h6>
        <h3>{watchTime} hrs</h3>
      </div>
    </div>

  </div>


  {/* CREATE COURSE */}

  <h4 className="mb-3">Add New Course</h4>

  <div className="row mb-4">

    <div className="col-md-3">
      <input
        className="form-control"
        placeholder="Course Title"
        value={title}
        onChange={(e)=>setTitle(e.target.value)}
      />
    </div>

    <div className="col-md-4">
      <input
        className="form-control"
        placeholder="Description"
        value={description}
        onChange={(e)=>setDescription(e.target.value)}
      />
    </div>

    <div className="col-md-3">
      <input
        className="form-control"
        placeholder="Instructor"
        value={instructor}
        onChange={(e)=>setInstructor(e.target.value)}
      />
    </div>

    <div className="col-md-2">
      <button
        className="btn btn-success w-100"
        onClick={createCourse}
      >
        Add Course
      </button>
    </div>

  </div>


  {/* COURSE LIST */}

  <h4 className="mb-3">Manage Courses</h4>

  <table className="table table-striped">

    <thead>
      <tr>
        <th>#</th>
        <th>Title</th>
        <th>Instructor</th>
        <th>Actions</th>
      </tr>
    </thead>

    <tbody>

      {courses.map((course,index)=>(
        <tr key={course._id}>

          <td>{index+1}</td>

          <td>{course.title}</td>

          <td>{course.instructor}</td>

          <td>

            <button
              className="btn btn-danger btn-sm"
              onClick={()=>deleteCourse(course._id)}
            >
              Delete
            </button>

          </td>

        </tr>
      ))}

    </tbody>

  </table>

</div>

);

}

export default AdminDashboard;
