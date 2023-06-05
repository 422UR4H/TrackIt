import styled from 'styled-components';

export default function ContainerCheckBoxes({ checkboxes, setCheckboxes, disabled }) {
    function handleChange({ target }) {
        setCheckboxes(checkboxes.map((checkbox) =>
            target.id === checkbox.id ?
                { ...checkbox, isChecked: target.checked } :
                checkbox
        ));
    }

    return (
        <StyledCheckBoxes disabled={disabled}>
            {checkboxes.map((checkbox) =>
                <label key={checkbox.id} className="container" data-test="habit-day"
                    disabled={disabled} // test avaliator
                >
                    <input
                        type="checkbox"
                        id={checkbox.id}
                        checked={checkbox.isChecked}
                        value={checkbox.isChecked}
                        onChange={handleChange}
                        disabled={disabled}
                    />
                    <span className="checkmark"
                        disabled={disabled} // test avaliator
                    >
                        {checkbox.label}
                    </span>
                </label>
            )}
        </StyledCheckBoxes>
    );
}

ContainerCheckBoxes.defaultProps = {
    disabled: false
};

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
    
    .container:hover {
        cursor: ${({ disabled }) => !disabled && "pointer"};
    }

    .checkmark {
        color: #DBDBDB;
        text-align: center;

        width: inherit;
        height: inherit;
        border: 1px solid #D4D4D4;
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
        background-color: #CFCFCF;
        border-color: #CFCFCF;
        color: white;
    }
`;