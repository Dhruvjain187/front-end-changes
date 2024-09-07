import styled from "styled-components";

export const FooterContainer = styled.div`
    min-height: 21em;
    font-family:'Barlow Semi Condensed';
    width: 100%;
    padding-top: 1.5em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-content: space-around;
    background: #202633 url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iN3B4IiBoZWlnaHQ9IjEzcHgiIHZpZXdCb3g9IjAgMCA3IDEzIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgPjxnIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMDA1LCAtMTQpIiBmaWxsPSIjMjAyNjMzIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLCA4KSI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTMwLCAyKSI+PHBvbHlnb24gcG9pbnRzPSI0ODIgMTAuNSA0NzcuOCAxNyA0NzUgMTcgNDc5LjIgMTAuNSA0NzUgNCA0NzcuOCA0Ij48L3BvbHlnb24+PC9nPjwvZz48L2c+PC9nPjwvc3ZnPgo=") repeat-y 0 35% / 500px;;
    
    & .Footer-1{
        height: 49%;
        width: 90%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    & .Footer-2{
        display: flex;
        height: 49%;
        justify-content: space-between;
        align-items: center;
    }

    & .Footer-1 .Footer-1-Sub{
        display: flex;
        height: 100%;
        width: 24%;
        flex-direction: column;
        justify-content:flex-start;
    }

    /* & .Footer-1 .Footer-1-Sub *{
        height: 50%;
    } */

    & .Footer-1 .Footer-1-Sub h4{
        font-size: 1.325rem;
        /* text-align: center; */
        margin: 0 0 1em 0;
        line-height: 1.75rem;
        font-weight: 600;
        color: white;
    }


    & .Footer-1 .Footer-1-Sub div{
        width: 80%;
    }

    & .Footer-1 .Footer-1-Sub input{
        border: none;
        outline: none;
        height: 100%;
        width: 80%;
        padding: 0.5rem 0 0.5rem 0;
    }

    & .Footer-1 .Footer-1-Sub button{
        border: none;
        outline: none;
        background-color: yellow;
        height: 100%;
        width: 20%; 
        padding: 0.5rem 0 0.5rem 0;
    }

    & .Footer-1 .Footer-1-Sub button:hover{
        background-color: #bebe26;
    }

    & .Footer-1 .Footer-1-Sub a{
        font-size: 1rem;
        /* text-align: center; */
        color: #CBD5E1B3;
        text-decoration: none;
    }

    & .Footer-1 .Footer-1-Sub a:hover{
        text-decoration: underline;
        opacity: 1;
    }

    & .Footer-1 .Footer-1-Sub .exception:hover{
        opacity: 1;
        text-decoration: none;
    }

    & .Footer-2{
        height: 50%;
        width: 90%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        /* align-items: center; */
    }

    & .Footer-2 .Footer-2-a{
        height: 60%;
        display: flex;
        width: 100%;
        justify-content: space-between;
    }

    & .Footer-2 .Footer-2-a .Footer-2-Sub{
        width: 24%;
    }

    & .Footer-2 .Footer-2-a h4{
        font-size: 1.325rem;
        /* text-align: center; */
        margin-top: 0;
        line-height: 1.75rem;
        font-weight: 600;
        color: white;
    }

    & .Footer-2 .Footer-2-a ul{
        padding: 0;
    }

    & .Footer-2 .Footer-2-a li{
        list-style: none;
        font-size: 1rem;
        /* text-align: center; */
        color: #CBD5E1B3;
        cursor: pointer;
        text-decoration: none
    }

    & .Footer-2 .Footer-2-a li:hover{
        opacity: 1;
        text-decoration: underline;
    }

    & .Footer-2 .Footer-2-b{
        height: 23%;
        width: 100%;
    }

    & .Footer-2 .Footer-2-b ul{
        width: 55%;
        margin: 0 auto;
        padding:0;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        column-gap: 0.25em;
    }

    & .Footer-2 .Footer-2-b ul li{
        list-style: none;
        font-size: 1rem;
        text-align: start;
        color: #CBD5E1B3;
        cursor: pointer;
        text-decoration: none
    }

    & .Footer-2 .Footer-2-b ul li:hover{
        opacity: 1;
        text-decoration: underline;
    }

    & .Footer-2 .Footer-2-c span{
        width: 50%;
        font-size: 0.8rem;
        color: #CBD5E1B3;
        font-weight:500;
    }

    & .line{
        height: 2%;
        width: 90%;
        margin: 0.4em auto 0.2em auto;
        border-bottom: 1px solid #2b3945;
    }

    @media(max-width:768px){
        & .Footer-1{
            height: 45%;
            flex-direction: column;
            width: 100%;
        }

        & .Footer-1 .Footer-1-Sub{
            width: 100%;
        }

        & .Footer-1 .Footer-1-Sub h4,a{
            text-align: center;
        }

        & .Footer-1 .Footer-1-Sub h4{
            margin-bottom: 0.3em;
        }

        & .Footer-1 .Footer-1-Sub a{
            margin-bottom: 0.8em;
        }
    

        & .Footer-1 .Footer-1-Sub div{
           width: 95%;
           margin: 0 auto 1rem auto;
           overflow: hidden;
        }

        & .Footer-1 .Footer-1-Sub div input{
            width: 85%;
        }

        & .Footer-1 .Footer-1-Sub div button{
            height: 100%;
            width: 15%;
        }

        & .Footer-2{
            height: 45%;
            width: 100%;
        }

        & .Footer-2 .Footer-2-a .Footer-2-Sub{
            width: 100%;
        }

        & .Footer-2-a {
            flex-direction: column;
            align-items: center;
            width: 100%;
        }

        & .Footer-2 .Footer-2-b ul{
            width: 90%;
        }

        & .Footer-2 .Footer-2-b ul li{
            text-align: start;
        }


        & .Footer-2 .Footer-2-a h4,li{
            margin: 0;
            text-align: center;
        }
    }

`;

