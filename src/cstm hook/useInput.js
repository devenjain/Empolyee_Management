import { useState } from 'react'

const useInput = () => {

    const [enteredValue, setEnteredValue] = useState("")
    const [errors, setError] = useState(true)
    let fromvalidate

    const validateName = (e) => {

        console.log(e);
        console.log(e.target.value);

        if (e.target.value.length < 4) {
            document.getElementById("name").style.color = "white"
            document.getElementById("name").style.background = "red"
            setError(false)
            return;
        }
        document.getElementById("name").style.color = "white"
        document.getElementById("name").style.background = "green"
        setError(true)
        setEnteredValue(e.target.value)
    }

    const validateEmail = (e) => {

        if (e.target.value.length < 6) {
            document.getElementById("email").style.color = "white"
            document.getElementById("email").style.background = "red"
            setError(false)
            return;
        }
        document.getElementById("email").style.color = "white"
        document.getElementById("email").style.background = "green"
        setError(true)
        setEnteredValue(e.target.value)
    }

    const validateAge = (e) => {

        if(e.target.value > 17 && e.target.value <30 ){
            document.getElementById("age").style.color = "white"
            document.getElementById("age").style.background = "green"
            setError(true)
            return;
        }
        document.getElementById("age").style.color = "white"
        document.getElementById("age").style.background = "red"
        setError(false)

    }

    const validatePassword = (e) => {

        if (e.target.value.length < 9 && e.target.value.length > 17) {
            document.getElementById("password").style.color = "white"
            document.getElementById("password").style.background = "red"
            setError(false)
            return;
        }
        document.getElementById("password").style.color = "white"
        document.getElementById("password").style.background = "green"
        setError(true)
        setEnteredValue(e.target.value)
    }



    return {
        value: enteredValue, validateName, validateEmail, error: errors, validateAge, validatePassword
    };

}
export default useInput;