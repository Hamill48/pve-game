import "./input.styles.css";

const Input = (props) => {

    return(
        <>
            <label className="input-label" for={props.id}>{props.labelTitle}</label>
            <input className="input-component" type={props.type} id={props.id} name={props.id} onChange={props.onChangeHandler}/>
        </>
    );
}

export default Input;