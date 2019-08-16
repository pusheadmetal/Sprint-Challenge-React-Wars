import React from 'react'
import { Tab } from 'semantic-ui-react'
import DisplayCard from "./DisplayCard"


const TabExampleBasic = (props) => {


    if(!props.getPeople){
    return <h2>Loading...</h2>
}

    const panes = [
        { menuItem: 'Tab 1', render: () => <Tab.Pane><div class = "ui cards">
                <DisplayCard getPeople = {props.getPeople} />
            </div></Tab.Pane> },
        { menuItem: 'Tab 2', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
        { menuItem: 'Tab 3', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
    ];

    return (

    <Tab panes={panes} />

    );
    
    
}

export default TabExampleBasic