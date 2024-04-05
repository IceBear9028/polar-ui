import { FC } from 'react';
import { InputFieldProps } from '../inputField';
import styled from 'styled-components';
import { InputField } from '../index';

const InputFieldExample: FC<InputFieldProps> = ({
  color,
  variants,
  size,
  isRequired,
  isReadOnly,
  isError,
  isDisabled,
  value,
  errorMessage,
}) => {
  return (
    <Background>
      <InputField
        size={size}
        value={value}
        variants={variants}
        color={color}
        isError={isError}
        isDisabled={isDisabled}
        isReadOnly={isReadOnly}
        isRequired={isRequired}
        errorMessage={errorMessage}
      />
    </Background>
  );
};

const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px;
  border-radius: 20px;
  background: ${({ theme }) => theme.system.color.common.background};
`;

export default InputFieldExample;
