import "./button.styles.css";

const Button = (props) => {

    return(
        <button className={props.style} onClick={props.onClickHandler}>{props.title}</button>
    );
}

export default Button;