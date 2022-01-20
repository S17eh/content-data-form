import React from "react";
import {useState} from "react";
import './InputForm.css'
import Content from "./Inputs/Content";
import Username from "./Inputs/Username";
import Password from "./Inputs/Password";

function InputForm() {
    const [enteredContent, setEnteredContent] = useState('')
    const [enteredUsername, setEnteredUsername] = useState('')
    const [enteredPassword, setEnteredPassword] = useState('')
    const [isContent, setIsContent] = useState(true)
    const [isName, setIsName] = useState(true)
    const [isPassword, setIsPassword] = useState(true)


    const ContentHandler = (event) => {
        if (enteredContent.trim().length > 0) {
            setIsContent(true);
        }
        setEnteredContent(event.target.value)
    }
    const UsernameHandler = (event) => {
        if (enteredUsername.trim().length > 0) {
            setIsName(true);
        }
        setEnteredUsername(event.target.value)
    }
    const PasswordHandler = (event) => {
        if (enteredPassword.trim().length > 0) {
            setIsPassword(true);
        }
        setEnteredPassword(event.target.value)
    }

    const DataCollector = (event) => {
        event.preventDefault();

        if (enteredContent.trim().length === 0) {
            setIsContent(false);
            return;
        }
        if (enteredUsername.trim().length === 0) {
            setIsName(false);
            return;
        }
        if (enteredPassword.trim().length === 0) {
            setIsPassword(false);
            return;
        }

        if (localStorage.getItem("content") === null) {
            let contentData = [];
            contentData.push([enteredContent, enteredUsername, enteredPassword]);
            localStorage.setItem("content", JSON.stringify(contentData));
        } else {
            let contentData = JSON.parse(localStorage.getItem("content"))
            contentData.push([enteredContent, enteredUsername, enteredPassword]);
            localStorage.setItem("content", JSON.stringify(contentData));
        }

        console.log((JSON.parse(localStorage.getItem("content"))))
        setEnteredContent('')
        setEnteredUsername('')
        setEnteredPassword('')

    }


    return (
        <form className={`newContent ${(!isContent || !isName || !isPassword) && 'invalid'}`}>
            <Content newValue={enteredContent} nextContent={ContentHandler}/>
            <Username newValue={enteredUsername} nextUser={UsernameHandler}/>
            <Password newValue={enteredPassword} nextPassword={PasswordHandler}/>
            <div>
                <button className="button" type="submit" onClick={DataCollector}>Submit</button>
            </div>
        </form>
    );
}

export default InputForm;