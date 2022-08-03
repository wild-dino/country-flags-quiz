import { ButtonProps } from "@/types/types";
import { FC } from "react";
import styled from "styled-components";

const Button: FC<ButtonProps> = (props) => {
    return <StyledButton {...props}>{props.children}</StyledButton>;
};

const StyledButton = styled.button`
    position: relative;
    min-height: 40px;
    min-width: 100px;
    font-weight: bold;
    border: 0;
    border-radius: 5px;
    background: #b02bee;
    color: #FFFFFF;
    cursor: pointer;

    z-index: 1;
    transition: 0.3s all ease-in-out;

    &:hover {
        opacity: 0.5;
    }
`;

export default Button;
