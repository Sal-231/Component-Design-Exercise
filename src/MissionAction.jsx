// Handles user interactions for each mission, allowing status updates through buttons like "Launch Mission."
// It operates by calling functions passed down from MissionControl, showcasing a direct way for child components to trigger state changes in the parent.

function missionAction({id, changeStatus}){
    return(
        <>
            <button
            onClick={() =>changeStatus(id, "Active")}
            >Launch</button>

            <button
            onClick={() =>changeStatus(id, "Completed")}
            >Complete</button>
        </>
    )
}


export default missionAction;