import { useEffect, useState } from "react";
import { StyledButton } from "./styles/Button.styled";

export default function Button(){

    //為解決componentDidUpdate初次渲染會先觸發一次的問題，所以初始值設1
    const [count, setCount] = useState(1)
    
    const [clickStatus, setClickStatus] = useState(false)
    const changeClickStatus = () => {
        setClickStatus(!clickStatus)
    }
    const incrementCount = () => {
        setCount(count + 1)
    }
    const decrementCount = () => {
        setCount(count - 1)
    }
    
    //如果clickStatus的值有改變就觸發
    useEffect(() => {
        if(clickStatus){
            incrementCount()
        }else{
            decrementCount()
        }
    },[clickStatus])
    return (
        <StyledButton onClick={changeClickStatus}>👍({count})</StyledButton>
    )
}