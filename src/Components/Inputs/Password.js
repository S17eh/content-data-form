function Password(props) {

    return (
        <div>
            <label>Password</label>
            <input type='password' value={props.newValue} onChange={props.nextPassword}/>
        </div>
    )
}

export default Password;