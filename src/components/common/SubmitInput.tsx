import styled from "styled-components";

interface SubmitInputProps {
  type: string;
  value: string;
  disabled?: boolean;
}

export const SubmitInput = ({ type, value, disabled }: SubmitInputProps) => {
  return <CustomSubmitInput type={type} disabled={disabled} value={value} />;
};

const CustomSubmitInput = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.textColor_primary};
  background-color: ${(props) => props.theme.bgColor_secondary};
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 10px;
  margin: 10px 20px;
  padding: 5px 10px;

  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    opacity: 0.2;
  }
`;
