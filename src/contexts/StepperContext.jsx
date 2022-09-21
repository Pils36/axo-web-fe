import { useState, createContext } from "react";
export const StepperContext = createContext()

const StepperProvider = ({ children }) => {

    const [movingFrom, setMovingFrom] = useState('');
    const [movingTo, setMovingTo] = useState('');
    const [homeSize, setHomeSize] = useState('');
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [additionalInfo, setAdditionalInfo] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [howYouHearAboutUs, sethowYouHearAboutUs] = useState('');
    const [visitTime, setvisitTime] = useState('');
    const [modeOfVisit, setModeOfVisit] = useState('');
    const [address, setAddress] = useState('');
    const [myDate, setMyDate] = useState(new Date());

    return (
        <StepperContext.Provider value={{ movingFrom, movingTo, setMovingFrom, setMovingTo, homeSize, setHomeSize, myDate, setMyDate, firstname, lastname, email, additionalInfo, setFirstName, setLastName, setEmail, setAdditionalInfo, phoneNumber, setPhoneNumber, howYouHearAboutUs, sethowYouHearAboutUs, visitTime, setvisitTime, modeOfVisit, setModeOfVisit, address, setAddress }}>
            {
                children
            }
        </StepperContext.Provider>
    );
}


export default StepperProvider;

