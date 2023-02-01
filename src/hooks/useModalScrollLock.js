import {useEffect} from 'react';

const useModalScrollLock = (isModalOpen, modalId) => {
  const isScrollable = element => element.clientHeight < element.scrollHeight;

  const scrollLock = event => {
    const canScrollElement = event.target?.closest(`#${modalId}`);

    if (!canScrollElement) {
      event.preventDefault();
      return;
    }

    !!canScrollElement && isScrollable(canScrollElement) ? event.stopPropagation() : event.preventDefault();
  };

  const scrollLockFix = event => {
    const element = event.target;

    if (!element) return;

    if (element.scrollTop + element.clientHeight === element.scrollHeight) {
      element.scrollTop = element.scrollTop - 1;
    }

    if (element.scrollTop === 0) {
      element.scrollTop = 1;
    }
  };

  useEffect(() => {
    const canScrollModalElement = document.getElementById(modalId);

    if (!canScrollModalElement || !isModalOpen) return;

    document.body.style.overflowY = 'hidden';
    canScrollModalElement.addEventListener('scroll', scrollLockFix);
    document.addEventListener('touchmove', scrollLock, {passive: false});

    return () => {
      document.body.style.overflowY = 'auto';
      canScrollModalElement.removeEventListener('scroll', scrollLockFix);
      document.removeEventListener('touchmove', scrollLock);
    };
  }, [isModalOpen]);
};

export default useModalScrollLock;
