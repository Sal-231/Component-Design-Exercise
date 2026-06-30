// Handles user interactions for each mission, allowing status updates through buttons like "Launch Mission."
// It operates by calling functions passed down from MissionControl, showcasing a direct way for child components to trigger state changes in the parent.

import "./MissionAction.css";

function MissionAction({id, changeStatus}){
    return(
        <div className="MissionActionButtons">
            <button className="MissionActionButton"
            onClick={() => changeStatus(id, "Active")}
            >Launch</button>

            <button className="MissionActionButton"
            onClick={() => changeStatus(id, "Completed")}
            >Complete</button>
        </div>
    )
}


export default MissionAction;