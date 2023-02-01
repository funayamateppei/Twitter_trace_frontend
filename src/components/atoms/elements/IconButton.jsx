import {css} from '@emotion/react';
import {Pressable} from './Pressable';
import Box from './Box';

export const IconButton = ({icon, size, color, onClick, ...props}) => (
  <Box
    justifyContent="center"
    alignItems="center"
    css={[container, {width: size, height: size, backgroundColor: color}]}
    {...props}>
    <Pressable css={button} onClick={onClick}>
      {icon}
    </Pressable>
  </Box>
);

const container = css`
  border-radius: 50%;
  overflow: hidden;
`;

const button = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
