import Styled from "styled-components";

export const ProductsListComponent = Styled("div")`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .card{
        margin-bottom: 15px;
    }
    @media (max-width: 768px) {
        justify-content: center;
    }
`;
