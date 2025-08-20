import { useReducer } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdOutlineClear } from "react-icons/md";
import { CiPaperplane } from "react-icons/ci";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const initialState = {
  name: "",
  email: "",
  message: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_FIELD":
      return { ...state, [action.field]: action.value };
    case "CLEAR":
      return initialState;
    default:
      return state;
  }
}

const MessageModal = ({ openMessageModal, setOpenMessageModal }) => {
  const [message, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: "SET_FIELD", field: name, value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      icon: "info",
      title: "Sending Message!",
      text: "Please Wait...",
      allowOutsideClick: false,
      showConfirmButton: false,
    });
    try {
      const templateParams = {
        from_name: message.name,
        from_email: message.email,
        message: message.message,
      };

      emailjs
        .send(
          import.meta.env.VITE_SERVICE_ID,
          import.meta.env.VITE_TEMPLATE_ID,
          templateParams,
          import.meta.env.VITE_PUBLIC_KEY
        )
        .then(
          (result) => {
            setOpenMessageModal(false); // Optional: close modal after sending
            console.log("Email sent:", result.text);
            dispatch({ type: "CLEAR" });
            Swal.close();
          },
          (error) => {
            console.error("Email error:", error.text);
          }
        );
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <AnimatePresence>
      {openMessageModal && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-white/10 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="p-6 rounded-lg shadow-xl bg-[var(--bg)] w-full max-w-md mx-4"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{
              duration: 0.5,
              type: "spring",
              bounce: 0.4,
            }}
          >
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold mb-4 text-[var(--textColor)]">
                Send Me A Message
              </h2>
              <MdOutlineClear
                onClick={() => {
                  setOpenMessageModal(false);
                  dispatch({ type: "CLEAR" });
                }}
                className="cursor-pointer text-[var(--textColor)] text-2xl"
              />
            </div>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col mb-3 space-y-2">
                <label htmlFor="name">
                  Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={message.name}
                  onChange={handleChange}
                  placeholder="Enter Your Name"
                  className="px-4 py-2 border-2 border-[var(--border)] rounded-md"
                />
              </div>
              <div className="flex flex-col mb-3 space-y-2">
                <label htmlFor="email">
                  Email <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  name="email"
                  value={message.email}
                  onChange={handleChange}
                  placeholder="Enter Your Email"
                  className="px-4 py-2 border-2 border-[var(--border)] rounded-md"
                />
              </div>
              <div className="flex flex-col mb-3 space-y-2">
                <label htmlFor="message">
                  Message <span className="text-red-600">*</span>
                </label>
                <textarea
                  name="message"
                  value={message.message}
                  onChange={handleChange}
                  placeholder="Enter Your Message"
                  className="px-4 py-2 border-2 border-[var(--border)] rounded-md"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[var(--textColor)] text-[var(--bg)] px-6 py-2 rounded-full flex items-center justify-center space-x-3 cursor-pointer"
              >
                <span className="text-xl font-bold">Send Message</span>
                <CiPaperplane className="text-2xl font-bold" />
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MessageModal;
