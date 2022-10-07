import React from 'react';
import styled, {css} from 'styled-components';
import palette from '../../lib/styles/palette';

const StyledButton = styled.button`
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.25rem 2rem;
  color: white;
  outline: none;
  cursor: pointer;
  background: ${palette.gray[8]};
  &:hover {
    background: ${palette.gray[6]};
  }
  
  ${props =>
    props.fullWidth && 
    css`
    padding-top: 0.75rem;
      padding-bottom: 0.75rem;
      width: 100%;
      font-size: 1.125rem;
    `
  }
  ${props =>
    props.cyan && 
    css`
        background: ${palette.gray[5]};
        &:hover {
        background: ${palette.gray[4]};
        }
    `
  }

  ${props =>
      props.test &&
      css`
        background: ${palette.gray[9]};
        &:hover {
        background: ${palette.gray[3]};
        }
    `
  }


`;

const Button = props => <StyledButton {...props} />;
export default Button;