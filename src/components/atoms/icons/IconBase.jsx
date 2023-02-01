import {css} from '@emotion/react';

export const IconBase = ({icons, name, color, size, ...props}) => {
  const icon = css`
    display: block;
    width: ${`${size}px`};
    height: ${`${size}px`};
    background: ${color};
  `;

  return <span css={[icon, {mask: `url(${icons[name]}) no-repeat center / contain`}]} {...props} />;
};
