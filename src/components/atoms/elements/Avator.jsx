import {css} from '@emotion/react';
import {Colors} from '@/assets/styles';
import {Image} from './Image';
import {DefaultAvator} from '@/assets/defaultAvator';

export const Avator = ({image, size = 90}) => (
  <div css={[avator, {width: size, height: size}]}>
    <Image src={image ?? DefaultAvator} css={avatorImage} />
  </div>
);

const avator = css`
  border: 1px solid ${Colors.Border.White};
  border-radius: 50%;
  overflow: hidden;
`;

const avatorImage = css`
  width: 100%;
  height: 100%;
`;
