import React from "react";
import styled from "styled-components";

interface ButtonProps {
  children: string;
  onClick: () => void;
}

export const Button = ({ children, onClick }: ButtonProps) => {
  return <CustomButton onClick={onClick}>{children}</CustomButton>;
};

const CustomButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.textColor_primary};
  background-color: ${(props) => props.theme.bgColor_secondary};
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 10px;
  margin: 0px 10px;
  padding: 5px 10px;

  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;
