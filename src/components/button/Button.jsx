import './Button.css';

function Button(props) {

    return (
        <>
<button disabled={props.isDisabled} onClick={props.onClick}>{props.buttonText}</button>
        </>
    );

}

export default Button;
