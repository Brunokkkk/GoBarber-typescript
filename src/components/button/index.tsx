import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './style';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ children, ...res }) => (
  <Container type="button" {...res}>
    {children}
  </Container>
);

export default Button;
