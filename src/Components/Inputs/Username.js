function Username(props) {

    return (
        <div>
            <label>Username</label>
            <input type='text' value={props.newValue} onChange={props.nextUser}/>
        </div>
    )

}

export default Username;