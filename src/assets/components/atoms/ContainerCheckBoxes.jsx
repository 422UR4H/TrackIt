import styled from 'styled-components';

export default function ContainerCheckBoxes({ checkboxes, setCheckboxes }) {
    function handleChange({ target }) {
        setCheckboxes(checkboxes.map((checkbox) =>
            target.id === checkbox.id ?
                { ...checkbox, isChecked: target.checked } :
                checkbox
        ));
    }

    return (
        <StyledCheckBoxes>
            {checkboxes.map((checkbox) => (
                <label key={checkbox.id} className="container">
                    <input
                        type="checkbox"
                        id={checkbox.id}
                        checked={checkbox.isChecked}
                        value={checkbox.isChecked}
                        onChange={handleChange}
                    />
                    <span className="checkmark">
                        {checkbox.label}
                    </span>
                </label>
            ))}
        </StyledCheckBoxes>
    );
}

const StyledCheckBoxes = styled.div`
    margin-top: 4px;
    font-size: 20px;
    display: flex;
    justify-content: flex-start;
    
    .container {
        width: 30px;
        height: 30px;
        margin-right: 4px;
        border-radius: 5px;

        display: block;
        position: relative;
    }

    .checkmark {
        color: #DBDBDB;
        text-align: center;

        width: inherit;
        height: inherit;
        border: 1px solid #DBDBDB;
        border-radius: inherit;

        position: absolute;
        top: 0px;
        left: 0px;
        z-index: 1;
    }

    input {
        width: 0px;
        height: 0px;
        opacity: 0;
    }

    .container input:checked ~ .checkmark {
        background-color: #DBDBDB;
        color: white;
    }
`;