import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const successNote = msg =>
  toast.success(msg, {
    position: 'bottom-right',
    autoClose: 2200,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined
  });

export const infoNote = msg =>
  toast.info(msg, {
    position: 'bottom-right',
    autoClose: 2200,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined
  });
