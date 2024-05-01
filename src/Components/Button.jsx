import React from 'react';
import styled from 'styled-components';

const Button = (props) => {
  const {
    type = 'button',
    children,
    id,
    icon,
    className,
    onClick,
    size = 'medium', // small, medium, big
    disabled = false,
  } = props;

  return (
    <ButtonWrapper
      type={type}
      id={id}
      className={`button ${className ? className : ''} ${size ? size : ''} ${
        icon ? 'inner-icon ' + icon : ''
      }`}
      disabled={disabled}
      onClick={onClick}>
      {icon ? <i className={`icon icon-${icon}`}></i> : ''} {children}
    </ButtonWrapper>
  );
};

export default Button;

const ButtonWrapper = styled.button`
  border: none;
  border-radius: 6.25rem;
  display: flex;
  font-size: 1rem;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem;
  position: relative;
  .icon {
    margin-right: 0.5rem;
  }
  &.small {
    padding: 0.5rem 1rem;
  }
  &.inner-icon {
    .icon {
      width: 1rem;
      height: 1rem;
      border-radius: 100px;
      overflow: hidden;
      background-size: 1rem 1rem;
      background-repeat: no-repeat;
      background-position: center center;
    }
  }
`;
