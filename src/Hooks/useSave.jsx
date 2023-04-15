import {  useState } from "react";

function useSave() {

    const [choose, setChoose] = useState("");


    const handleChange = (event) => {

        setChoose(event.target.value);

        console.log(choose);
    };


    const SaveBtn = () => {
        console.log(choose);
    }

    return {choose , handleChange , SaveBtn}

}

export default useSave
