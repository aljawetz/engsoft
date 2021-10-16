import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    justify-content: center;
    display: flex;
    padding: 20px;
    margin:20px;

    > form {
        display: flex;
        flex-direction: column;

        > button {
            margin: 20px;
        }
    }
`;