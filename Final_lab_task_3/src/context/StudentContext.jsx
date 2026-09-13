import { createContext, useState, useEffect, useContext } from "react";

const StudentContext = createContext();

const dummyStudents = [
  { id: 101, name: "Rakib Hasan", major: "CSE", gpa: 3.8, courses: ["Math", "OOP"], favorite: false },
  { id: 102, name: "Sadia Islam", major: "EEE", gpa: 3.5, courses: ["Circuits"], favorite: false },
  { id: 103, name: "Tanvir Ahmed", major: "BBA", gpa: 3.2, courses: ["Marketing"], favorite: false },
  { id: 104, name: "Nusrat Jahan", major: "CSE", gpa: 3.9, courses: ["DSA", "Web"], favorite: false },
];

export function StudentProvider({ children }) {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [sortBy, setSortBy] = useState("default");

  useEffect(() => {
    const timer = setTimeout(() => {
      const saved = localStorage.getItem("students");
      if (saved) {
        setStudents(JSON.parse(saved));
      } else {
        setStudents(dummyStudents);
      }
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading) {
      localStorage.setItem("students", JSON.stringify(students));
    }
  }, [students, loading]);

  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  const removeStudent = (id) => {
    setStudents(students.filter((s) => s.id !== id));
  };

  const toggleFavorite = (id) => {
    setStudents(
      students.map((s) =>
        s.id === id ? { ...s, favorite: !s.favorite } : s
      )
    );
  };

  let visibleStudents = students.filter(
    (s) =>
      s.name.toLowerCase().includes(query.toLowerCase()) ||
      s.major.toLowerCase().includes(query.toLowerCase())
  );

  if (sortBy === "name") {
    visibleStudents = [...visibleStudents].sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === "gpa") {
    visibleStudents = [...visibleStudents].sort((a, b) => b.gpa - a.gpa);
  }

  const favoriteCount = students.filter((s) => s.favorite).length;

  return (
    <StudentContext.Provider
      value={{
        students,
        visibleStudents,
        loading,
        query,
        setQuery,
        sortBy,
        setSortBy,
        addStudent,
        removeStudent,
        toggleFavorite,
        favoriteCount,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
}

export function useStudents() {
  return useContext(StudentContext);
}