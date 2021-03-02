import React from 'react';

interface Iprops {
    isDay: boolean;
    setIsDay: Function;
}
const SunComponent: React.FC<Iprops> = ({ isDay, setIsDay }) => {
    function toggleDayNightSettings () {
        setIsDay(!isDay);
    }
    return(
        <div className={isDay ? "itsDayTime": "itsNightTime"} onClick={toggleDayNightSettings}></div>
    )
}

export default SunComponent;