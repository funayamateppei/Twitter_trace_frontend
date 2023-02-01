import api from '@/libs/axios';

export const tweetAction = (tweetId, type) => api.post(`/tweet/${tweetId}/${type}`);
