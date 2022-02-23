import React from "react";
import {useState, useEffect, useContext} from "react";
import './InputForm.css'
import InputSec from "./InputSec";
import Card from "../UI/Card"
import {Button, Wrap} from '@chakra-ui/react'
import ErrorModal from "../UI/ErrorModal"
import AuthContext from "../../store/auth-context"

function InputForm(props) {
    const [enteredContent, setEnteredContent] = useState('')
    const [enteredUsername, setEnteredUsername] = useState('')
    const [enteredPassword, setEnteredPassword] = useState('')
    // const [isContent, setIsContent] = useState(true)
    // const [isName, setIsName] = useState(true)
    // const [isPassword, setIsPassword] = useState(true)
    const [error, setError] = useState();
    const [formIsValid, setFormIsValid] = useState(false);

    const authCtx = useContext(AuthContext.Consumer)

    useEffect(() => {
        const identifier = setTimeout(() => {
            setFormIsValid(
                enteredUsername.includes('@') && enteredPassword.trim().length > 6
            );
            console.log("TimeOut");
        }, 500);

        return () => {
            clearTimeout(identifier);
        };
    }, [setFormIsValid, enteredUsername, enteredPassword])

    const ContentHandler = (event) => {
        if (enteredContent.trim().length > 0) {
            // setIsContent(true);
        }
        setEnteredContent(event.target.value)
    }
    const UsernameHandler = (event) => {
        if (enteredUsername.trim().length > 0) {
            // setIsName(true);
        }
        setEnteredUsername(event.target.value)
    }
    const PasswordHandler = (event) => {
        if (enteredPassword.trim().length > 0) {
            // setIsPassword(true);
        }
        setEnteredPassword(event.target.value)
    }

    const DataCollector = (event) => {
        event.preventDefault();

        if (enteredContent.trim().length === 0) {
            // if (enteredUsername.trim().length === 0) {
            //     setError({
            //         title: "Invalid Content and Username!",
            //         message: "Content and Username Can not be empty."
            //     })
            // } else {     "It was before using form validation useState the form."
            setError({
                title: "Invalid Content!",
                message: "Content Can not be empty."
            })
            // }
            return;
        }


        // if (enteredUsername.trim().length === 0) {
        //     setError({
        //         title: "Invalid Username!",
        //         message: "Username Can not be empty."
        //     })
        //     return;
        // }
        // if (enteredPassword.trim().length === 0) {
        //     setError({
        //         title: "Invalid Password!",
        //         message: "Please provide valid password."
        //     })
        //     return;
        // }            "It was before using form validation state."

        if (localStorage.getItem("content") === null) {
            let contentData = [];
            contentData.push([enteredContent, enteredUsername, enteredPassword]);
            localStorage.setItem("content", JSON.stringify(contentData));
        } else {
            let contentData = JSON.parse(localStorage.getItem("content"))
            contentData.push([enteredContent, enteredUsername, enteredPassword]);
            localStorage.setItem("content", JSON.stringify(contentData));
        }

        props.ContentListHandler(enteredContent, enteredUsername)
        authCtx.onLogin(enteredUsername, enteredPassword)
        console.log((JSON.parse(localStorage.getItem("content"))))
        setEnteredContent('')
        setEnteredUsername('')
        setEnteredPassword('')

    }

    function ErrorHandler() {
        setError(null)
    }


    return (
        <>
            {error && (<ErrorModal
                    title={error.title}
                    message={error.message}
                    onConfirm={ErrorHandler}
                />
            )}
            <Card className={`newContent `}>
                <form>
                    <InputSec type='text' newValue={enteredContent} nextEntry={ContentHandler}>Content</InputSec>
                    <InputSec type='text' newValue={enteredUsername} nextEntry={UsernameHandler}>Username</InputSec>
                    <InputSec type='password' newValue={enteredPassword} nextEntry={PasswordHandler}>Password</InputSec>
                    <Wrap justify='center'>
                        <Button height='35px' colorScheme='teal' onClick={DataCollector} disabled={!formIsValid}>
                            {authCtx.isLoggedIn ? "ADD" : "LOGIN"}
                        </Button>
                    </Wrap>
                </form>
            </Card>
        </>
    )
}

export default InputForm;