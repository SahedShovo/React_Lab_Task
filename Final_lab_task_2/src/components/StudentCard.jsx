import { useState } from "react";
import CourseTag from "./CourseTag";
import StatBadge from "./StatBadge";

function StudentCard({ student, onToggleFavorite }) {
  const [favorite, setFavorite] = useState(false);

  const handleClick = () => {
    setFavorite(!favorite);
    onToggleFavorite(student.id);
  };

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

      <button onClick={handleClick}>
        {favorite ? "★ Favorited" : "☆ Add Favorite"}
      </button>
    </div>
  );
}

export default StudentCard;