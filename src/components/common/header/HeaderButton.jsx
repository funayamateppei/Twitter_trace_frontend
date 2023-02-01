import {css} from '@emotion/react';
import {Pressable} from '../../atoms/elements/Pressable';
import Box from '../../atoms/elements/Box';
import {Text} from '../../atoms/elements/Text';
import {Colors} from '@/assets/styles';

export const HeaderButton = ({children, isButton, color, ...props}) => {
  const buttonColor = color === 'black' ? Colors.Button.Seconday : Colors.Button.Primary;
  return (
    <Pressable {...props} hitSlop={4}>
      {isButton ? (
        <Box css={[button, {backgroundColor: buttonColor}]}>
          <Text color={Colors.Text.White} fontWeight={700} fontSize={12}>
            {children}
          </Text>
        </Box>
      ) : (
        children
      )}
    </Pressable>
  );
};

const button = css`
  padding: 8px 20px;
  border-radius: 999px;
`;
