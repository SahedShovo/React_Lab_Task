type CoursesTagProps = {
    Coursename:string,
    color:string
}

function CourseTag({Coursename,color}:CoursesTagProps){
    return (
        <span
            className = "CourseTag"
            style = {{backgroundColor:color}}
            >
                {Coursename}
        </span>
    )
}
export default CourseTag