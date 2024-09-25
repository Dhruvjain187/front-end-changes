import axios from 'axios';
import { useEffect, useState, useRef } from "react";
import styled from "styled-components";

export const SignContainer = styled.div`
    &{
        font-family:'Barlow Semi Condensed';
    }

    & h1{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        background: url("https://argento-breeze-m2.swissupdemo.com/static/frontend/Swissup/argentobreeze-force/en_US/images/title-bg.svg") no-repeat 50% 50%;
        font-size:3rem;
        color: #1F2937;
        font-weight: 700;
        margin: 4rem 0 4rem 0;
    }

    & h1 span{
        text-align: center;
    }

    & .Information-container{
        width: 80%;
        margin: 0 auto;
        padding-bottom: 3rem
    }

    & .Information{
        font-family: "Mukta";
        background-color: #F5F5F4;
        width: 80%;
        margin: 0 auto;
        padding: 2.5rem 3rem;
        display: flex;
        flex-direction: column;
    }

    & .Information .input-control{
        display: flex;
        flex-direction: column;
    }

    & .Information .input-control .error{
        color: red;
    }

    & .Information .input-control.success input{
        border-color: #09c372;
    }

    & .Information .input-control.error input{
        border-color: #ff3860; 
    }


    & .Information legend{
        font-size: 1.25rem;
        margin: 0 0 1.25rem;
        padding: 0 0 .125rem;
        border-bottom: 1px solid rgba(31, 41, 55,0.1);
    }

    & .Information label{
        font-size: 1rem;
    }

    & .Information input{
        border: none;
        outline: none;
        font-size: 1rem;
        border: 2px solid rgb(203,213,219) ;
        padding: .5rem .75rem;
    }

    & .Information input:focus{
        border-color:orangered;
    }

    & .Information-container .Information .field-choice{
        display: flex;
        /* align-items: flex-start; */
        gap: 0.375rem;
        margin-top: .75rem;
    }

    & .Information-container .Information .btm{
        margin-bottom: 2rem;
    }

    & .Information-container .Information .field-choice input{
        border: none;
        outline: none;
        margin: 0;
        border: 2px solid rgb(203,213,219);
    }

    & .Information-container .Information .exception input{
        align-self: flex-start;
        margin-top: calc(1.5rem / 2 - 1rem / 2);
    }

    & .Information button{
        font-size: 1.25rem;
        width: 100%;
        padding: .5rem 2rem;
        font-family:'Barlow Semi Condensed';
        background-color: #F76801;
        font-weight: 500;
        color: white;
        border: none;
    }

    @media(max-width:700px){
        & .Information-container{
            width: 97%;
        }  
        
        & .Information{
            width: 97%;
        }
    }
`;

