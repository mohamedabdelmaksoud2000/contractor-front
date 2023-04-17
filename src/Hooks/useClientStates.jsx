import { useState } from 'react'

function useClientStates() {

    // For Client Details

    const [title, setTitle] = useState('');

    const [firstName, setFirstName] = useState('');

    const [lastName, setLastName] = useState('');

    const [companyName, setCompanyName] = useState('');

    const [selectPhoneNumber, setSelectPhoneNumber] = useState('');

    const [phoneNumber, setPhoneNumber] = useState('');

    const [selectEmailAddress, setSelectEmailAddress] = useState('');

    const [emailAddress, setEmailAddress] = useState('');

    const [notification, setNotification] = useState('');

    const [additional, setAdditional] = useState('');

    // For Property Details

    const [street1, setStreet1] = useState("")

    const [street2, setStreet2] = useState("")

    const [city, setCity] = useState("")

    const [state, setState] = useState("")

    const [zipCode, setZipCode] = useState("")

    const [country, setCountry] = useState("")

    const [additionalProperty, setAdditionalProperty] = useState("")



    // For Footer Save 

    const [save, setSave] = useState(false)


    return {
        title,
        setTitle,
        firstName,
        setFirstName,
        lastName,
        setLastName,
        companyName,
        setCompanyName,
        selectPhoneNumber,
        setSelectPhoneNumber,
        phoneNumber,
        setPhoneNumber,
        selectEmailAddress,
        setSelectEmailAddress,
        emailAddress,
        setEmailAddress,
        notification,
        setNotification,
        additional,
        setAdditional,
        street1,
        setStreet1,
        street2,
        setStreet2,
        city,
        setCity,
        state,
        setState,
        zipCode,
        setZipCode,
        country,
        setCountry,
        additionalProperty,
        setAdditionalProperty,
        save,
        setSave,
        

    }
}

export default useClientStates