export default function Footer() {
    return (
        <>
            <FooterContainer>
                <div className="Footer-1">
                    <div className="Footer-1-Sub">
                        <h4>CONNECT WITH US</h4>
                        <a href="" className="exception"><i className="fa-brands fa-facebook-f"></i> &nbsp; <i className="fa-brands fa-youtube"></i>&nbsp; <i className="fa-brands fa-twitter"></i> &nbsp;<i className="fa-brands fa-instagram"></i></a>
                    </div>
                    <div className="Footer-1-Sub">
                        <h4>STORE LOCATOR</h4>
                        <a href="">Find a store near your location</a>
                    </div>
                    <div className="Footer-1-Sub">
                        <h4>SUPPORT</h4>
                        <a href="">Questions? We'd be happy to help</a>
                    </div>
                    <div className="Footer-1-Sub">
                        <h4>SIGN UP FOR LATEST OFFERS</h4>
                        <div >
                            <input type="email" placeholder="Enter your email ad" />
                            <button><i className="fa-solid fa-angle-right"></i></button>
                        </div>
                    </div>
                </div>
                <div className="line">

                </div>
                <div className="Footer-2">
                    <div className="Footer-2-a">
                        <div className="Footer-2-Sub">
                            <h4>ABOUT US</h4>
                            <ul>
                                <li>Our retail store</li>
                                <li>Data privacy</li>
                                <li>Terms & Conditions</li>
                            </ul>
                        </div>
                        <div className="Footer-2-Sub">
                            <h4>LEARN MORE</h4>
                            <ul>
                                <li>Social media</li>
                                <li>Contact us</li>
                                <li>Map</li>
                            </ul>
                        </div>
                        <div className="Footer-2-Sub">
                            <h4>BE INSPIRED BY</h4>
                            <ul>
                                <li>Blog</li>
                                <li>Typography page</li>
                                <li>Testimonials</li>
                            </ul>
                        </div>
                        <div className="Footer-2-Sub">
                            <h4>FORCESTORE</h4>
                            <ul>
                                <li>Flower street 42</li>
                                <li>sales@example.com</li>
                                <li>+01 122 334 566</li>
                            </ul>
                        </div>
                    </div>
                    <div className="Footer-2-b">
                        <ul>
                            <li>Privacy and Cookie Policy</li>
                            <li>Search Terms</li>
                            <li>Advanced Search</li>
                            <li>Orders and Returns</li>
                            <li>Contact Us</li>
                            <li>Site Map</li>
                        </ul>
                    </div>
                    <div className="Footer-2-c">
                        <span>Copyright &copy; 2013-present Magento, Inc. All rights reserved</span>
                    </div>
                </div>
            </FooterContainer>
        </>
    );
}