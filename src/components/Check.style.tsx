
import styled from "styled-components";
import Image from "next/image";
import check from "../../assets/images/icon-check.svg"

export const Unchecked = styled.div`
    width: 20px;
    height: 20px;
    border:2px solid var( ---primary-color-white);
    cursor: pointer;
    
    &:active{
        background-color: var( ---secondary-color-green);
        border:2px solid var( ---secondary-color-green);
    }
    
    &:hover{
        background-color: var( ---secondary-color-green);
        border:2px solid var( ---secondary-color-green);
    }
`

export const Checked = styled(Image)`
    width: 20px;
    height: 20px;
    padding: 2px;
    padding-top: 4px;
    background-color: var( ---secondary-color-green);
    cursor: pointer;
`

// export const CheckI
