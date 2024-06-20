"use client"
import styled from "styled-components"

interface ISubContainer{
    height?:string,
    marginTop?:string,
    // flex?:string
}

export const SubContainer = styled.div<ISubContainer>`
    width: auto;
    height: ${(props)=>props.height?props.height+"px":"100%"};
    background-color: var(---primary-color-black);
    margin-top: ${(props)=>props.marginTop?props.marginTop+"px":"0px"};
    /* display: ; */
    /* padding:1.5em; */
`