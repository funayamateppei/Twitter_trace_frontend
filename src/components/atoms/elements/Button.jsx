import {css} from '@emotion/react';
import {Pressable} from './Pressable';
import Box from './Box';
import {Text} from './Text';
import {Colors} from '@/assets/styles';

export const Button = ({fontSize = 12, px = 40, py = 10, outline, color = 'primary', children, ...props}) => {
  const buttonColor = color === 'primary' ? Colors.Button.Primary : Colors.Button.Seconday;
  const buttonStyle = {
    backgroundColor: !outline ? buttonColor : Colors.Button.Outline,
    border: !outline ? 'none' : `1px solid ${Colors.Border.Secondary}`,
  };

  return (
    <Pressable
      css={[container, {padding: ` ${py}px ${px}px`}, buttonStyle, props.disabled && disabledOpacity]}
      {...props}>
      <Box justifyContent="center" alignItems="center">
        <Text
          css={baseText}
          color={!outline ? Colors.Text.White : Colors.Text.Primary}
          fontSize={fontSize}
          fontWeight={700}
          textAlign="center">
          {children}
        </Text>
      </Box>
    </Pressable>
  );
};

const container = css`
  border-radius: 999px;
  overflow: hidden;
`;

const baseText = css`
  line-height: 1.2;
`;

const disabledOpacity = css`
  opacity: 0.5;
`;
