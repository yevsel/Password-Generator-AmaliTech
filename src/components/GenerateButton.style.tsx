import React from 'react'

import styled from 'styled-components'

export const GenerateButton = styled.div`
    width: 90%;
    height: 65px;
    margin: auto;
    background-color: var(---secondary-color-green);
    margin-top:20px;
    cursor: pointer;
    transition: background-color 300ms ease;
    display: flex;
    align-items: center;
    justify-content: center;
    

    &:hover{
        background-color: var(---primary-color-black);
        border: 2px solid var(---secondary-color-green);
        
        & > * {
            color:var(---secondary-color-green);
        }
    }
`