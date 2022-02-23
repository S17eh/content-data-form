import classes from "./ContentList.module.css"
import Card from "../UI/Card"
import React from "react";
import {Button, Wrap} from '@chakra-ui/react'

function ContentList(props) {

    return (
        <Card className={classes.content}>
            <Wrap justify='center'>
                <Button height='35px' colorScheme='teal' onClick={props.onDelete}>CLEAR</Button>
            </Wrap>
            <ul>
                {props.contents.map((content) => (
                    <li key={content.id}>
                        Content: {content.nameofCon} || By >> {content.name}
                    </li>
                ))}
            </ul>
        </Card>
    )
}


export default ContentList