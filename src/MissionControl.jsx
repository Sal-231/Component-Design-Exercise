// The core component that holds the state for space missions.
// It is responsible for rendering each mission's details and actions.
// It manages the mission list and its statuses, orchestrating the data flow to child components.

import {useState} from "react";
//import styles from "./MissionControl.css";
import MissionCard from "./MissionCard.jsx";
import MissionAction from "./MissionAction.jsx";
import MissionFilter from "./MissionFilter.jsx";


function missionControl({missions}){
    
    const [data, setData] = useState(missions);

    //Used in MissionAction.jsx
    function changeStatus(id, change){
        
            //setData({missions.filter(mission => mission.id === id), status: change})
            setData(pastData => pastData.map(mission=>{
                return mission.id === id ? {... mission, status: change} : mission; 
            }))
        
    };

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
                                id={m.id}
                                changeStatus={changeStatus}>
                            </MissionAction>
                        </div>
                    </ul>
                })}
            </ol>
        </>
    );
}

export default missionControl;