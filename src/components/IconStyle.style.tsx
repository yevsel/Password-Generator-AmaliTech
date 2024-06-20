import Image from "next/image";

import styled from "styled-components";

export const IconStyle = styled(Image)`
    
    transition: filter 400ms ease;
    cursor: pointer;
    
    &:hover{
        filter:saturate(0%)
    }
`