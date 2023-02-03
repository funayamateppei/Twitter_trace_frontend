import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom';
import { Feed, Thread } from '@/features/tweet/pages';
import { Register, Login, AuthRouteGuard } from '@/features/auth/pages';
import { PostTweet } from '@/features/post/pages';

const createRoutes = element => createBrowserRouter(createRoutesFromElements(element));

const routes = createRoutes(
  <Route path="/" errorElement={<div>error</div>}>
    <Route index element={<Feed />} />
    <Route element={<AuthRouteGuard />}>
      <Route path='tweet/:tweetId' element={<Thread />} />
      <Route path='post/tweet' element={<PostTweet />} />
    </Route>
    <Route path='register' element={<Register />} />
    <Route path='login' element={<Login />} />
  </Route>,
);

const Router = () => <RouterProvider router={routes} />;

export default Router;
