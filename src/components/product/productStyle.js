import Styled from "styled-components";
import { Card } from "react-bootstrap";

export const CtImageComponent = Styled("div")`
    overflow: hidden;
    max-height: 360px;
`;

export const CardBody = Styled(Card.Body)`
    max-height: 250px;
    overflow: auto;
`;
