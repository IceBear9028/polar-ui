import { FC } from 'react';
import Button, { ButtonProps } from '../button.tsx';

const Example: FC<ButtonProps> = ({ onClick = () => {}, size = 'sm', text = 'Button' }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <Button size={size} text={text} onClick={onClick} color={'gray'} />
    </div>
  );
};

export default Example;