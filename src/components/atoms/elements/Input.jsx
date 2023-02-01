import {css} from '@emotion/react';
import {Colors} from '@/assets/styles';

export const Input = props => <input css={input} {...props} />;

const input = css`
  padding: 6px 18px;
  font-size: 14px;
  width: 100%;
  border: none;
  &:focus {
    outline: none;
  }
  ::placeholder {
    color: ${Colors.Text.Seconday};
    font-size: 12px;
  }
`;
