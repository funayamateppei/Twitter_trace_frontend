import emotionReset from 'emotion-reset';
import {Global, css} from '@emotion/react';
import Router from './router/router';

function App() {
  return (
    <>
      <Global styles={globalReset} />
      <div className="App" css={container}>
        <Router />
      </div>
    </>
  );
}

export default App;

const globalReset = css`
  ${emotionReset}
  *, *::after, *::before {
    box-sizing: border-box;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }
  a {
    color: #000000;
    text-decoration: none;
  }
`;

const container = css`
  position: relative;
  @media (min-width: 600px) {
    max-width: 800px;
    margin: 0 auto;
  }
`;
