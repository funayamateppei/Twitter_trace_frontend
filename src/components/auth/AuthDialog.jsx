import {css} from '@emotion/react';
import {useNavigate} from 'react-router-dom';
import {Text, Box, Button} from '@/components/atoms';
import useModalScrollLock from '@/hooks/useModalScrollLock';

export const AuthDialog = ({isShow, onBackgroundClick}) => {
  const navigate = useNavigate();
  useModalScrollLock(isShow, 'dialog');

  const gotoRegister = () => {
    navigate('/register');
  };

  const gotoLogin = () => {
    navigate('/login');
  };

  return (
    <Box onClick={onBackgroundClick} css={[dialog, isShow ? show : hidden]} id="dialog">
      <Box css={dialogContent}>
        <Text fontSize={16} fontWeight={700}>
          利用するには会員登録
        </Text>
        <Text fontSize={16} fontWeight={700}>
          またはログインが必要です
        </Text>
        <Box css={buttonWrap}>
          <Button color="primary" onClick={gotoRegister}>
            会員登録
          </Button>
          <Button color="secondary" onClick={gotoLogin}>
            ログイン
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

const dialog = css`
  display: none;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: -1;
  padding: 0;
  z-index: 1001;
`;

const dialogContent = css`
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  width: calc(100% - 48px);
  max-width: 600px;
  padding: 24px;
  margin-top: 200px;
  border-radius: 4px;
  background-color: #fff;
  z-index: 1001;
`;

const buttonWrap = css`
  margin-top: 32px;
  gap: 24px;
`;

const show = css`
  display: flex;
`;

const hidden = css`
  display: none;
`;
