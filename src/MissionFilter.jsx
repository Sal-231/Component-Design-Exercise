// Enhances user experience by providing a mechanism to view missions by specific criteria, directly influencing the mission list rendered by MissionControl.

import "./MissionFilter.css";

function missionFilter(){
    const status = ["All", "Planned", "Active", "Completed"]
    return(
        <>
        {
            status.map((s)=>(
                <button
                    className="MissionFilter-button"
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