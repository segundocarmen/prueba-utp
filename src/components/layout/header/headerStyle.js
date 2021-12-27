import Styled from "styled-components";

export const ItemNav = Styled("span")`
    color: #fff;
    line-height: 40px;
    margin-right: 10px;
    font-weight: 600;
`;

export const ListProducts = Styled("div")`
    position: absolute;
    top: 55px;
    z-index: 1;
    padding: 5px;
    border: 1px solid #343a40;
    right: 0;
    width: 380px;
    background: #fff;
    box-shadow: 1px 2px 2px #343a40;
    ul{
        margin: 0; 
        padding: 0 15px;
        li:first-child{
            span{
                font-weight: 600;
            }
        }
        li{
            list-style: none;
            font-size: 12px;
            display: flex;
            justify-content: space-between;
            span:first-child{
                width: 160px;
            }
            span.close{
                color: red;
                font-weight: 600;
                cursor: pointer;
            }
        }
    }
    >div{
        padding: 0 15px;
        text-align: right;
        font-weight: 600;
        span{
            margin-left: 5px;
        }
    }
`;
