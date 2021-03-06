//import logo from './logo.svg';
import {ChakraProvider} from '@chakra-ui/react'
import './App.css';
import './App.css'
import ContentList from "./Components/Output/ContentList"
import InputForm from "./Components/Input/InputForm";
import {useState, useEffect, useContext} from "react";
import MainHeader from "./Components/Header/MainHeader"
import AuthContext from "./store/auth-context"

function App() {

    const [contentList, SetContentList] = useState([])

    useEffect(() => {
        if (localStorage.getItem("content") != null) {
            let oldContent = JSON.parse(localStorage.getItem("content"))
            for (let i = 0; i < oldContent.length; i++) {
                SetContentList((preState) => {
                    return [...preState, {
                        name: oldContent[i][1], nameOfCon: oldContent[i][0], id: Math.random().toString()
                    }]
                })
            }
        }
        return () => {
        }
    }, [])

    const ListHandler = (cName, uName) => {
        SetContentList((preState) => {
            return [...preState, {name: uName, nameOfCon: cName, id: Math.random().toString()}]
        })
    }

    const listWipe = () => {
        SetContentList([])
    }

    const ctx = useContext(AuthContext)

    return (<ChakraProvider>
        <>
            <MainHeader/>
            {<InputForm ContentListHandler={ListHandler}/>}
            {ctx.isLoggedIn && <ContentList contents={contentList} onDelete={listWipe}/>}
        </>
    </ChakraProvider>)

}

export default App;
