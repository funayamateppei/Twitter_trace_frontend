import { useState, useEffect } from 'react';
import {css} from '@emotion/react';
import { Box } from '@/components/atoms';
import axios from '@/libs/axios';
import { HeaderAvator ,TweetItem, AddTweetButton } from '@/components/common';
import { AppPage } from '@/components/layout/AppPage';
import useInfinityScroll from '@/hooks/useInfinityScroll';

export const Feed = () => {

  const [tweets, setTweets] = useState([]);
  
  // 無限スクロール
  const LIMIT = 20;
  const [scrollRef, _, setPaged, isLoading, setIsLoading] = useInfinityScroll(async currentPage => {
    try {
      if (isLoading) return;

      setIsLoading(true);

      const params = {
        LIMIT,
        paged: currentPage,
      };
      const response = await axios.get('/tweet', {params});

      if (response.data.length < LIMIT) setPaged(0);

      const newItems = currentPage === 1 ? response.data : [...tweets, ...response.data];
      setTweets(newItems);
    } catch (e) {
      console.error(e);
      alert('ツイートを読み込めませんでした');
    } finally {
      setIsLoading(false);
    }
  });

  // const fetchData = async () => {
  //   try {
  //     const res = await axios.get('/tweet');
  //     console.log(res.data);
  //     setTweets(res.data);
  //   }
  //   catch (e) {
  //     console.error(e);
  //     alert(e.message);
  //   }
  // }

  //   useEffect(() => {
  //     fetchData();
  //   }, [])
  
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
        <div ref={scrollRef} />
      </Box>
      <AddTweetButton />
    </AppPage>
  );
};

const content = css`
  margin-top: 24px;
`;
