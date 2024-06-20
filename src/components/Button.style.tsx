"use client"
import styled from "styled-components";

interface ButtonProps{
    backgroundColor?:string
}

const ButtonContent = styled.img`
    
    
`

export const Button = styled.button<ButtonProps>`
    cursor: pointer;
    
    &:hover{
        
    }
`

