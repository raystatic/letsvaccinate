import React from 'react'
import SlotTime from '../SlotTime/SlotTime';
import './Slot.css';

function Slot({name,type,centerId,address,age,vaccine,slots, dose_1, dose_2}) {

    const bookSlot = () => {
        window.open("https://selfregistration.cowin.gov.in/",'_blank')
    }

    const showDose1 = (dose_1) => {
        if(dose_1 > 0){
            return <p className="slot__address">{ `Dose 1 availability: ${dose_1}`}</p>
        }else{
           return <p className="slot__address">{`Dose 1 availability: Not available`}</p>
        }
    }

    const showDose2 = (dose_2) => {
        if(dose_2 > 0){
            return <p className="slot__address">{`Dose 2 availability: ${dose_1}`}</p>
        }else{
            return <p className="slot__address">{`Dose 2 availability: Not available`}</p>
        }
    }

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
            {
                showDose1(dose_1)
            }
            {
                showDose2(dose_2)
            }
            <p 
                className="slot__book"
                onClick={bookSlot}
            >
                Book on CoWin
            </p>
            {/* <p className="slot__address">{ (dose_1 > 0) && `Dose 1 availability: ${dose_1}`}  {`Dose 1 availability: Not available`}</p>
            <p className="slot__address">{ (dose_2 > 0) && `Dose 2 availability: ${dose_2}`}  {`Dose 2 availability: Not available`} </p> */}
            {/* <h3 className="slot__name">Slots Available:</h3> */}
            {/* <div className="slot__time">
               {
                   slots.map((s,id) => {
                       return <SlotTime
                          time={s}
                       />
                       console.log(s)
                   })
               }
            </div> */}
            
        </div>
    )
}

export default Slot
