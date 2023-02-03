import {css} from '@emotion/react';
import {Box, Text, Pressable} from '@/components/atoms';
import {Colors} from '@/assets/styles';

export const ActionButton = ({icon, label, onClick, hitSlop}) => {
  return (
    <Pressable css={button} onClick={onClick} hitSlop={hitSlop}>
      <Box>{icon}</Box>
      {label && (
        <Text css={text} color={Colors.KeyColor.Primary}>{ label }</Text>
      )}
    </Pressable>
  );
};

const button = css`
  display: flex;
  align-items: center;
`;

const text = css`
  margin-left: 4px;
`;