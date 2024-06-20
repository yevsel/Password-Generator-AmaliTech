
import styled from "styled-components";

interface ISlider{
    ballPosition:number
}

export const Slider = styled.div<ISlider>`
    width: 90%;
    margin: auto;
    height: 10px;
    background-color: var(---primary-color-deep-black);
    position: relative;
    z-index: 1;
    /* overflow-x: hidden; */

    
    &::after{
        content:"";
        position: absolute;
        width: ${(props)=>{
            const a = (props.ballPosition/470)*100
            return a+"%"
        }};
        top: 0px;
        bottom:0px;
        background-color: var(---secondary-color-green);
        z-index: 0;
    }
`