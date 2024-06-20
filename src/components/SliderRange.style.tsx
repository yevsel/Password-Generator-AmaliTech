
import styled from "styled-components";

export const SliderRange = styled.input`
    /* removing default appearance */
      -webkit-appearance: none;
      appearance: none;
      
      width: 90%;
      margin: auto;
      margin-bottom: 3em;
      cursor: pointer;
      outline: none;
      /* z-index: -11; */
      
      height: 10px;
      background: var(---primary-color-deep-black);
      border-radius: 16px;
      
      &::-webkit-slider-thumb{
          /* removing default appearance */
          -webkit-appearance: none;
          appearance: none;
          /* creating a custom design */
          height: 15px;
          /* z-index: -1; */
          width: 15px;
          background-color: #fff;
          border-radius: 50%;
          border: 2px solid #f50;
        box-shadow: -407px 0 0 400px #f50;
      }
    
`