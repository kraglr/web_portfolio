import React from "react";

const MessageModal = ({ setOpenModal }) => {
  return (
    // Backdrop
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/10 backdrop-blur-sm">
      {/* Modal Body */}
      <div className="p-6 rounded-lg shadow-xl bg-[var(--bg)] w-full max-w-md mx-4 animate-[bounceIn_0.6s_ease-out]">
        <h2 className="text-2xl font-bold mb-4 text-[var(--textColor)]">
          Let's Connect!
        </h2>
        <p className="mb-6 text-[var(--textColorSoft)]">
          This is where your contact form or message component would go.
        </p>
        <button
          onClick={() => setOpenModal(false)}
          className="px-4 py-2 font-semibold text-white bg-red-600 rounded-md hover:bg-red-700"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default MessageModal;
