import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default ({
  position,
  autoClose,
  hideProgressBar,
  newestOnTop,
  closeOnClick,
  rtl,
  pauseOnVisibilityChange,
  draggable,
  pauseOnHover,
  toastType,
  toastMsg,
}) => {
  const properties = {
    position: position || 'top-left',
    autoClose: autoClose || 3000,
    hideProgressBar: hideProgressBar || true,
    closeOnClick: closeOnClick || true,
    draggable: draggable || false,
    pauseOnHover: pauseOnHover || true,
    progress: undefined,
    newestOnTop: newestOnTop || false,
    rtl: rtl || false,
    pauseOnVisibilityChange: pauseOnVisibilityChange || false,
  };

  switch (toastType) {
    case 'positive':
      return toast.success(toastMsg, properties);
    case 'info':
      return toast.info(toastMsg, properties);
    case 'warning':
      return toast.warning(toastMsg, properties);
    case 'negative':
      return toast.error(toastMsg, properties);
    default:
      return toast(toastMsg, properties);
  }
};
