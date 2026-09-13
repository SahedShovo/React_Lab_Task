import { useState, useEffect } from "react";
import { useStudents } from "../context/StudentContext";

function AddStudentForm() {
  const { students, addStudent } = useStudents();

  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [major, setMajor] = useState("");
  const [gpa, setGpa] = useState("");
  const [courses, setCourses] = useState("");
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => setSuccess(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [success]);

  const validate = () => {
    const newErrors = {};

    if (!name.trim()) newErrors.name = "Name is required";

    if (!id.trim()) {
      newErrors.id = "ID is required";
    } else if (isNaN(id)) {
      newErrors.id = "ID must be numeric";
    } else if (students.some((s) => s.id === Number(id))) {
      newErrors.id = "ID must be unique";
    }

    if (!major.trim()) newErrors.major = "Major is required";

    if (gpa === "" || isNaN(gpa) || gpa < 0 || gpa > 4) {
      newErrors.gpa = "GPA must be between 0 and 4.0";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    addStudent({
      id: Number(id),
      name,
      major,
      gpa: Number(gpa),
      courses: courses.split(",").map((c) => c.trim()),
      favorite: false,
    });

    setName("");
    setId("");
    setMajor("");
    setGpa("");
    setCourses("");
    setSuccess(true);
  };

  return (
    <form onSubmit={handleSubmit} className="add-student-form">
      <h3>Add Student</h3>

      {success && <p className="success-msg">Student added successfully!</p>}

      <label>Full Name</label>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      {errors.name && <p className="error-msg">{errors.name}</p>}

      <label>Student ID</label>
      <input value={id} onChange={(e) => setId(e.target.value)} />
      {errors.id && <p className="error-msg">{errors.id}</p>}

      <label>Major</label>
      <input value={major} onChange={(e) => setMajor(e.target.value)} />
      {errors.major && <p className="error-msg">{errors.major}</p>}

      <label>GPA</label>
      <input value={gpa} onChange={(e) => setGpa(e.target.value)} />
      {errors.gpa && <p className="error-msg">{errors.gpa}</p>}

      <label>Courses (comma separated)</label>
      <input value={courses} onChange={(e) => setCourses(e.target.value)} />

      <button type="submit">Add Student</button>
    </form>
  );
}

export default AddStudentForm;