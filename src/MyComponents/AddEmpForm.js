import React from 'react'
import { useState } from 'react'
import useInput from '../cstm hook/useInput'
import './form.css'

export const AddEmpForm = (props) => {

    const [eId, seteId] = useState()
    const [eName, seteName] = useState("")
    const [eAge, seteAge] = useState()
    const [eEmail, seteEmail] = useState("")
    const [ePassword, setePassword] = useState("")

    const [nameValidator, setNameValidator] = useState(false);
    

    const {value:empName,validateName:nameHandler,error:nameError} = useInput()
    const {value:empEmail,validateEmail:emailHandler,error:emailError} = useInput()
    const {value:empAge,validateAge:ageHandler,error:ageError} = useInput()
    const {value:empPassword,validatePassword:passwordHandler,error:passwordError} = useInput()
    

    let formValidator = false

    if(nameValidator){
        formValidator = true
    }


    const submitEvent = (e) => {
        e.preventDefault();
        // var id = Math.floor(1000 + Math.random() * 9000);
        // seteId(e.target.id)
        // console.log("id : " , id)
        // props.addEmployee(eName, eEmail, ePassword, eAge)
        props.addEmployee(empName,empAge,empEmail,empPassword)
    }

    // const nameValidation = (e) => {

    //     console.log(e);
    //     console.log(e.target.value);

    //     if (e.target.value.length < 4) {
    //         document.getElementById("name").style.color = "white"
    //         document.getElementById("name").style.background = "red"
    //         setNameValidator(false)
    //         return;
    //     } 
    //         document.getElementById("name").style.color = "white"
    //         document.getElementById("name").style.background = "green"
    //         setNameValidator(true)
    //         seteName(e.target.value)
    // }


    return (

        <html>
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" />
            <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
            <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>


        </head>
        <body>
            <br></br>
            <h2><center>Register Employee</center></h2>

            <form onSubmit={submitEvent}>

                <div className="container">

                    <hr/>

                    <label><b> Employee Name : </b></label>     {empName}
                    <input type="text" placeholder="Enter Employee Name" id="name" onChange={nameHandler} required />
                    {
                        !nameError && <p>Name must not be empty and More than 3 characters</p>
                    }
                
                    <label><b> Employee Age : </b></label>  {empAge}
                    <input type="number" id="age" placeholder="Enter Employee age" value={eAge} onChange={ageHandler} required />
                    {
                        !ageError && <p>Age must be greater than 18 and less than 30</p>
                    }

                    <label for="email"><b>Email : </b></label> {empEmail}
                    <input type="text" id="email" placeholder="Enter Email" onChange={emailHandler} required />
                    {
                        !emailError && <p>email must not be empty and more than 5 charecters</p>
                    }

                    <label for="psw"><b>Password : </b></label> {empPassword}
                    <input type="password" id="password" placeholder="Enter Password"  onChange={passwordHandler} required />
                    {
                        !passwordError && <p>Password must be greater than 8 and less than 16 characters</p>
                    }

                    <button type="reset" className="resetrbtn">Reset</button>
                    <button type="submit"  className="registerbtn">Sign Up</button>

                </div>

            </form>
            <br></br>

            <hr className="hrstyle"></hr>

            <br></br>
        </body>
    </html>


    )

}