export default function Account() {
    // const [formdata, setFormData] = useState({
    //     firstname: "",
    //     lastname: "",
    //     email: "",
    //     password: "",
    //     confirmPassword: "",
    //     showpassword: false
    // })

    const form = useRef();

    const [showPassword, setShowPassword] = useState(false);

    const [formError, setFormError] = useState({})

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            firstname: form.current.firstname.value,
            lastname: form.current.lastname.value,
            email: form.current.email.value,
            password: form.current.password.value,
            confirmPassword: form.current.confirmPassword.value,
        }

        const errors = validate(data);
        // console.log(errors)

        if (Object.keys(errors).length === 0) {
            axios.post('http://localhost:3000/sign-up', {
                data,
                Headers: {
                    "Content-Type": "application/json"
                }
            })
                .then((response) => {
                    window.location.href = response.data
                })
                .catch((error) => {
                    console.error('Error sending data:', error);
                });

            alert("Created account successfuly")
        }
        else {
            setFormError(validate(data))
        }

    }


    const validate = (data) => {
        const errors = {};
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
        const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=])(?=.{8,})/;

        if (!data.firstname) {
            errors.firstname = "Firstname is required";
        }

        if (!data.lastname) {
            errors.lastname = "Lastname is required";
        }

        if (!data.email) {
            errors.email = "Email is required";
        } else if (!regex.test(data.email)) {
            errors.email = "Email is not valid";
        }

        if (!data.password) {
            errors.password = "Password is required";
        } else if (!passwordRegex.test(data.password)) {
            errors.password = "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number,and one special character."
        }

        if (data.password !== data.confirmPassword) {
            errors.confirmPassword = "Password & Confirm Password are not same"
        }

        return errors;

    }





    // const func = (event) => {
    //     const fieldName = event.target.name;
    //     const fieldValue = event.target.value;

    //     setFormData((prevdata) => {
    //         return { ...prevdata, [fieldName]: fieldValue };
    //     })
    // }

    // const showPasswordFunc = () => {
    //     setFormData((prevdata) => {
    //         return { ...prevdata, showpassword: !formdata.showpassword };
    //     })
    // }

    // const handleSubmit = (event) => {
    //     const errors = validate(formdata);
    //     if (Object.keys(errors).length !== 0) {
    //         event.preventDefault();
    //         setFormError(validate(formdata))
    //     }
    // }

    // useEffect(() => {
    //     console.log(formError)
    //     if (Object.keys(formError).length === 0) {
    //         console.log(formdata);
    //     }
    // }, [formError])


    // const validate = (data) => {
    //     const errors = {};
    //     const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
    //     const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=])(?=.{8,})/;

    //     if (!data.firstname) {
    //         errors.firstname = "Firstname is required";
    //     }

    //     if (!data.lastname) {
    //         errors.lastname = "Lastname is required";
    //     }

    //     if (!data.email) {
    //         errors.email = "Email is required";
    //     } else if (!regex.test(data.email)) {
    //         errors.email = "Email is not valid";
    //     }

    //     if (!data.password) {
    //         errors.password = "Password is required";
    //     } else if (!passwordRegex.test(data.password)) {
    //         errors.password = "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number,and one special character."
    //     }

    //     if (data.password !== data.confirmPassword) {
    //         errors.confirmPassword = "Password & Confirm Password are not same"
    //     }

    //     return errors;

    // }

    return (
        <>
            <SignContainer>
                <h1>
                    <span>
                        CREATE NEW CUSTOMER ACCOUNT
                    </span>
                </h1>
                <div className="Information-container">
                    <form action="http://localhost:3000/sign-up" method="post" onSubmit={handleSubmit} ref={form}>
                        <div className="Information">
                            <legend>Personal Information</legend>
                            <div className="input-control">
                                <label htmlFor="first">First Name</label>
                                <input type="text" id="first" name="firstname" />
                                <div className="error">{formError.firstname}</div>
                            </div>
                            <div className="input-control">
                                <label htmlFor="last">Last Name</label>
                                <input type="text" id="last" name="lastname" />
                                <div className="error">{formError.lastname}</div>
                            </div>
                            <div className="field-choice">
                                <input type="checkbox" id="check1" />
                                <label htmlFor="check1">Sign Up For Newsletter</label>
                            </div>
                            <div className="field-choice btm">
                                <input type="checkbox" id="check2" />
                                <label htmlFor="check2">Allow remote shopping assistance</label>
                            </div>
                            <legend>Sign-in Information</legend>
                            <div className="input-control">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" name="email" />
                                <div className="error">{formError.email}</div>
                            </div>
                            <div className="input-control">
                                <label htmlFor="pass">Password</label>
                                <input type={showPassword ? "text" : "password"} id="pass" name="password" />
                                <div className="error">{formError.password}</div>
                            </div>
                            <div className="input-control">
                                <label htmlFor="confirm-pass">Confirm Password</label>
                                <input type={showPassword ? "text" : "password"} id="confirm-pass" name="confirmPassword" />
                                <div className="error">{formError.confirmPassword}</div>
                            </div>
                            <div className="field-choice">
                                <input type="checkbox" id="check3" onClick={(e) => { setShowPassword(!showPassword) }} />
                                <label htmlFor="check3">Show Password</label>
                            </div>
                            <div className="field-choice">
                                <input type="checkbox" id="check4" required />
                                <label htmlFor="check4">I accept the <span>Privacy Policy</span></label>
                            </div>
                            <div className="field-choice">
                                <input type="checkbox" id="check5" required />
                                <label htmlFor="check5">I accept the <span>Terms & Conditions</span></label>
                            </div>
                            <div className="field-choice exception btm">
                                <input type="checkbox" id="check6" required />
                                <label htmlFor="check6">I agree to my personal data being stored and used to provide website services. (Order processing, comments, reviews, questions, testimonials)</label>
                            </div>
                            <button>
                                CREATE AN ACCOUNT
                            </button>
                        </div>
                    </form>
                </div>
            </SignContainer >
        </>
    );
}