function CourseTag({ courseName, color }) {
  return (
    <span className="course-tag" style={{ backgroundColor: color }}>
      {courseName}
    </span>
  );
}

export default CourseTag;