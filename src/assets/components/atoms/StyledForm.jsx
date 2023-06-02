// import React from 'react';
import styled from 'styled-components';

// export default function Form() {
//     return (
//         <StyledForm type="text">Input</StyledForm>
//     );
// }

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 303px;

    input {
        color: #666666;
        font-size: 20px;
        line-height: 25px;

        height: 45px;
        border: 1px solid #D4D4D4;
        border-radius: 5px;
        margin-bottom: 6px;
        padding-left: 10px;

        &::placeholder {
            color: #DBDBDB;
        }
    }
`;

export default StyledForm;