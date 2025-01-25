"use client";
import { useState } from "react";
import { certificateCriteria, CertificateOptions } from "@/components/services/services";

export default function DropdownBox() {
  const [selectedOption, setSelectedOption] = useState<CertificateOptions | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<Record<string, File | null>>({});
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    fromEmail: "",
    toEmail: "",
  });

  const options = Object.keys(certificateCriteria) as CertificateOptions[];

  const handleSelect = (option: CertificateOptions) => {
    setSelectedOption(option);
    setIsOpen(false); // Close dropdown after selection
  };

  const handleFileChange = (file: File, item: string) => {
    setUploadedFiles((prev) => ({
      ...prev,
      [item]: file,
    }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    console.log("Form Data:", formData);
    console.log("Uploaded Files:", uploadedFiles);
    alert("Form submitted successfully!");
    // Add API call here to handle form submission
  };

  return (
    <div className="p-6 space-y-6">
      <div className="relative inline-block text-left">
        {/* Dropdown */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex w-full justify-between rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          {selectedOption || "Select an option"}
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {isOpen && (
          <div className="absolute z-10 mt-2 w-full rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              {options.map((option) => (
                <button
                  key={option}
                  onClick={() => handleSelect(option)}
                  className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Render criteria based on selection */}
      {selectedOption && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold">{certificateCriteria[selectedOption][0]}</h3>
          <ul className="list-disc ml-6 mt-2">
            {certificateCriteria[selectedOption].slice(1).map((item, index) => (
              <li key={index} className="flex items-center gap-4 text-gray-700">
                {item}
                <input
                  type="file"
                  onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                      handleFileChange(e.target.files[0], item);
                    }
                  }}
                  className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                />
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Input fields for Full Name, Phone, and Email */}
      <div className="space-y-4">
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleInputChange}
          placeholder="Full Name"
          className="block w-full rounded-lg border border-gray-300 px-4 py-2 text-sm shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
        <input
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleInputChange}
          placeholder="Phone Number"
          className="block w-full rounded-lg border border-gray-300 px-4 py-2 text-sm shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
        <input
          type="email"
          name="from email"
          value={formData.fromEmail}
          onChange={handleInputChange}
          placeholder="Email Address"
          className="block w-full rounded-lg border border-gray-300 px-4 py-2 text-sm shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
        <input
          type="email"
          name="to email"
          value={formData.toEmail}
          onChange={handleInputChange}
          placeholder="Email Address"
          className="block w-full rounded-lg border border-gray-300 px-4 py-2 text-sm shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Submit Button */}
      <button
        type="button"
        onClick={handleSubmit}
        className="w-full rounded-lg bg-blue-600 px-4 py-2 text-white text-sm font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Submit
      </button>
    </div>
  );
}
