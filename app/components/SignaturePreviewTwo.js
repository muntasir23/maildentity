import React from "react";
import mahfuz from "../../public/mahafuz.png";
import Link from "next/link";

export default function SignaturePreviewTwo({ signautreData }) {
  if (!signautreData.name) {
    return <h1 className="font-semibold">Insert Value of anyThing</h1>;
  }

  return (
    <div className="md:w-[600px] w-[100%] border-2 bg-white p-3">
      <div className="w-[120px] h-[120px] overflow-hidden rounded-full border mb-4 flex items-start">
        <img src={signautreData.imgUrl} alt="" className="rounded-full w-[100%]" />
      </div>
      <div
        className="w-[100%] flex justify-between py-4 gap-4 border-t-2 border-b-2"
        style={{ borderColor: signautreData.nameColor }}
      >
        <div>
          <h1
            className="text-[12px] md:text-[15px] mb-1 font-semibold"
            style={{ color: signautreData.nameColor }}
          >
            {signautreData.name}
          </h1>
          <h1
            className="text-[12px] md:text-[15px] mb-1"
            style={{ color: signautreData.titleColor }}
          >
            {signautreData.title}
          </h1>
          <h1 className="text-[12px] md:text-[15px]">
            {signautreData.orgName}
          </h1>
        </div>
        <div>
          <h1 className="text-[12px] md:text-[15px] mb-1">
            {signautreData.email}
          </h1>
          <h1 className="text-[12px] md:text-[15px] mb-1">
            {signautreData.contactNo}
          </h1>
          <Link href="bylc.org" className="text-[12px] md:text-[15px]">
            {signautreData.webLink}
          </Link>
        </div>
      </div>
      <div className="flex gap-2 mt-2">
        {signautreData.fbLink && (
          <a href={signautreData.fbLink}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill={signautreData.linkColor}
              width="24px"
              height="24px"
            >
              <path d="M22 12C22 5.373 16.627 0 10 0S-2 5.373-2 12c0 5.992 4.388 10.951 10.125 11.854V14.5h-3.047v-2.88h3.047V9.88c0-3.018 1.79-4.705 4.53-4.705 1.31 0 2.687.235 2.687.235v2.958H14.54c-1.48 0-1.936.921-1.936 1.866v2.262h3.26l-.52 2.88h-2.74v9.354C17.612 22.951 22 17.992 22 12z" />
            </svg>
          </a>
        )}
        {signautreData.twiterLink && (
          <a href={signautreData.twiterLink}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill={signautreData.linkColor}
              width="24px"
              height="24px"
            >
              <path d="M24 4.557a9.872 9.872 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724 9.864 9.864 0 0 1-3.127 1.195 4.92 4.92 0 0 0-8.384 4.482 13.957 13.957 0 0 1-10.141-5.148 4.916 4.916 0 0 0 1.523 6.573 4.903 4.903 0 0 1-2.231-.616v.06a4.922 4.922 0 0 0 3.946 4.827 4.903 4.903 0 0 1-2.224.084 4.925 4.925 0 0 0 4.6 3.417 9.867 9.867 0 0 1-6.102 2.104c-.397 0-.79-.023-1.176-.069a13.944 13.944 0 0 0 7.557 2.213c9.054 0 14.01-7.496 14.01-13.986 0-.213-.004-.426-.014-.637A9.935 9.935 0 0 0 24 4.557z" />
            </svg>
          </a>
        )}
        {signautreData.instaLink && (
          <a href={signautreData.instaLink}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill={signautreData.linkColor}
              width="24px"
              height="24px"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.259.057 2.152.25 2.657.533.519.29.935.687 1.225 1.207.283.506.476 1.4.533 2.657.058 1.265.07 1.645.07 4.849 0 3.204-.012 3.584-.07 4.849-.057 1.259-.25 2.152-.533 2.657-.29.519-.687.935-1.207 1.225-.506.283-1.4.476-2.657.533-1.265.058-1.645.07-4.849.07-3.204 0-3.584-.012-4.849-.07-1.259-.057-2.152-.25-2.657-.533-.519-.29-.935-.687-1.207-1.207-.283-.506-.476-1.4-.533-2.657-.058-1.265-.07-1.645-.07-4.849 0-3.204.012-3.584.07-4.849.057-1.259.25-2.152.533-2.657.29-.519.687-.935 1.207-1.225.506-.283 1.4-.476 2.657-.533 1.265-.058 1.645-.07 4.849-.07zm0 5.838c-3.41 0-6.162 2.752-6.162 6.162s2.752 6.162 6.162 6.162 6.162-2.752 6.162-6.162-2.752-6.162-6.162-6.162zm0 10.152c-2.196 0-3.99-1.794-3.99-3.99s1.794-3.99 3.99-3.99 3.99 1.794 3.99 3.99-1.794 3.99-3.99 3.99zm6.406-11.846c-.796 0-1.442-.646-1.442-1.442s.646-1.442 1.442-1.442 1.442.646 1.442 1.442-.646 1.442-1.442 1.442z" />
            </svg>
          </a>
        )}
        {signautreData.linkedinlink && (
          <a href={signautreData.linkedinlink}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill={signautreData.linkColor}
              width="24px"
              height="24px"
            >
              <path d="M19.617 3H4.383C3.621 3 3 3.621 3 4.383v15.234C3 20.379 3.621 21 4.383 21h15.234C20.379 21 21 20.379 21 19.617V4.383C21 3.621 20.379 3 19.617 3zM7.034 17.548H4.817v-9.596h2.217v9.596zM5.928 6.643c-.708 0-1.277-.577-1.277-1.286 0-.709.569-1.285 1.277-1.285s1.277.576 1.277 1.285c0 .709-.569 1.286-1.277 1.286zm12.052 10.905h-2.213v-4.511c0-1.073-.02-2.455-1.494-2.455-1.496 0-1.725 1.168-1.725 2.376v4.59H10.32v-9.596h2.125v1.308h.03c.296-.556 1.02-1.141 2.101-1.141 2.245 0 2.661 1.478 2.661 3.396v5.033z" />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
}
