import { css } from '@emotion/react';
import { useNavigate } from 'react-router-dom';
import {IconButton, Icon} from '@/components/atoms';
import {Colors} from '@/assets/styles';

export const AddTweetButton = () => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate('/post/tweet');
  }

  return (
    <IconButton
      css={button}
      onClick={onClick}
      size={58}
      color={Colors.KeyColor.Primary}
      icon={<Icon.PlusIcon size={24} color="#FFFFFF" />}
    />
  );
};

const button = css`
  position: fixed;
  right: 16px;
  bottom: 40px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.18);
  z-index: 999;
  @media (min-width: 420px) {
    right: calc(50% - (800px / 2 - 16px));
  }
`;
