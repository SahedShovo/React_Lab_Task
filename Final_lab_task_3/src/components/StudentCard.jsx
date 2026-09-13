import { useStudents } from "../context/StudentContext";
import CourseTag from "./CourseTag";
import StatBadge from "./StatBadge";

function StudentCard({ student }) {
  const { toggleFavorite, removeStudent } = useStudents();

  return (
    <div className="student-card">
      <h3>{student.name}</h3>
      <StatBadge label="Major" value={student.major} />
      <StatBadge label="GPA" value={student.gpa} />

      <div>
        {student.courses.map((course, i) => (
          <CourseTag key={i} courseName={course} color="blue" />
        ))}
      </div>

      <button onClick={() => toggleFavorite(student.id)}>
        {student.favorite ? "★ Favorited" : "☆ Add Favorite"}
      </button>

      <button onClick={() => removeStudent(student.id)}>Remove</button>
    </div>
  );
}

export default StudentCard;