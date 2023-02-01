export const Image = ({decoding = 'async', isLazy = false, ...props}) => (
  <img decoding={decoding} loading={isLazy ? 'lazy' : 'eager'} {...props} />
);
