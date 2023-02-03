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
  const [images, setImages] = useState([]);
  const [text, setText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { state } = useLocation();

  const navigate = useNavigate();

  // テキストが入力されたときに発火
  const handleTextChange = (e) => {
    setText(e.target.value);
    // console.log(text)
  }

  // 画像が選択されたときに発火
  const onFileChange = (e) => {
    if (!e.target.files?.length) return;

    if (e.target.files.length > 4) {
      alert('添付できる画像枚数は４枚までです');
      return;
    }

    setPreviewImages([]);
    setImages(e.target.files);

    for (const file of e.target.files) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setPreviewImages((value) => [...value, { name: file.name, uri: e.target.result }]);
      }
      reader.readAsDataURL(file);
    }
  }

  const iconClick = () => {
    const input = document.getElementById('fileInput');
    input.click();
  }
  
  // 投稿機能の関数
  const postTweet = async () => {
  if (isLoading) return;
  try {
    setIsLoading(true);

  const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
      transformRequest: formData => formData,
    };
    const params = new FormData();

    if (!!images?.length) {
      for (const image of images) params.append('images[]', image);
    }
    params.append('body', text);
    state?.commentTo !== undefined && params.append('comment_to', state.commentTo);

    await axios.post(`/tweet/create`, params, config);
    navigate('/');
  } catch (e) {
    console.error(e);
    alert('ツイートの投稿に失敗しました');
  } finally {
    setIsLoading(false);
  }
  };

  const headerOption = {
    headerLeft: <HeaderButton onClick={() => navigate(-1)}>キャンセル</HeaderButton>,
    headerRight: <HeaderButton isButton onClick={postTweet}>ツイートする</HeaderButton>
  }
  
  return (
    <AppPage headerOption={headerOption}>
      <Box css={container}>
        <Box row css={gap}>
          <Box css={avatorWrap}>
            <Avator size={40} image={null} />
          </Box>
          <Box css={inputwWrap}>
            <TextArea placeholder={'今どうしてる？'} onChange={handleTextChange} />
          </Box>
        </Box>

        <Box css={previewWrap}>{!!previewImages.length && <ImagePreview images={previewImages} />}</Box>
        <Box row css={inputFooter}>
          <ActionButton hitSlop={8} icon={<Icon.ImageIcon color={Colors.KeyColor.Primary} size={24} />} onClick={iconClick} />
          <ActionButton
            label="全員が返信できます"
            icon={<Icon.GlobalIcon color={Colors.KeyColor.Primary} size={24} />}
          />
          <input onChange={onFileChange} type="file" accept="image/png,image/jpg" id="fileInput" multiple hidden />
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