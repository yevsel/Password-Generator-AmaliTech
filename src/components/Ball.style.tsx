
import styled from "styled-components";

interface IBall{
    ballPosition:number
}

export const Ball = styled.div<IBall>`
    width: 28px;
    height: 28px;
    border-radius: 100%;
    background-color: white;
    z-index: 1 !important;
    position: absolute;
    bottom:-9px;
    transition: background-color 200ms ease;
    cursor: grab;
    transform: translateX(${(props)=>props.ballPosition + "px"});
    
    &:hover{
        background-color: var(---primary-color-deep-black);
        border:2px solid var(---secondary-color-green);
    }
    &:active{
        cursor: grabbing;
    }
`