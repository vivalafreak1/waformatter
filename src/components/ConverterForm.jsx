import { useState } from "react";

export default function ConverterForm() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [text, setText] = useState("");
  const [formattedLink, setFormattedLink] = useState("");

  const handleConvert = () => {
    const encodedText = encodeURIComponent(text);
    const link = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedText}`;
    setFormattedLink(link);
  };

  return (
    <div className="p-6 bg-gray-100 rounded-md shadow-md">
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Phone Number
        </label>
        <input
          type="text"
          className="w-full mt-1 p-2 border border-gray-300 rounded-md"
          placeholder="Enter phone number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Message
        </label>
        <textarea
          className="w-full mt-1 p-2 border border-gray-300 rounded-md"
          placeholder="Enter your message"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <button
        className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
        onClick={handleConvert}
      >
        Convert
      </button>
      {formattedLink && (
        <div className="mt-4 p-2 bg-green-100 text-green-700 rounded-md">
          <p>Formatted Link:</p>
          <a
            href={formattedLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            {formattedLink}
          </a>
        </div>
      )}
    </div>
  );
}
