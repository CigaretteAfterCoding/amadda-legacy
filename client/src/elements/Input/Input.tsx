/* eslint-disable indent */
/* eslint-disable react/jsx-max-props-per-line */
import React, { forwardRef } from 'react';
import colors from 'Styles/color-variables';
import styled, { css } from 'styled-components';
import WarningIcon from '@material-ui/icons/Warning';
interface InputProps {
  type: 'email' | 'password';
  label?: string | null;
  error?: boolean;
  errorMessage?: string | null;
  placeholder: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { label = null, errorMessage = null, error = false, ...rests }: InputProps,
    ref,
  ) => {
    return (
      <Container>
        {label && <Label>{label}</Label>}
        <InputBoxWrapper>
          <InputBox ref={ref} error={error} {...rests} />
        </InputBoxWrapper>
        {errorMessage && (
          <Error>
            <WarningIcon fontSize="small" />
            {errorMessage}
          </Error>
        )}
      </Container>
    );
  },
);

Input.displayName = 'Input';

export default Input;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  color: ${colors.black};
  font-weight: bold;
  font-size: 15px;
  line-height: 15px;
  margin-bottom: 13px;
  margin-top: 13px;
`;

const Error = styled.div`
  margin-bottom: 5px;
  color: ${colors.inputRed};
  font-size: 12px;
  display: flex;
  align-items: center;
  margin-top: 3px;
  font-weight: bold;
  animation: fadein 0.4s;
  -moz-animation: fadein 0.4s;
  /* Firefox */
  -webkit-animation: fadein 0.4s;
  /* Safari and Chrome */
  -o-animation: fadein 0.4s;
  /* Opera */

  @keyframes fadein {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  @-moz-keyframes fadein {
    /* Firefox */
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  @-webkit-keyframes fadein {
    /* Safari and Chrome */
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  @-o-keyframes fadein {
    /* Opera */
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
`;

const InputBoxWrapper = styled.div``;

const InputBox = styled.input<{ error: boolean }>`
  background: ${colors.white};
  border: 1px solid ${colors.gray[500]};
  border-radius: 3px;
  width: 323px;
  height: 46px;
  padding: 0px;
  font-size: 16px;
  padding: 0 10px;
  &::placeholder {
    font-size: 13px;
    color: ${colors.gray[800]};
  }

  &:focus {
    box-shadow: 0 0 2px 2px ${colors.inputBlue};
    outline: none;
  }

  ${({ error }) =>
    error &&
    css`
      box-shadow: 0 0 2px 2px ${colors.inputRed};
      outline: none;

      &:focus {
        box-shadow: 0 0 2px 2px ${colors.inputRed};
        outline: none;
      }

      animation: fadein 0.4s;
  -moz-animation: fadein 0.4s;
  /* Firefox */
  -webkit-animation: fadein 0.4s;
  /* Safari and Chrome */
  -o-animation: fadein 0.4s;
  /* Opera */

  @keyframes fadein {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  @-moz-keyframes fadein {
    /* Firefox */
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  @-webkit-keyframes fadein {
    /* Safari and Chrome */
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  @-o-keyframes fadein {
    /* Opera */
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }

    `}
`;
