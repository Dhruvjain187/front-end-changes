import { useEffect, useState } from "react";
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
    const [formdata, setFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirmPassword: "",
        showpassword: false
    })

    const func = (event) => {
        const fieldName = event.target.name;
        const fieldValue = event.target.value;

        setFormData((prevdata) => {
            return { ...prevdata, [fieldName]: fieldValue };
        })
    }

    const showPasswordFunc = () => {
        setFormData((prevdata) => {
            return { ...prevdata, showpassword: !formdata.showpassword };
        })
    }

    const handleSubmit = (event) => {
        if (formdata.password !== formdata.confirmPassword) {
            event.preventDefault();
        }
        else {
            console.log("everything is fine")
        }
    }

    return (
        <>
            <SignContainer>
                <h1>
                    <span>
                        CREATE NEW CUSTOMER ACCOUNT
                    </span>
                </h1>
                <div className="Information-container">
                    <form action="http://localhost:3000/sign-up" method="post" onSubmit={handleSubmit}>
                        <div className="Information">
                            <legend>Personal Information</legend>
                            <label htmlFor="first">First Name</label>
                            <input type="text" id="first" name="firstname" value={formdata.firstname} onChange={func} required />
                            <label htmlFor="last">Last Name</label>
                            <input type="text" id="last" name="lastname" value={formdata.lastname} onChange={func} required />
                            <div className="field-choice">
                                <input type="checkbox" id="check1" />
                                <label htmlFor="check1">Sign Up For Newsletter</label>
                            </div>
                            <div className="field-choice btm">
                                <input type="checkbox" id="check2" />
                                <label htmlFor="check2">Allow remote shopping assistance</label>
                            </div>
                            <legend>Sign-in Information</legend>
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" value={formdata.email} onChange={func} required />
                            <label htmlFor="pass">Password</label>
                            <input type={formdata.showpassword ? "text" : "password"} id="pass" name="password" value={formdata.password} onChange={func} required />
                            <label htmlFor="confirm-pass">Confirm Password</label>
                            <input type={formdata.showpassword ? "text" : "password"} id="confirm-pass" name="confirmPassword" value={formdata.confirmPassword} onChange={func} required />
                            <div className="field-choice">
                                <input type="checkbox" id="check3" value={formdata.showpassword} onChange={showPasswordFunc} />
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