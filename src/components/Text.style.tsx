"use client"
import styled from "styled-components"

interface IText{
    fontSize:string,
    color?:string,
    textAlign:string
}

export const Text = styled.p<IText>`
    font-family: monospace;
    font-size: ${(props)=>props.fontSize+"px"};
    color: ${(props)=>props.color};
    text-align: ${(props)=>props.textAlign};
`