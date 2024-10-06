import { useState } from "react";
import styled from "styled-components"

export const MainMore = styled.div`
    &{
        width:100%;
    }
`

export const MoreInfoNav = styled.div`
    &{
        background-color: #fafafa;
        display: flex;
        /* justify-content: center; */
        gap: 1rem;
        border-bottom: 2px solid rgba(31,41,55,.1);
        padding: 0rem 3rem;
        position: relative;
    }

    & div{
        padding: 1.25rem 0 1.25rem 0;
    }
`;

export const MoreContent = styled.div`
    &{
        padding: 0rem 0rem 0rem 3rem;
        background-color: #fafafa;
    }

    & .moreInfo{
        display: flex;
        flex-direction: row;
        position: relative;
    }

    & .moreInfo .paraContent{
        width: 60%;
        font-family: "Mukta";
    }

    & .moreInfo .paraContent p{
        font-size: 1rem;
        opacity: 1;
        color:#1f2937;
    }

    & .moreInfo .imgContent{
        width: 40%;
        background-color: rgb(244,244,244);
        /* position: absolute; */
        /* height: 100%; */
        /* height: auto; */
        right: -3rem;
        top:0;
    }

    & .moreInfo .imgContent img{
        /* height:auto; */
        height: 100%;
        width: 100%;
        mix-blend-mode: multiply;
    }

    & .details{
        /* padding: 1rem 3rem; */
        line-height: 1.5rem;
    }

    & .details td{
        width: 100%;
        padding: .75rem .5rem;
        padding-right:0rem;
    }

    & .details th{
        width: 20%;
        text-align: left;
        padding: .75rem .5rem;
        padding-left: 0rem;
    }

    & .details table{
        border-collapse: collapse;
        width: 100%;
    }

    & .details table tr.border{
        border-bottom:0.1px solid rgba(31,41,55,.1);
    }

    & .details td{
        width: 75%;
    }


    @media(max-width:780px){
        &{
            padding: 0rem 1.5rem;
        }

        & .moreInfo .imgContent{
            display: none;
        }

        & .moreInfo .paraContent{
            width: 100%;
        }

        & .details{
            padding: 1rem 1.5rem;
        }
    }
`;

export default function More({ data }) {
    const [details, setDetails] = useState(false);

    return (
        <>
            <MoreInfoNav>
                <div onClick={() => { setDetails(false) && handleToggle() }}>DETAILS</div>
                <div onClick={() => { setDetails(true) && handleToggle() }}>MORE INFO</div>
            </MoreInfoNav>
            <MoreContent>
                {details ?

                    <div className="details">
                        <table>
                            <tbody>
                                <tr className="border">
                                    <th>Size</th>
                                    <td className="td-data">{data.moreInfo.Size}</td>
                                </tr>
                                <tr className="border">
                                    <th>Style Bottom</th>
                                    <td className="td-data">{data.moreInfo.StyleBottom}</td>
                                </tr>
                                <tr className="border">
                                    <th>Color</th>
                                    <td className="td-data">{data.moreInfo.color}</td>
                                </tr>
                                <tr className="border">
                                    <th>Material</th>
                                    <td className="td-data">{data.moreInfo.Material}</td>
                                </tr>
                                <tr className="border">
                                    <th>Climate</th>
                                    <td className="td-data">{data.moreInfo.Climate}</td>
                                </tr>
                                <tr>
                                    <th>Pattern</th>
                                    <td className="td-data">{data.moreInfo.Pattern}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    :
                    <div className="moreInfo">
                        <div className="paraContent">
                            <p>{data.details}</p>
                            <p>
                                {data.detailsList.map((el, idx) => {
                                    return <li key={idx}>{el}</li>
                                })}
                            </p>
                        </div>
                        <div className="imgContent">
                            <img src={data.smallImg[0]} alt="" />
                        </div>
                    </div>
                }
            </MoreContent>
        </>
    )
}