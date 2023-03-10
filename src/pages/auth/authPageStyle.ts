import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "./../../styles/colors";

export const FormContainer = styled.div`
  width: 550px;
  height: 450px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: auto;
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 50px;
  color: ${(props) => props.theme.textColor_primary};
  background-color: ${(props) => props.theme.bgColor_primary};
  padding: 10px;
`;

export const FormHeader = styled.div`
  height: 50px;
  font-weight: 600;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const InputWrapper = styled.div`
  width: 320px;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  width: 220px;
  height: 30px;
  padding: 5px 10px;

  color: white;
  background-color: ${(props) => props.theme.bgColor_tertiary};
  border: 2px solid ${(props) => props.theme.borderColor};
`;

export const ErrorWrapper = styled.div`
  width: 320px;
  display: flex;
`;

export const EmptySpace = styled.div`
  width: 100px;
`;

export const InputError = styled.span`
  width: 220px;
  height: 20px;
  font-size: 12px;
  color: ${colors.ERROR};
  margin-bottom: 10px;
`;

export const FormError = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 220px;
  height: 20px;
  font-size: 12px;
  color: ${colors.ERROR};
  margin-bottom: 10px;
`;

export const CustomLink = styled(Link)`
  color: ${(props) => props.theme.textColor_primary};
  font-size: 14px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const LinkDescription = styled.span`
  color: rgba(255, 255, 255, 0.7);
  margin-right: 5px;
  font-size: 13px;
`;
