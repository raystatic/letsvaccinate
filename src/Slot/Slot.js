import React from 'react'
import SlotTime from '../SlotTime/SlotTime';
import './Slot.css';

function Slot({name,type,centerId,address,age,vaccine,slots}) {
    return (
        <div className="slot">
            <div className="slot__title">
                <h3 className="slot__name">{`${name}`}</h3>
                <div className="slot__free">
                    {`${type}`}
                </div>
            </div>
            <p className="slot__address">{`Center Id: ${centerId}`}</p>
            <p className="slot__address">{`Address: ${address}`}</p>
            <p className="slot__address">{`Age: ${age}+`}</p>
            <p className="slot__address">{`Vaccine: ${vaccine}`}</p>
            <h3 className="slot__name">Slots Available:</h3>
            <div className="slot__time">
               {
                   slots.map((s,id) => {
                       return <SlotTime
                          time={s}
                       />
                       console.log(s)
                   })
               }
            </div>
            
        </div>
    )
}

export default Slot
