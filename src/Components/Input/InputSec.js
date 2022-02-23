
function InputSec(props) {

    return (
        <>
            <label>{props.children}</label>
            <input type={props.type} value={props.newValue} onChange={props.nextEntry}/>
        </>
    )

}

export default InputSec;