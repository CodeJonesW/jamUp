import React from 'react'
import Jam from './Jam.js'



const JamContainer = (props) => {

if(props.filteredJams){
    return (
        <div>
            {props.filteredJams.map(jam => {
                return <Jam title={jam.title} genre={jam.genre} info={jam.info}/>
            })}
        </div>
    )
} else {
    return (
        <div>
            {props.jamData ? props.jamData.map(jam => {
                return <Jam title={jam.title} genre={jam.genre} info={jam.info}/>
            }) : null}
        </div>
    )
}
   
    
    
};


export default JamContainer;