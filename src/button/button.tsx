import React, { FC } from 'react';

interface ButtonStyles {
  size: ButtonSize;
  color: ButtonColorKeys;
  variants: ButtonVariants;
}
interface ButtonTypes {
  text: string;
  icon: React.JSX.Element;
}
interface ButtonActions {
  onClick: () => void;
}

interface ButtonProps extends ButtonStyles, ButtonTypes, ButtonActions {}

export const Button: FC<ButtonProps> = (props) => {};
