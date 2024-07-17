"use client";

import { useRef, useState } from "react";
import SignaturePreview from "./SignaturePreview";
import UserInput from "./UserInput";
import SignaturePreviewTwo from "./SignaturePreviewTwo";

export default function SignatureComponents() {
  const [signautreData, setSignatureData] = useState({
    name: "",
    title: "",
    email: "",
    address: "",
    contactNo: "",
    webLink: "",
    fbLink: "",
    instaLink: "",
    linkedinlink: "",
    twiterLink: "",
    orgName: "",
    imgUrl: "",
    nameColor: "#000000",
    iconColor: "#000000",
    titleColor: "#000000",
    linkColor: "#000000",
  });

  const [mode, setMode] = useState(true);

  const signaturePreviewRef2 = useRef();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSignatureData({
      ...signautreData,
      [name]: value,
    });
  };

  const handleColorChange = (name, color) => {
    setSignatureData({
      ...signautreData,
      [name]: color.hex,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setSignatureData({
        ...signautreData,
        imgUrl: reader.result,
      });
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleCopyToClipboard = (ref) => {
    const signatureElement = ref.current;
    if (signatureElement) {
      const range = document.createRange();
      range.selectNodeContents(signatureElement);
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
      try {
        document.execCommand("copy");
        alert("Signature copied to clipboard!");
      } catch (err) {
        console.error("Failed to copy: ", err);
      }
      selection.removeAllRanges();
    } else {
      console.error("Element not found:", ref);
    }
  };

  const HandleInputMode = () => {
    setMode(true);
  };
  const HandlePreviewMode = () => {
    setMode(false);
  };

  return (
    <>
      <div className="flex items-center justify-center gap-3 mb-4">
        <button
          onClick={HandleInputMode}
          className="font-semibold px-3 py-1 border rounded border-orange-500 bg-zinc-200 text-orange-500"
          style={mode ? {background: "#000000"} : {background: "#e4e4e7"}}
        >
          Inputs
        </button>
        <button
          onClick={HandlePreviewMode}
          style={!mode ? {background: "#000000"} : {background: "#e4e4e7"}}
          className="font-semibold px-3 py-1 border rounded border-orange-500 bg-zinc-200 text-orange-500"
        >
          Preview
        </button>
      </div>

      <div className="flex w-[100%] flex-col md:flex-row md:items-start items-center justify-center gap-9">
        {mode ? (
          <UserInput
            signautreData={signautreData}
            onInputChange={handleInputChange}
            onImageChange={handleImageChange}
            onColorChange={handleColorChange}
          />
        ) : (
          <div className="border-2 md:w-[610px] w-[95%]">
            <div ref={signaturePreviewRef2}>
              <SignaturePreviewTwo signautreData={signautreData} />
            </div>
            <button
              onClick={() => handleCopyToClipboard(signaturePreviewRef2)}
              className="mt-3 px-3 py-2 bg-orange-500 rounded font-semibold text-white"
            >
              Copy To Clipboard
            </button>
          </div>
        )}
      </div>
    </>
  );
}
