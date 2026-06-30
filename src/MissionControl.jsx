// The core component that holds the state for space missions.
// It is responsible for rendering each mission's details and actions.
// It manages the mission list and its statuses, orchestrating the data flow to child components.

import {useState} from "react";
import "./MissionControl.css";
import MissionCard from "./MissionCard.jsx";
import MissionAction from "./MissionAction.jsx";
import MissionFilter from "./MissionFilter.jsx";


function missionControl({missions}){
    //Essentailly copies given object to manipluate
    const [data, setData] = useState(missions);

    //Used in MissionAction.jsx
    function changeStatus(id, newStatus){
        
            //Runs through the array and updates matching missions status
            setData(pastData => pastData.map(mission=>{
                return mission.id === id ? {... mission, status: newStatus} : mission; 
            }))
        
    };

    return(
        <>
            <h1>Space Mission Control</h1>

            <MissionFilter></MissionFilter>

            <ol>
                {/* Uses 'copied' array */}
                {data.map(m=>{
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