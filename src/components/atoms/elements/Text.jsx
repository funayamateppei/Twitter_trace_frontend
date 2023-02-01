import {css} from '@emotion/react';
import {Colors} from '@/assets/styles';

export const Text = ({
  fontSize = 14,
  color = Colors.Text.Primary,
  fontWeight = 400,
  textAlign,
  children,
  ...props
}) => (
  <span css={[text, {fontSize, color, fontWeight, textAlign}]} {...props}>
    {children}
  </span>
);

const text = css`
  font-family: 'Roboto';
  line-height: 130%;
  letter-spacing: 0.03em;
`;
