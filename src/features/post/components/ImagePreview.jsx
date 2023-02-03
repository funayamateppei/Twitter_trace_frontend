import {css} from '@emotion/react';
import {Image, Box} from '@/components/atoms';

export const ImagePreview = ({ images }) => {
  console.log(images);
  return (
    <Box row css={container} alignItems="center">
      {images.map((image, index) => (
        <Box key={index} css={imageWrap}>
          <Image src={image.uri} css={content} />
        </Box>
      ))}
    </Box>
  );
};

const container = css`
  gap: 24px;
  overflow-x: scroll;
`;

const imageWrap = css`
  height: 100px;
  position: relative;
`;

const content = css`
  height: 100%;
  border-radius: 8px;
`;