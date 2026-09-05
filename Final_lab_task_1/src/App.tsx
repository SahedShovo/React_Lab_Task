import './App.css'
import DashboardHeader from './components/DashboardHeader'
import studentCard from './components/studentcard'
import StatBadge from './components/StatBadge'
import StudentCard from './components/studentcard'

type Course = {
  name: string,
  color: string
}

type Student = {
  id: number,
  name: string,
  avatar: string,
  gpa: number,
  major: string,
  courses: Course[]
}

function App() {

  const students: Student[] = [

    {
      id: 1,
      name: "Mr. Meow",
      avatar: "https://i.pravatar.cc/150?img=12",
      gpa: 3.8,
      major: "Computer Science",
      courses: [
        {
          name: "React",
          color: "#dbeafe"
        },
        {
          name: "JavaScript",
          color: "#dcfce7"
        },
        {
          name: "Database",
          color: "#fce7f3"
        }
      ]
    },

    {
      id: 2,
      name: "Mr. Tom",
      avatar: "https://i.pravatar.cc/150?img=11",
      gpa: 3.99,
      major: "Software Engineering",
      courses: [
        {
          name: "React",
          color: "#dbeafe"
        },
        {
          name: "Node.js",
          color: "#dcfce7"
        },
        {
          name: "UI/UX",
          color: "#fce7f3"
        }
      ]
    },

    {
      id: 3,
      name: "Nusrat Jahan",
      avatar: "https://i.pravatar.cc/150?img=47",
      gpa: 3.7,
      major: "Information Technology",
      courses: [
        {
          name: "Python",
          color: "#fef3c7"
        },
        {
          name: "Database",
          color: "#dcfce7"
        },
        {
          name: "Networking",
          color: "#e0e7ff"
        }
      ]
    },

    {
      id: 4,
      name: "Rahim Ahmed",
      avatar: "https://i.pravatar.cc/150?img=13",
      gpa: 3.6,
      major: "Computer Science",
      courses: [
        {
          name: "JavaScript",
          color: "#fef3c7"
        },
        {
          name: "React",
          color: "#dbeafe"
        },
        {
          name: "Algorithms",
          color: "#f3e8ff"
        }
      ]
    }

  ]

  return (
    <>

      <DashboardHeader
        title="Student Dashboard"
        tagline="Manage students and academic information"
      />

      <main className="dashboard">

        <section className="overview">

          <h2>Dashboard Overview</h2>

          <div className="stats">

            <StatBadge
              label="Students"
              value={students.length}
            />

            <StatBadge
              label="Courses"
              value="9"
            />

            <StatBadge
              label="Average GPA"
              value="3.76"
            />

          </div>

        </section>


        <section id="students">

          <h2>Students</h2>

          <div className="student-grid">

            {
              students.map((student) => {
                return (
                  <StudentCard
                    key={student.id}
                    name={student.name}
                    id={student.id}
                    avatar={student.avatar}
                    gpa={student.gpa}
                    major={student.major}
                    courses={student.courses}
                  />
                )
              })
            }

          </div>

        </section>

      </main>

    </>
  )
}

export default App