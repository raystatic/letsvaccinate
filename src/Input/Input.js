import React, { useEffect, useState } from 'react'
import './Input.css';
import SearchIcon from '@material-ui/icons/Search';
import axios from '../axios';
import Slot from '../Slot/Slot';
import {DatePicker} from 'react-trip-date'
import { TextField } from '@material-ui/core';

function Input() {

    const [pinCode, setPinCode] = useState("")
    const [date, setDate] = useState("")
    const [slotsByPinCode, setSlotsByPinCode] = useState([]);
    const [showData, setShowData] = useState(false);
    const [showNoDataFound, setShowNoDataFound] = useState(false);
    const [error, setError] = useState(false);
    const [errorData, setErrorData] = useState("");

    useEffect(() => {
        setSlotsByPinCode([]);
        setShowData(false)
        setShowNoDataFound(false)
    },[])

    const selectedDate = (date) => {
        const res = date.split("-");
        const d = `${res[2]}-${res[1]}-${res[0]}`
        console.log(d);
        setDate(d)
    }

    const searchSlot = () => {
        if(pinCode !== "" && date !== ""){
           axios.get(`appointment/sessions/public/findByPin?pincode=${pinCode}&date=${date}`)
                .then((response) => {
                    console.log(response.data.sessions);
                    if(response.data.sessions.length > 0){
                        setShowData(true);
                        setShowNoDataFound(false);
                    }else{
                        setShowData(false);
                        setShowNoDataFound(true);
                    }
                    setError(false);
                    setSlotsByPinCode(response.data.sessions);
                })
                .catch((err) => {
                    setShowData(false);
                    setShowNoDataFound(false);
                    setError(true);
                    setErrorData(`Something went wrong! Please try again`)
                    console.log(`Error: ${err}`);
                })
        }
    }

    return (
        <div className="input">
           <div className="input__wrapper">
               {/* <input
                  className="input__main"
                  placeholder="Enter your PinCode"
                  value={pinCode}
                  onChange={(e) => setPinCode(e.target.value)}
               />
               <div 
                  className="input__search__wrapper"
                  onClick={searchSlot}
                  >
                      <SearchIcon
                        className="input__search"
                      />
               </div> */}

               {/* <input
                   className="input__pincode"
                   placeholder="Enter PinCode"
               /> */}

               <TextField 
                   label="PinCode"
                   variant="outlined"
                   value={pinCode}
                   onChange={(e) => setPinCode(e.target.value)}
                   InputProps={{
                       className: "input__date"
                   }}
                />


               <div className="input__date__wrapper">
                  <TextField
                    id="date-local"
                    label="Select Date"
                    type="date"
                    format={'dd/mm/yyyy'}
                    className="input__date"
                    InputLabelProps={{
                       shrink: true,
                     }}
                     onChange={(e) => {selectedDate(e.target.value)}}
                  />
               </div>
           </div>
           <div 
               className="input__submit"
               onClick={searchSlot}
               >
               Find
           </div>
           <div className="slots">
              {
                showData &&
                slotsByPinCode.map((slot,id) => {
                    return <Slot
                     name={slot.name}
                     type={slot.fee_type}
                     centerId={slot.center_id}
                     address={slot.address}
                     age = {slot.min_age_limit}
                     vaccine={slot.vaccine}
                     slots={slot.slots}
                     dose_1 = {slot.available_capacity_dose1}
                     dose_2 = {slot.available_capacity_dose1}
                    />
                })
              }
           </div>
           <div className="slots">
           {
                showNoDataFound && <p className="slot__no__data">No Data found</p>
            }
           </div>
           <div className="slots">
           {
                error && <p className="slot__no__error">{errorData}</p>
            }
           </div>
        </div>
    )
}

export default Input
