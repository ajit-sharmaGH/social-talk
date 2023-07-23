import {toast} from "react-toastify"; 

export const success = (message) =>toast.success(message);
export const warning = (message) =>toast.warn(message);
export const remove = (message) =>toast.error(message);