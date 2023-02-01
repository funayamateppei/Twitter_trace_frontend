/* eslint-disable react/display-name */
import {forwardRef} from 'react';
import {css} from '@emotion/react';

const BoxWrap = forwardRef(function Box(props, ref) {
  const {
    row,
    wrap,
    justifyContent = 'normal',
    alignItems = 'normal',
    display = 'flex',
    children,
    ...other
  } = props;
  const flexDirection = row ? 'row' : 'column';
  const flexWrap = wrap ? 'wrap' : 'nowrap';
  const flexStyle = display === 'flex' ? {flexDirection, flexWrap, justifyContent, alignItems} : null;

  return (
    <div ref={ref} css={[container, {display, ...flexStyle}]} {...other}>
      {children}
    </div>
  );
});

export default BoxWrap;

const container = css`
  display: flex;
`;
