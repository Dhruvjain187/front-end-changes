import styled from "styled-components"
import { NavLink } from "react-router-dom";
export const NavbarUpperContainer = styled.div`
    font-family:'Barlow Semi Condensed';
    width: 100%;
    height: 2em;
    border-bottom: 2px solid rgba(203,213,219,0.15);
    
    .header{
        padding: 0.375rem 0.75rem;
        height: 100%;
        font-size: 16px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    & span,a{
        all: unset;
    }

    .header-panel-info{
        display: flex;
        align-items: center;
        margin-left: 1em;
        column-gap: 0.75em;  
    }

    .header-panel-info1{
        display: flex;
        align-items: center;
        column-gap: 0.75em;  
        margin-right: 1em;
        position: relative;
    }

    .header-panel-info1 span{
        cursor: pointer;
    }

    & .header .header-panel-info1 input{
        display: none;
    }

    & .header .header-panel-info1 span.options .drop-menu{
        display: none;
        position: absolute;
        /* top: 1.5em; */
        top: 0.8em;
        width: 60%;
        height: 3.7rem;
        background-color: white;
        z-index: 15;
        padding: 0;
        box-shadow: 0 4px 15px -2px rgba(0, 0, 0, .1), 0 1px 6px rgba(0, 0, 0, .05), 0 0 0 1px rgb(0 0 0 / 10%);
        cursor: pointer;
    }

    & .header .header-panel-info1  #inp:checked+label .drop-menu {
        display: block;
    }


    & .header-panel-info1 span.options .drop-menu li{
        list-style-type: none;
        padding:.25rem .5rem;
        color: #1F2937;
    }

    & .header-panel-info1 span.options .drop-menu li:hover{
        background-color: #f5f5f4;
    }

    @media(max-width:663px){
        &{
            display: none;
        }
    }
`

export default function NavbarUpper() {
    return (
        <>
            <NavbarUpperContainer>
                <div className="panel header">
                    <div className="header-panel-info">
                        <span><i className="fa-solid fa-message"></i> sales@example.com</span>
                        <span><i className="fa-solid fa-phone"></i> +01 122 334 566</span>
                    </div>
                    <div className="header-panel-info1">
                        <span >USD-US Dollar <i className="fa-solid fa-angle-down"></i></span>
                        <input type="checkbox" id="inp" />
                        <label htmlFor="inp">
                            <span className="options" ><i className="fa-solid fa-user"></i> My Account <i className="fa-solid fa-angle-down"></i>

                                <ul className="drop-menu">
                                    <li>
                                        <NavLink to="/sign-in">Sign In</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/new">Create an Account</NavLink>
                                    </li>
                                </ul>
                            </span>
                        </label>
                    </div>
                </div>
            </NavbarUpperContainer>
        </>
    );
}