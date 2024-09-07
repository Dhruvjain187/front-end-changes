import { useEffect, useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const LoginContainer = styled.div`
    &{
        font-family:'Barlow Semi Condensed';
    }

    & .title-wrapper{
        margin: 2em 0 2em 0;
    }

    & .title-wrapper h1{
        position: relative;
        background: url("https://argento-breeze-m2.swissupdemo.com/static/frontend/Swissup/argentobreeze-force/en_US/images/title-bg.svg") no-repeat 50% 50%;
        display: flex;
        padding: 2em 0 2em 0;
        justify-content: center;
        align-items: center;
    }

    & .title-wrapper h1 span{
        font-size: 3rem;
        font-weight: 600;
        line-height: 1;
        color: #1F2937;
    }

    & .login{
        width: 100%;
        display: flex;
        justify-content: center;
        gap:3rem;
        margin: 2em 0 3.5em 0;
    }

    & .customer-login{
        padding: 0;
        /* height: 25em; */
        display: flex;
        padding: 1.5rem 2.5rem;
        flex-direction: column;
        background: #f5f5f4;
        width: 36%;
    }

    & .customer-login strong{
        font-weight: 600;
        font-size: 1.5rem;
        padding: .75rem 0;
    }

    & .customer-login .div-content{
        padding: 0 0 0.75rem 0;
        color: #1F293799;
        font-weight: 400;
    }

    & .customer-login label{
        font-size: 1rem;
        margin: 0.5rem 0 0.5rem 0;
    }

    & .customer-login input{
        padding: .5rem .0rem;
        width: 100%;
    }

    & .customer-login .field{
        margin-top: 1rem;
        display: flex;
        gap:.375rem;
        align-items: center;
    }

    & .customer-login .field input{
        height: 0.75rem;
        width: 0.75rem;
        border: 1px solid rgb(209, 213, 219);
        margin:0.2rem 0 0;
    }

    & .customer-login button{
        width: 100%;
        padding: .5rem 0rem;
        margin-top: 1.125rem;
        font-size: 1.25rem;
        font-family:'Barlow Semi Condensed';
        background-color: #F76801;
        font-weight: 500;
        color: white;
        border: none;

        & a{
            font-size: 1.25rem;
            font-family:'Barlow Semi Condensed';
            font-weight: 500;
            color: white;
            text-decoration: none;
        }
    }

    & .customer-login button:hover{
        background-color: black;
    }

    & .customer-login span{
        margin: 1.125rem 0 1.125rem 0;
        text-align:center;
        text-decoration:3px underline #ede734;
    }

    & .customer-login p{
        color: #1F2937;
        font-size: 1rem;
        margin: 0;
        font-family: "Mukta";
        line-height: 1.2rem;
    }

    @media(max-width:797px){
        & .login{
            overflow: hidden;
            flex-direction: column;
            align-items: center;
        }

        & .customer-login{
            min-height: 5em;
            width: 85%;
        }
    }

`;

export default function Login() {
    async function fetchApi() {
        try {
            const res = await fetch("http://localhost:3000/login");
            const resJson = await res.json();
            console.log(resJson);
            return resJson;
        } catch (err) {
            console.log(err);
        }
    }

    const data = fetchApi();

    const [formdata, setFormData] = useState({
        email: "",
        password: "",
        showpassword: false
    })

    const func = (event) => {
        const fieldname = event.target.name;
        const fieldvalue = event.target.value;

        setFormData((prevdata) => {
            return { ...prevdata, [fieldname]: fieldvalue };
        })
    }

    const showPassFunc = () => {
        setFormData((prevdata) => {
            return { ...prevdata, showpassword: !formdata.showpassword };
        })
    }

    return (
        <>
            <LoginContainer>
                <div className="title-wrapper">
                    <h1>
                        <span>CUSTOMER LOGIN</span>
                    </h1>
                </div>
                <div className="login">
                    <div className="customer-login">
                        <form action="http://localhost:3000/login" method="post">
                            <strong>REGISTERED CUSTOMERS</strong>
                            <div className="div-content">if you have an account, sign in with your email address.</div>
                            <label htmlFor="Email">Email</label>
                            <input type="email" id="Email" required name="email" value={formdata.email} onChange={func} />
                            <label htmlFor="Password">Password</label>
                            <input type={formdata.showpassword ? "text" : "password"} id="password" name="password" value={formdata.password} onChange={func} />
                            <div className="field">
                                <input type="checkbox" id="show" value={formdata.showpassword} onChange={showPassFunc} />
                                <label htmlFor="show">Show Password</label>
                            </div>
                            <button type="submit">SIGN IN</button>
                            <span>Forgot Your Password?</span>
                        </form>
                    </div>
                    <div className="customer-login">
                        <strong>NEW CUSTOMERS</strong>
                        <p>Creating an account has many benifits:
                            check out faster, keep more than one address,track orders and more
                        </p>
                        <button><NavLink to="http://localhost:5173/new">CREATE AN ACCOUNT</NavLink></button>
                    </div>
                </div>


            </LoginContainer>
        </>
    );
}