// The core component that holds the state for space missions.
// It is responsible for rendering each mission's details and actions.
// It manages the mission list and its statuses, orchestrating the data flow to child components.

//import {useState} from "react";
//import styles from "./MissionControl.css";
import MissionCard from "./MissionCard.jsx";
import MissionAction from "./MissionAction.jsx";
import MissionFilter from "./MissionFilter.jsx";


function missionControl({missions}){
    



    return(
        <>
            <h1>Space Mission Control</h1>

            <MissionFilter status="all"></MissionFilter>

            <ol>
                {missions.map(m=>{
                    return <ul key={m.id}>
                        <div>
                            <MissionCard
                            name = {m.name}
                            status = {m.status}
                            crew = {m.crew}>
                        </MissionCard>
                        </div>

                        <div>
                            <MissionAction
                                missionID={m.id}
                                >
                            </MissionAction>
                        </div>
                    </ul>
                })}
            </ol>
        </>
    )
}

export default missionControl;