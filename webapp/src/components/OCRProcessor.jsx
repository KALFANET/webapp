import React, { useState } from "react";
import PropTypes from "prop-types";
import Tesseract from "tesseract.js";
import "../styles/OCRProcessor.css"; // נניח שיש קובץ עיצוב בשם זה

const OCRProcessor = ({ file, onProcessingComplete }) => {
  const [text, setText] = useState("");
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleProcessOCR = () => {
    if (!file) {
      alert("Please upload a file to process.");
      return;
    }

    setLoading(true);
    Tesseract.recognize(file, "heb+eng", {
      logger: (info) => {
        if (info.status === "recognizing text") {
          setProgress(Math.round(info.progress * 100));
        }
      },
    })
      .then(({ data: { text } }) => {
        setText(text);
        onProcessingComplete(text);
      })
      .catch((err) => {
        console.error("Error processing OCR:", err);
        alert("Failed to process the file. Please try again.");
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="ocr-processor">
      <h3>OCR Processor</h3>
      {loading && <p className="progress">Processing... {progress}%</p>}
      <button onClick={handleProcessOCR} disabled={loading} className="btn-primary">
        Start OCR Processing
      </button>
      {text && (
        <div className="text-output">
          <h4>Processed Text:</h4>
          <textarea value={text} readOnly rows={10} className="text-area" />
        </div>
      )}
    </div>
  );
};

// PropTypes validation
OCRProcessor.propTypes = {
  file: PropTypes.instanceOf(File),
  onProcessingComplete: PropTypes.func.isRequired,
};

export default OCRProcessor;