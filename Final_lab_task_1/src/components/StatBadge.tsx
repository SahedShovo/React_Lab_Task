type StatBadgProps = {
    label : string,
    value : number
} 


function StatBadge({label,value}:StatBadgProps){
    return (
        <div className = "stat-badge">
            <p>{label}</p>
            <strong>{value}</strong>
        </div>
    )
}
export default StatBadge