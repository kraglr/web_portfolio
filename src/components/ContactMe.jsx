import { useReducer } from "react";

import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { CiPaperplane } from "react-icons/ci";

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

const ContactMe = () => {
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
            console.log("Email sent:", result.text);
            dispatch({ type: "CLEAR" });
            Swal.close();
            Swal.fire({
              icon: "success",
              title: "Message Successfully Sent!",
            });
          },
          (error) => {
            console.error("Email error:", error.text);
          }
        );
    } catch (error) {
      console.error("Error sending email:", error);
      Swal.fire({
        icon: "error",
        title: "Message Not Sent!",
        text: "An Error Occurred while Sending the Message!",
      });
    }
  };
  return (
    <div className="w-full p-3 text-center rounded-t-none rounded-b-md bg-[var(--bg)] flex flex-col space-y-3">
      <h1 className="text-3xl text-center">Contact Me</h1>
      <p>
        Have a project in mind or just want to say hello? Feel free to reach
        out!
      </p>
      <div className="grid w-full grid-cols-1 px-3 lg:grid-cols-2 ">
        <div className="flex flex-col items-center col-span-1 lg:items-start ">
          <div className="w-[75%]">
            <div className="grid grid-cols-4 my-3">
              <div className="justify-center col-span-1 my-auto align-middle">
                <CallIcon />
              </div>
              <div className="items-start justify-start col-span-3 text-left align-middle">
                <h3 style={{ fontWeight: "bolder", fontSize: "larger" }}>
                  Call Me
                </h3>
                <span>+639606023995</span>
              </div>
            </div>
            <div className="grid grid-cols-4 my-3">
              <div className="justify-center col-span-1 my-auto align-middle">
                <EmailIcon />
              </div>
              <div className="items-start justify-start col-span-3 text-left align-middle">
                <h3 style={{ fontWeight: "bolder", fontSize: "larger" }}>
                  Email Me
                </h3>
                <span>aguilarkier25@gmail.com</span>
              </div>
            </div>
            <div className="justify-center col-span-1 py-10 mx-auto align-middle">
              <div className="flex justify-center social-links">
                <a href="https://www.linkedin.com/in/aguilar-kier-luna">
                  <LinkedInIcon />
                </a>
                <a href="https://www.facebook.com/aguilarkier">
                  <FacebookIcon />
                </a>
                <a href="https://www.instagram.com/kraglr25/">
                  <InstagramIcon />
                </a>
                <a href="https://github.com/kraglr">
                  <GitHubIcon />
                </a>
              </div>
              {/* <div class="credits">
        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
      </div> */}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center col-span-1 text-left lg:items-start lg:justify-start ">
          <form onSubmit={handleSubmit} className="w-[75%] mx-auto">
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
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
