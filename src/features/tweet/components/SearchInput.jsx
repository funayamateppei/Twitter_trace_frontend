import {css} from '@emotion/react';
import {Box, Input, NaviIcon} from '@/components/atoms';
import {Colors} from '@/assets/styles';

export const SearchInput = () => {
  return (
    <Box row css={container} alignItems="center">
      <NaviIcon.SearchIcon size={18} />
      <Input css={input} type="text" placeholder="キーワード検索" />
    </Box>
  );
};

const container = css`
  padding-left: 16px;
  height: 34px;
  position: relative;
  border-radius: 999px;
  overflow: hidden;
  background-color: ${Colors.Background.Seconday};
`;

const input = css`
  background-color: ${Colors.Background.Seconday};
`;
