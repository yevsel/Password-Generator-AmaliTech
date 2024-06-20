
import styled from "styled-components";

interface IFlexContainer{
    justifyContent?:string
    width?:string
    height?:string
    marginTop?:string
    backgroundColor?:string
}

export const FlexContainer = styled.div<IFlexContainer>`
    width: ${(props)=>props.width?props.width+"%":"100%"};
    height: ${(props)=>props.height?props.height+"%":"100%"};
    background-color: ${(props)=>props.backgroundColor?props.backgroundColor:"transparent"};
    margin: auto;
    margin-top: ${(props)=>props.marginTop?props.marginTop+'px':"0px"};
    justify-content: ${(props)=>props.justifyContent?props.justifyContent:"between"};
    display: flex;
    align-items: center;
`