import React from 'react';

const seasonConfig = {
    Summer: {
        text: "Let's hit the beach",
        iconName: 'sun'
    },
    Winter: {
        text: "Burrr, it is cold",
        iconName: 'snowflake'
    }
};

const getSeason = (latitud, month) => {
    if (month > 2 && month < 9) {
        return latitud > 0 ? 'Summer' : 'Winter';
    } else {
        return latitud > 0 ? 'Winter' : 'Summer';
    }
};

const SeasonDisplay = (props) => {
    const season = getSeason(props.latitud, new Date().getMonth());
    const { text, iconName } = seasonConfig[season];
    return <div>
        <i className={`${iconName} icon`} />
        <h1>{text}</h1>
        <i className={`${iconName} icon`} />
    </div>
};

export default SeasonDisplay;