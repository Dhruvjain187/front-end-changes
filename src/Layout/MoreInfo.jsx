import styled from "styled-components";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ImgList from "../Components/ImgList";
import QtyForm from "../Components/QtyForm";
import More from "../Components/More";

export const SpecificContainer = styled.div`
    &{
        padding:0 1.375rem 0 1.375rem;
    }

    & .container{
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        margin-bottom: 1rem;
    }
`


export default function MoreInfo() {
    const { id } = useParams();
    const [data, setData] = useState("")


    useEffect(() => {
        const fetchApi = async (id) => {
            try {
                const res = await fetch(`http://localhost:3000/card/${id}`);
                const finalData = await res.json();
                setData(finalData);
                console.log("data", data)
            } catch (err) {
                console.log(err);
            }
        }

        fetchApi(id);

    }, [])


    return (
        <>
            {data ?
                <SpecificContainer>
                    <div className="container">
                        <ImgList data={data} />
                        <QtyForm data={data} />
                    </div>
                    <More data={data} />
                </SpecificContainer> :
                <p>Loading..</p>
            }
        </>
    )
}