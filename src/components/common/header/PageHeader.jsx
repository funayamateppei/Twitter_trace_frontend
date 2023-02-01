import {css} from '@emotion/react';
import {Colors} from '@/assets/styles';
import {HEADER_HEIGHT} from '@/config';
import { Box, Text } from '../../atoms';

export const PageHeader = ({
  headerLeft,
  headerRight,
  title,
  text,
  titleStyle,
  textStyle,
  showBorder = true,
}) => (
  <Box row css={[container, showBorder && border]} alignItems="center">
    <Box css={button} justifyContent="center">
      {!!headerLeft && headerLeft}
    </Box>
    <Box css={main} justifyContent="center">
      {title && (
        <Text fontSize={16} fontWeight={700} css={titleStyle}>
          {title}
        </Text>
      )}
      {text && (
        <Text fontSize={12} color={Colors.Text.Seconday} css={textStyle}>
          {text}
        </Text>
      )}
    </Box>
    <Box css={button} justifyContent="center">
      {!!headerRight && headerRight}
    </Box>
  </Box>
);

const container = css`
  padding: 10px 16px 16px;
  gap: 24px;
  width: 100%;
  height: ${HEADER_HEIGHT}px;
  position: sticky;
  top: 0;
  background-color: ${Colors.KeyColor.Wihte};
  z-index: 999;
`;

const main = css`
  flex: 1;
`;

const button = css`
  min-width: 30px;
  min-height: 30px;
`;

const border = css`
  border-bottom: 1px solid ${Colors.Border.Primary};
`;