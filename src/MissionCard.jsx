// A stateless component that displays information about a mission, such as its name, status, and crew.
// It receives all necessary data through props from MissionControl and focuses solely on presentation.

//import styles from "./MissionCard.css";

function missionCard({name, status, crew}){
    return(
        <>
            <h2>{name}</h2>
            <p>Status: {status}</p>
            <p>Crew: {crew[0]} & {crew[1]}</p>
        </>
    )
}

export default missionCard;