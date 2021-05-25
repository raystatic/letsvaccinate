import React from 'react'
import './SlotTime.css';

function SlotTime({time}) {
    return (
        <div className="slottime">
            <p className="slottime__time">{`${time}`}</p>
        </div>
    )
}

export default SlotTime
