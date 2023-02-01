import {useState} from 'react';
import {css} from '@emotion/react';
import {Text, Box, Icon} from '@/components/atoms';
import {Colors} from '@/assets/styles';

const activeColor = {
  like: Colors.Icon.Like,
  comment: Colors.Icon.Comment,
  retweet: Colors.Icon.Retweet,
};

export const TweetStatusIcon = ({icon, isActive: _isActive, count: _count, onClick}) => {
  const [isActive, setIsActive] = useState(_isActive);
  const [count, setCount] = useState(_count);

  const statusColor = !isActive ? Colors.Icon.Primary : activeColor[icon];
  const statusIcon = {
    like: <Icon.LikeIcon color={statusColor} />,
    comment: <Icon.CommentIcon color={statusColor} />,
    retweet: <Icon.RetweetIcon color={statusColor} />,
  };

  const handleActionError = type => {
    const action = type === 'like' ? 'いいね' : type === 'retweet' ? 'リツイート' : 'コメント';
    alert(`${action}の投稿に失敗しました`);
  };

  const handleStatusIconClick = async e => {
    try {
      onClick(icon);

      setCount(isActive ? count - 1 : count + 1);
      setIsActive(!isActive);
      e.stopPropagation();
    } catch (e) {
      console.error(e);
      handleActionError(icon);
    }
  };

  return (
    <Box row css={container} alignItems="center" onClick={handleStatusIconClick}>
      {statusIcon[icon]}
      <Text color={statusColor} fontSize={12}>
        {count - 10000 >= 0 ? `${(count / 10000).toFixed(1)}万` : count}
      </Text>
    </Box>
  );
};

const container = css`
  gap: 8px;
`;
