import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import {Button} from "@chakra-ui/react";
import classes from "./ErrorModal.module.css";

const ErrorModal = (props) => {
    const Backdrop = (props) => {
        return <div className={classes.backdrop} onClick={props.onConfirm}/>;
    };
    const Modal = (props) => {
        return (
            <Card className={classes.modal}>
                <header className={classes.header}>
                    <h2>{props.title}</h2>
                </header>
                <div className={classes.content}>
                    <p>{props.message}</p>
                </div>
                <footer className={classes.actions}>
                    <Button height="35px" colorScheme="teal" onClick={props.onConfirm}>
                        Okay
                    </Button>
                </footer>
            </Card>
        );
    };
    return (
        <>
            {/*<div className={classes.backdrop} onClick={props.onConfirm} />*/}
            {/* Used Portals and same for the modal below*/}
            {ReactDOM.createPortal(
                <Backdrop onConfirm={props.onConfirm}/>,
                document.getElementById("backdrop-root")
            )}
            {ReactDOM.createPortal(
                <Modal
                    title={props.title}
                    message={props.message}
                    onConfirm={props.onConfirm}
                />,
                document.getElementById("backdrop-root")
            )}
        </>
    );
};

export default ErrorModal;
