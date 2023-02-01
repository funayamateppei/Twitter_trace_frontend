import { useState, useEffect } from 'react';
import {css} from '@emotion/react';
import { Box } from '@/components/atoms';
import axios from '@/libs/axios';
import { HeaderAvator ,TweetItem } from '@/components/common';
import { AppPage } from '@/components/layout/AppPage';

export const Feed = () => {

  const [tweets, setTweets] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get('/tweet');
      console.log(res.data);
      setTweets(res.data);
    }
    catch (e) {
      console.error(e);
      alert(e.message);
    }
  }

    useEffect(() => {
      fetchData();
    }, [])
  
  const headerOption = {
    headerLeft: <HeaderAvator user={null} />,
    title: 'ホーム',
    titleStyle: {
      textAlign: 'center',
    },
  };
  
  return (
    <AppPage headerOption={headerOption}>
      <Box css={content}>
        {tweets.map(tweet => {
          console.log('hoge');
          // 記事書く
          // 親要素にkeyを渡さないといけない
          // keyが渡せてないでエラーを吐く
          return (
            <div key={tweet.id}>
              <TweetItem item={tweet} />
            </div>
          )
        })}
      </Box>
    </AppPage>
  );
};

const content = css`
  margin-top: 24px;
`;
