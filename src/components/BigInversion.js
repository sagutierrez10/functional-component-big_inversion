import React, {useState} from 'react';

const BigInversion = (props)=>{

    const [currentAge, setCurrentAge] = useState(props.currentAge);

    const newAge =()=>{
        console.log(`wassup ${props.firstName} ${props.lastName}`)
        setCurrentAge(currentAge+1)
    }

    return (
        <>
            <div className="personCard">
            <h1>{props.lastName}, {props.firstName}</h1>
                <p>Age: {currentAge}</p>
                <p>Hair Color: {props.hairColor}</p>
                <p><button onClick={newAge}>Birthday Button for {props.firstName} {props.lastName}</button></p>
            </div>
        </>
    )
}
export default BigInversion;