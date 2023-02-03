import {useState} from 'react';
import {css} from '@emotion/react';
import {useNavigate, useLocation, Navigate} from 'react-router-dom';
import axios from '@/libs/axios';
import {Box, TextArea, Avator, Icon} from '@/components/atoms';
import {HeaderButton} from '@/components/common';
import {AppPage} from '@/components/layout/AppPage';
import {Colors} from '@/assets/styles';
import { getUser } from '@/utils/auth';
import { ImagePreview, ActionButton } from '../components';

export const PostTweet = () => {
  const [previewImages, setPreviewImages] = useState([]);
  const navigate = useNavigate();
  const headerOption = {
    headerLeft: <HeaderButton onClick={() => navigate(-1)}>キャンセル</HeaderButton>,
    headerRight: <HeaderButton isButton>ツイートする</HeaderButton>
  }
  return (
    <AppPage headerOption={headerOption}>
      <Box css={container}>
        <Box row css={gap}>
          <Box css={avatorWrap}>
            <Avator size={40} image={null} />
          </Box>
          <Box css={inputwWrap}>
            <TextArea placeholder={'今どうしてる？'} />
          </Box>
        </Box>

        <Box css={previewWrap}>{!!previewImages.length && <ImagePreview images={previewImages} />}</Box>
        <Box row css={inputFooter}>
          <ActionButton hitSlop={8} icon={<Icon.ImageIcon color={Colors.KeyColor.Primary} size={24} />} />
          <ActionButton
            label="全員が返信できます"
            icon={<Icon.GlobalIcon color={Colors.KeyColor.Primary} size={24} />}
          />
          <input type="file" accept="image/png,image/jpg" id="fileInput" multiple hidden />
        </Box>
      </Box>
    </AppPage>
  );
};

const container = css`
  padding: 24px 16px;
`;

const gap = css`
  gap: 12px;
`;

const avatorWrap = css`
  width: 40px;
`;

const inputwWrap = css`
  width: calc(100% - 40px);
  padding: 40px 0 16px;
`;

const previewWrap = css`
  width: 100%;
  min-height: 140px;
  border-bottom: 1px solid ${Colors.Border.Primary};
`;

const inputFooter = css`
  gap: 16px;
  padding: 16px 0;
`;