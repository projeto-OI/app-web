import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: ${props => props.theme.colors.button};
  height: 56px;
  border-radius: 20px;
  border: 0;
  line-height: 21px;
  padding: 0 16px;
  color: ${props => props.theme.colors.text[0]};
  width: 100%;
  max-width: 400px;

  font-weight: bold;
  font-size: 18px;

  transition: background-color 0.2s;

  text-transform: uppercase;

  &:hover {
    cursor: pointer;
    background: ${props => shade(0.6, props.theme.colors.button)};
  }
  &:disabled,
  &[disabled] {
    opacity: 0.5;
  }
`;
