import React, {useState} from 'react';

const PersonCard = (props) => {
    const {firstName, lastName, age, hairColor} = props;
    const [currentAge, setCurrentAge] = useState(age);
    return (
        <div>
            <h1>
                {lastName}, {firstName}
            </h1>
            <p>Age: {currentAge} </p>
            <p>Hair Color: {hairColor} </p>
            <button onClick= {(event) => setCurrentAge(currentAge + 1)}>Birthday Button for {firstName} {lastName}</button>
        </div>
    );
}
export default PersonCard;