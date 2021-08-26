import styled, { css } from 'styled-components';
import { shade } from 'polished';
import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
  dark: boolean;
  border: boolean;
}
export const Container = styled.div<ContainerProps>`
  width: 100%;
  max-width: 800px;
  label {
    color: ${props =>
      props.theme.colors.form[props.dark ? 'dark' : 'light'].input.text};
  }

  label + div {
    margin-top: 8px !important;
  }

  & + div {
    margin-top: 8px;
  }

  > div {
    background: ${props =>
      props.theme.colors.form[props.dark ? 'dark' : 'light'].input.bg};
    border-radius: 10px;
    line-height: 21px;
    padding: 16px;
    width: 100%;
    /* min-width: 400px; */

    display: flex;
    align-items: center;

    border: 0.2px solid
      ${props =>
        props.dark
          ? props.theme.colors.form.dark.input.bg
          : props.border
          ? props.theme.colors.form.light.input.border
          : props.theme.colors.form.light.input.bg};

    color: ${props =>
      props.theme.colors.form[props.dark ? 'dark' : 'light'].input.placeholder};
    ${props =>
      props.isErrored &&
      css`
        border-color: #c53030;
      `}

    ${props =>
      props.isFocused &&
      css`
        border-color: ${props.theme.colors.primary};
        color: ${props.theme.colors.primary};
      `}


  ${props =>
      props.isFilled &&
      css`
        color: ${props.theme.colors.primary};
      `}

    >svg {
      margin-right: 16px;
    }
    > div {
      width: 100%;
      label {
        color: ${props =>
          props.theme.colors.form[props.dark ? 'dark' : 'light'].input.text};
      }
    }
    input {
      background: transparent;

      border: 0;

      font-size: 16px;

      color: ${props =>
        props.theme.colors.form[props.dark ? 'dark' : 'light'].input.text};
      flex: 1;
      &:focus {
        outline: 0;
      }
      &::placeholder {
        color: ${props =>
          props.theme.colors.form[props.dark ? 'dark' : 'light'].input
            .placeholder};
      }
      &:disabled {
        color: ${props =>
          props.theme.colors.form[props.dark ? 'dark' : 'light'].input
            .placeholder};
      }
      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:focus {
        -webkit-text-fill-color: #f4ede8;
        -webkit-box-shadow: 0 0 0px 1000px
          ${props =>
            props.theme.colors.form[props.dark ? 'dark' : 'light'].input.bg}
          inset;

        transition: background-color 5000s ease-in-out 0s;
      }
    }
    &.disabled {
      background: ${props =>
        shade(
          0.1,
          props.theme.colors.form[props.dark ? 'dark' : 'light'].input.bg,
        )};
    }
  }
`;
export const Error = styled(Tooltip)`
  &.err {
    width: 30px;
  }
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }
  span {
    background: #c53030;
    color: #fff;
    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
