import { useState } from "react";

export default function ConverterForm() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [text, setText] = useState("");
  const [formattedLink, setFormattedLink] = useState("");
  const [isCopied, setIsCopied] = useState(false);
  const [error, setError] = useState("");

  const handleConvert = () => {
    // Validation for required fields
    if (!phoneNumber.trim() || !text.trim()) {
      setError("Both phone number and message are required.");
      return;
    }

    setError(""); // Clear error if inputs are valid
    const encodedText = encodeURIComponent(text);
    const link = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedText}`;
    setFormattedLink(link);
    setIsCopied(false);
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setPhoneNumber(value);
    }
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(formattedLink);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div className="w-full sm:max-w-lg mx-auto p-6 sm:p-8 bg-white rounded-xl shadow-lg">
      {error && (
        <div className="mb-4 p-3 text-red-700 bg-red-100 rounded-lg">
          {error}
        </div>
      )}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700">
          Phone Number
        </label>
        <input
          type="text"
          className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Phone number with country code. example: 628xxxxxxxx"
          value={phoneNumber}
          onChange={handlePhoneChange}
          maxLength={20}
        />
      </div>
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700">
          Message
        </label>
        <textarea
          className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Type your message here"
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={4}
          maxLength={150}
        />
      </div>
      <button
        className="w-full py-3 bg-[#128C7E] text-white font-medium rounded-lg hover:bg-green-800 transition duration-300"
        onClick={handleConvert}
      >
        Generate Link
      </button>
      {formattedLink && (
        <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200 shadow-sm">
          <p className="text-gray-700 font-medium mb-2">Formatted Link:</p>
          <div className="flex items-center justify-between">
            <a
              href={formattedLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline break-all"
            >
              {formattedLink}
            </a>
            <button
              onClick={handleCopyLink}
              className="ml-4 px-4 py-2 bg-green-500 text-white text-sm font-medium rounded-lg hover:bg-green-600 transition duration-300"
            >
              {isCopied ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
