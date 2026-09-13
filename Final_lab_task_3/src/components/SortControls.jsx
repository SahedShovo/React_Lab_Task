import { useStudents } from "../context/StudentContext";

function SortControls() {
  const { setSortBy } = useStudents();

  return (
    <div>
      <button onClick={() => setSortBy("name")}>Sort by Name</button>
      <button onClick={() => setSortBy("gpa")}>Sort by GPA</button>
      <button onClick={() => setSortBy("default")}>Default</button>
    </div>
  );
}

export default SortControls;