import styled from "styled-components";
interface IFormInputProps {
  error: any;
}

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 4px;
`;
export const InputLabel = styled.p`
  font-size: 14px;
  font-weight: 500;
`;
export const Input = styled.input<IFormInputProps>`
  width: 100%;
  padding: 12px;
  outline: none;
  background: var(--primary-color);
  border: 1px solid ${(props) => (props.error ? "red" : "var(--accent-color)")};
  border-radius: 4px;
`;

export const InputSelect = styled.select<IFormInputProps>`
  width: 100%;
  width: 100%;
  padding: 12px;
  outline: none;
  background: var(--primary-color);
  border: 1px solid ${(props) => (props.error ? "red" : "var(--accent-color)")};
  border-radius: 4px;
  option {
    padding: 16px;
  }
  option:hover {
    background-color: red;
  }
`;

export const ErrorText = styled.p`
  color: red;
  font-size: 12px;
  display: flex;
  gap: 3px;
  justify-content: left;
  align-items: center;
`;
export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 28px;
`;
export const SubmitBtn = styled.button`
  width: 50%;
  background: var(--accent-color);
  padding: 12px 20px;
  border-radius: 6px;
  text-align: center;
  font-weight: 500;
`;
export const ResetBtn = styled.button`
  width: 50%;
  border: 1px solid var(--accent-color);
  padding: 12px 20px;
  border-radius: 6px;
  text-align: center;
  font-weight: 500;
`;
