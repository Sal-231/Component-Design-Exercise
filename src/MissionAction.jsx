// Handles user interactions for each mission, allowing status updates through buttons like "Launch Mission."
// It operates by calling functions passed down from MissionControl, showcasing a direct way for child components to trigger state changes in the parent.
// import MissionCard from "./MissionCard.jsx";
// import MissionFilter from "./MissionFilter.jsx";
// import MissionControl from "./MissionControl.jsx";

function missionAction({id, changeStatus}){
    return(
        <>
            <button
            onClick={() =>changeStatus(id, "Launched")}

            >Launch</button>

            <button

            >Complete</button>
        </>
    )
}


export default missionAction;