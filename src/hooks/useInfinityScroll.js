import {useCallback, useEffect, useLayoutEffect, useState, useRef} from 'react';

const useInfinityScroll = fetch => {
  const ref = useRef(null);

  const [paged, setPaged] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const [intersecting, setIntersecting] = useState(false);

  const onFetch = useCallback(fetch, [fetch]);

  const onEndReached = () => {
    if (!paged) return;

    const currentPage = paged + 1;

    setPaged(currentPage);
    onFetch(currentPage);
  };

  useLayoutEffect(() => {
    if (!ref?.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
    });

    observer.observe(ref.current);

    return () => {
      observer.unobserve(ref.current);
    };
  }, []);

  useEffect(() => {
    if (intersecting && paged !== 1) onEndReached();
  }, [intersecting]);

  useEffect(() => {
    onFetch(paged);
    setPaged(paged + 1);
  }, []);

  return [ref, paged, setPaged, isLoading, setIsLoading];
};

export default useInfinityScroll;
