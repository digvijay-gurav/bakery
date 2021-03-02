import React from 'react';
import axios from 'axios';

interface Iprops {
    isDay: boolean;
    setOrderPlaced: Function;
    setNoOrderPlaced: Function;
}

const DoorComponent: React.FC<Iprops> = ({isDay, setOrderPlaced, setNoOrderPlaced}) => {
    
    function placeCookieOrder(){
        if(isDay) {
            const orderData = {
                'timeStamp': Date.now()
            }
            console.log("timestamp", Date.now(), orderData);
            axios.post(`http://localhost:6000/placeOrder`, { orderData })
            .then(res => {
                setOrderPlaced(true);
                console.log("response", res);
            })
            .catch((err)=> {
                console.log(err);
                setNoOrderPlaced(true);
            })
            setTimeout(()=>{
                setOrderPlaced(false);
                setNoOrderPlaced(false);
            }, 3000);
        }
    }
    return(
        <div className="doorMain" onClick={placeCookieOrder}>
            <span className="doorHandle"></span>
        </div>
    );
}

export default DoorComponent;