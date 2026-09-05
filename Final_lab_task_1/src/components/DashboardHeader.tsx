type DashboardHeaderProps = {
    title : string,
    tagline : string
}

function DashboardHeader ({title , tagline}:DashboardHeaderProps){
    return (
        <header className="dashboard-header">
        <div className="title">
            <h2>{title}</h2>
            <p>{tagline}</p>
        </div>
        <nav>
            <a href="#dashboard">Dashboard</a>
            <a href="#students">Students</a>
            <a href="#courses">Courses</a>
        </nav>
        </header>
    )
}
export default DashboardHeader