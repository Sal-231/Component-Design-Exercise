// Enhances user experience by providing a mechanism to view missions by specific criteria, directly influencing the mission list rendered by MissionControl.

function missionFilter(props){
    const status = ["All", "Planned", "Active", "Completed"]
    return(
        <>
        {
            status.map((s)=>(
                <button
                    key={s}
                    onClick={()=>{

                    }}>
                {s}</button>
            ))
        }
        
        </>
    )
}

export default missionFilter;