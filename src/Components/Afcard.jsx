import styled from "styled-components";

export const AfcardContainer = styled.div`
    height: 3em;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    & hr{
        width: 100%;
        border-width: 0.01em;
        border-color: #f4f4f4;
        opacity: 0.2;
    }
`;

export default function Afcard() {
    return (
        <AfcardContainer>
            <hr />
        </AfcardContainer>
    );
}