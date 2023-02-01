import {css} from '@emotion/react';
import {Colors} from '@/assets/styles';

export const TextArea = props => <textarea css={input} {...props} />;

const input = css`
  font-size: 14px;
  width: 100%;
  background-color: ${Colors.Border.White};
  resize: none;
  appearance: none;
  background: transparent;
  border: none;
  border-radius: 0;
  font: inherit;
  outline: none;
  &:focus {
    outline: none;
  }
  ::placeholder {
    color: ${Colors.Text.Seconday};
    font-size: 14px;
  }
`;
