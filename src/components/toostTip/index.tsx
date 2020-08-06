import React from 'react';
import { FiAlertCircle } from 'react-icons/fi';
import { Container, Toast } from './style';

const ToastContainer: React.FC = () => {
  return (
    <Container>
      <Toast type="error" hasdescription>
        <FiAlertCircle />
      </Toast>
    </Container>
  );
};

export default ToastContainer;
