import {css} from '@emotion/react';
import {Colors} from '@/assets/styles';

export const TweetImages = ({images, imageHeight = 200}) => {
  const clacPosition = (length, index) => {
    switch (length) {
      case 1:
        return fillGrid;
      case 2:
        return index === 0 ? halfGridLeft : halfGridRight;
      case 3:
        return index === 0 ? halfGridLeft : null;
      default:
        return null;
    }
  };

  return (
    <div css={[container, {height: imageHeight}]}>
      {images.map((data, index, {length}) => (
        <img
          key={data.id}
          src={data.image}
          css={[
            image,
            {maxHeight: length >= 3 ? (imageHeight - 4) / 2 : imageHeight},
            clacPosition(length, index),
          ]}
        />
      ))}
    </div>
  );
};

const container = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 4px;
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
  outline: 1px solid ${Colors.Border.Primary};
`;

const image = css`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const fillGrid = css`
  grid-column: 1 / 3;
  grid-row: 1 / 3;
`;

const halfGridLeft = css`
  grid-column: 1 / 2;
  grid-row: 1 / 3;
`;

const halfGridRight = css`
  grid-column: 2 / 3;
  grid-row: 1 / 3;
`;
