import Styled from "styled-components";

export const LoadComponent = Styled("div")`
    position: fixed;
    background: rgba(255,255,255,0.6);
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1;
    > div{
        display: flex;
        justify-content: center;
        height: 100%;
    }
`;
