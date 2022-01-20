
function Content(props) {

    return (
        <div>
            <label>Content</label>
            <input type='text' value={props.newValue} onChange={props.nextContent}/>
        </div>
    )

}

export default Content;