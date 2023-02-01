import {css} from '@emotion/react';
import Box from './Box';

export const Pressable = ({children, hitSlop, onClick, disabled, ...props}) => {
  const content = css`
    ::after {
      width: calc(100% + ${hitSlop}px);
      height: calc(100% + ${hitSlop}px);
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
      z-index: 1;
      pointer-events: auto;
      content: '';
      background-color: transparent;
    }
  `;

  const handleClick = () => {
    if (disabled) return;
    onClick();
  };

  return (
    <Box css={container}>
      <div css={content} onClick={handleClick} {...props}>
        {children}
      </div>
    </Box>
  );
};

const container = css`
  position: relative;
`;
