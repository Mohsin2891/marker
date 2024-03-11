import { toast } from "react-toastify";
// Success Notification
export const successToast = (message) => {
  toast.success(message, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,

    // Custom styling
    style: { backgroundColor: "green", color: "white" },
  });
};

// Error Notification
export const errorToast = (message) => {
  toast.error(message, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    // Custom styling
    style: { backgroundColor: "red", color: "white" },
  });
};

// General Notification
export const notifyToast = (message) => {
  toast.info(message, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    // Custom styling
    style: { backgroundColor: "blue", color: "white" },
  });
};
