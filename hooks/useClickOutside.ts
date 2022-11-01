import { useEffect } from 'react';

export const useClickOutside = (ref: any, open: boolean, onClose: VoidFunction) => {

  useEffect(() => {
    if (!open) return;

    function handleClick(ev: any) {
      if (ref.current && !ref.current.contains(ev.target)) {
        onClose();
      }
    }

    function handleKey(ev: any) {
      if (ev.code === 'Escape') {
        onClose()
      }
    }

    window.addEventListener("click", handleClick, false);
    window.addEventListener("touchstart", handleClick, false);
    window.addEventListener("keyup", handleKey, false);

    return () => {
      window.removeEventListener("click", handleClick, false);
      window.removeEventListener("touchstart", handleClick, false);
      window.removeEventListener("keyup", handleKey, false);
    }

  }, [open, onClose, ref]);
}
