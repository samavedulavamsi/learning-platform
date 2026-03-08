import { Link } from "react-router-dom";

function CourseCard({course}) {

return(

<div className="col-md-3">

<div className="card course-card shadow-sm">

<img
src={course.image}
className="card-img-top"
alt={course.title}
/>

<div className="card-body">

<h5>{course.title}</h5>

<p className="text-muted">
Instructor: {course.instructor}
</p>

<p className="text-warning">
⭐ {course.rating} ({course.students} students)
</p>

<p className="text-muted">
{course.lessons} lessons
</p>

<Link
to={`/course/${course.id}`}
className="btn btn-primary w-100"
>
View Course
</Link>

</div>

</div>

</div>

)

}

export default CourseCard;