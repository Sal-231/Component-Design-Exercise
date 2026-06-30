// Enhances user experience by providing a mechanism to view missions by specific criteria, directly influencing the mission list rendered by MissionControl.

import "./MissionFilter.css";

function missionFilter(){
    const status = ["All", "Planned", "Active", "Completed"]
    return(
        <div className="MissionFilterButtons">
        {
            status.map((s)=>(
                <button
                    className="MissionFilterButton"
                    key={s}
                    onClick={()=>{

                    }}>
                {s}</button>
            ))
        }
        
        </div>
    )
}

export default missionFilter;