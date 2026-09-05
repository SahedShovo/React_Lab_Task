import CourseTag from "./CourseTag"
import StatBadge from "./StatBadge"

type Course = {
    name:string,
    color:string
}
type StudentCardProps = {
    name:string,
    id:number,
    avatar:string,
    gpa:number,
    major:string,
    courses : Course[]
}

function StudentCard({
    name,id,avatar,gpa,major,courses
}:StudentCardProps){
    return (
        <div className="student-card">
            <div className="student-head">

                <img src = {avatar} alt={name} className="student-avater"/>
                <div>
                    <h2>{name}</h2>
                    <p>Id:{id}</p>
                </div>
            </div>
            <div>
                <p> <strong>Major:</strong></p>{major}
                <StatBadge label="Gpa" value={gpa}/>
            </div>
            <h3>Course</h3>

            <div className="course-list">
                {
                courses.map((course) => {
                    return (
                        <CourseTag
                        key={course.name}
                        Coursename={course.name}
                        color={course.color}
                        ></CourseTag>
                    )
                })
            }
    
            </div>

        </div>
    )
}

export default StudentCard

