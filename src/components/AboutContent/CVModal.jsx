import React, { useState } from "react";
// import cv from "../../assets/files/cv.pdf";
import { MdOutlineClear } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import { Document, Page, pdfjs } from "react-pdf";
import { useDevice } from "../../contexts/DeviceContext";
// Set up the PDF.js worker source. This is crucial for react-pdf to work.
pdfjs.GlobalWorkerOptions.workerSrc = `pdfjs/pdf.worker.mjs`;

const CVModal = ({ openCVModal, setOpenCVModal }) => {
  const [numPages, setNumPages] = useState(null);
  const { isMobileOrTablet } = useDevice();
  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const renderPages = () => {
    const pages = [];
    for (let i = 1; i <= numPages; i++) {
      pages.push(
        // The key is to style the page element itself.
        // Tailwind's `shadow-md`, `mb-4`, and `border` classes
        // will give each page a distinct, printable look.
        // `max-w-full` ensures it fits the container on smaller screens.
        <Page
          key={`page_${i}`}
          pageNumber={i}
          renderTextLayer={false}
          renderAnnotationLayer={false}
          className="max-w-full mx-auto my-4 border border-gray-300 shadow-md" // Added mx-auto for centering, my-4 for a small gap, border/shadow for visual separation
          width={600}
        />
      );
    }
    return pages;
  };

  return (
    <AnimatePresence>
      {openCVModal && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-white/10 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className={`px-4 py-2 rounded-lg shadow-xl bg-[var(--bg)] w-full  mx-4 h-[98%] flex flex-col ${
              isMobileOrTablet && "lg:max-w-2xl md:max-w-2xl max-w-xl"
            }`}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{
              duration: 0.5,
              type: "spring",
              bounce: 0.4,
            }}
          >
            <div className="flex items-center justify-end mb-3">
              <MdOutlineClear
                onClick={() => {
                  setOpenCVModal(false);
                }}
                className="cursor-pointer text-[var(--textColor)] text-2xl"
              />
            </div>

            {/* This is the container that gives you the scrolling iframe-like behavior. */}
            <div className="flex-1 overflow-auto">
              {isMobileOrTablet ? (
                <Document
                  file={"files/CV.pdf"}
                  onLoadSuccess={onDocumentLoadSuccess}
                  loading={
                    <p className="text-center text-gray-500">Loading CV...</p>
                  }
                  error={
                    <p className="text-center text-red-500">
                      Failed to load CV.
                    </p>
                  }
                  onLoadError={(error) => console.error(error)}
                  className=""
                >
                  {numPages ? renderPages() : null}
                </Document>
              ) : (
                <iframe src={"files/CV.pdf"} className="w-full h-full"></iframe>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CVModal;
