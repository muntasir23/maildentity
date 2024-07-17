import Image from "next/image";
import React from "react";
import { FaHome } from "react-icons/fa";

import email from "../../public/email.svg";

const SignaturePreview = ({ signautreData }) => {
  if (!signautreData.name) {
    return <h1 className="font-semibold">Insert Value of anyThing</h1>;
  }

  return (
    <div>
      <h2>Signature Preview</h2>
      <div>
        <div>
          <strong>{signautreData.name}</strong>
        </div>
        <div style={{ color: signautreData.titleColor }}>
          {signautreData.title}
        </div>
        <div style={{ color: signautreData.emailColor }}>
          Email:{" "}
          <a
            href={`mailto:${signautreData.email}} style={{ color: signautreData.emailColor }`}
          >
            {signautreData.email}
          </a>
        </div>
        <div style={{ color: signautreData.phoneColor }}>
          Phone: {signautreData.phone}
        </div>
        <div>
          <p>
            <img src={email} />
          </p>

          {signautreData.imgUrl && (
            <div>
              <img alt="" src={signautreData.imgUrl} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignaturePreview;
