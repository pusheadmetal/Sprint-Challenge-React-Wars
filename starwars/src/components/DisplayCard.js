import React from "react";
import axios from "axios";

const DisplayCard = (props) => {

    if (!props.getPeople){
        return <h2>Loading...</h2>
    }

    return (
        <>
            {props.getPeople.map( (item) => 
                
                    <div class="ui card">
                        <div class="content">
                            <a class="header">{item.name}</a>
                            <div class="meta">
                                <p><span class="height">Height: {item.height}</span></p>
                                <p><span class="mass">Mass: {item.mass}</span></p>
                                <p><span class="hair_color">Hair Color: {item.hair_color}</span></p>
                                <p><span class="skin_color">Skin Color: {item.skin_color}</span></p>
                                <p><span class="eye_color">Eye Color: {item.eye_color}</span></p>
                                <p><span class="birth_year">Birth Year: {item.birth_year}</span></p>
                            </div>
                            <div class="description">
                                <p>Appears In: {item.films.map( (item) => <p>{item}</p>)}</p>
                                <p>Vehicles: {item.vehicles.map( (item) => <p>{item}</p>)}</p>
                                <p>Starships: {item.starships.map( (item) => <p>{item}</p>)}</p>
                            </div>
                        </div>
                    </div>
                
            )}
        </>
    );
};

export default DisplayCard;

//Make prop state for films.title
//Make a callback function that sets state
//Use function in return