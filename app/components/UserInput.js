import { SketchPicker } from "react-color";

export default function UserInput({
  signautreData,
  onInputChange,
  onImageChange,
  onColorChange,
}) {
  return (
    <div className="border-2 p-3 md:w-[610px] w-[95%] bg-zinc-100 shadow">
      <div className="py-2 bg-orange-500 mb-5 rounded">
      <h1 className="text-[20px] md:text-[25px] text-center text-white font-bold">
        Input You Information Here
      </h1>
      </div>
      <form>
        <div className="flex items-center justify-center gap-4 md:flex-nowrap flex-wrap">
          <div className="mb-3">
            <label>Name</label> <br></br>
            <input
              type="text"
              name="name"
              value={signautreData.name}
              onChange={onInputChange}
              className="border-2 bg-zinc-200 border-zinc-300 rounded-sm w-[280px] text-zinc-900 focus:outline-none py-1 focus:border-zinc-400 peer transition-all p-1"
            />
          </div>
          <div className="mb-3">
            <label>Title</label> <br></br>
            <input
              type="text"
              name="title"
              value={signautreData.title}
              onChange={onInputChange}
              className="border-2 bg-zinc-200 border-zinc-300 rounded-sm w-[280px] text-zinc-900 focus:outline-none py-1 focus:border-zinc-400 peer transition-all p-1"
            />
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 md:flex-nowrap flex-wrap">
          <div className="mb-3">
            <label>Email</label> <br></br>
            <input
              type="email"
              name="email"
              value={signautreData.email}
              onChange={onInputChange}
              className="border-2 bg-zinc-200 border-zinc-300 rounded-sm w-[280px] text-zinc-900 focus:outline-none py-1 focus:border-zinc-400 peer transition-all p-1"
            />
          </div>
          <div className="mb-3">
            <label>Address</label> <br></br>
            <input
              type="text"
              name="address"
              value={signautreData.address}
              onChange={onInputChange}
              className="border-2 bg-zinc-200 border-zinc-300 rounded-sm w-[280px] text-zinc-900 focus:outline-none py-1 focus:border-zinc-400 peer transition-all p-1"
            />
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 md:flex-nowrap flex-wrap">
          <div className="mb-3">
            <label>Contact NO.</label> <br></br>
            <input
              type="text"
              name="contactNo"
              value={signautreData.contactNo}
              onChange={onInputChange}
              className="border-2 bg-zinc-200 border-zinc-300 rounded-sm w-[280px] text-zinc-900 focus:outline-none py-1 focus:border-zinc-400 peer transition-all p-1"
            />
          </div>
          <div className="mb-3">
            <label>Website Link</label> <br></br>
            <input
              type="text"
              name="webLink"
              value={signautreData.webLink}
              onChange={onInputChange}
              className="border-2 bg-zinc-200 border-zinc-300 rounded-sm w-[280px] text-zinc-900 focus:outline-none py-1 focus:border-zinc-400 peer transition-all p-1"
            />
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 md:flex-nowrap flex-wrap">
        <div className="mb-3">
            <label>Company Name</label> <br></br>
            <input
              type="text"
              name="orgName"
              value={signautreData.orgName}
              onChange={onInputChange}
              className="border-2 bg-zinc-200 border-zinc-300 rounded-sm w-[280px] text-zinc-900 focus:outline-none py-1 focus:border-zinc-400 peer transition-all p-1"
            />
          </div>
          <div className="mb-3">
            <label>Image</label> <br></br>
            <input
              type="file"
              onChange={onImageChange}
              className="border-2 bg-zinc-200 border-zinc-300 rounded-sm w-[280px] text-zinc-900 focus:outline-none py-1 focus:border-zinc-400 peer transition-all p-1"
            />
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 md:flex-nowrap flex-wrap">
          <div className="mb-3">
            <label>Facebook Link</label> <br></br>
            <input
              type="text"
              name="fbLink"
              value={signautreData.fbLink}
              onChange={onInputChange}
              className="border-2 bg-zinc-200 border-zinc-300 rounded-sm w-[280px] text-zinc-900 focus:outline-none py-1 focus:border-zinc-400 peer transition-all p-1"
            />
          </div>
          <div className="mb-3">
            <label>Instagram Link</label> <br></br>
            <input
              type="text"
              name="instaLink"
              value={signautreData.instaLink}
              onChange={onInputChange}
              className="border-2 bg-zinc-200 border-zinc-300 rounded-sm w-[280px] text-zinc-900 focus:outline-none py-1 focus:border-zinc-400 peer transition-all p-1"
            />
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 md:flex-nowrap flex-wrap">
          <div className="mb-3">
            <label>LinkedIn Link</label> <br></br>
            <input
              type="text"
              name="linkedinlink"
              value={signautreData.linkedinlink}
              onChange={onInputChange}
              className="border-2 bg-zinc-200 border-zinc-300 rounded-sm w-[280px] text-zinc-900 focus:outline-none py-1 focus:border-zinc-400 peer transition-all p-1"
            />
          </div>
          <div className="mb-3">
            <label>Twiter Link</label> <br></br>
            <input
              type="text"
              name="twiterLink"
              value={signautreData.value}
              onChange={onInputChange}
              className="border-2 bg-zinc-200 border-zinc-300 rounded-sm w-[280px] text-zinc-900 focus:outline-none py-1 focus:border-zinc-400 peer transition-all p-1"
            />
          </div>
        </div>

        <div>
          <input type="reset" />
        </div>

        <div className="mt-5 border-t-2 pt-2 border-orange-500">
          <div className="flex flex-wrap items-start justify-center gap-10 mt-10">
            <div>
              <p
                className="mb-4 font-semibold border-b-2 border-orange-300"
                style={{ color: signautreData.nameColor }}
              >
                {" "}
                Set Name Color{" "}
              </p>
              <SketchPicker
                color={signautreData.nameColor}
                onChangeComplete={(color) => onColorChange("nameColor", color)}
              />
            </div>
            <div>
              <p
                className="mb-4 font-semibold border-b-2 border-orange-300"
                style={{ color: signautreData.iconColor }}
              >
                {" "}
                Set Icon Color{" "}
              </p>
              <SketchPicker
                color={signautreData.iconColor}
                onChangeComplete={(color) => onColorChange("iconColor", color)}
              />
            </div>

            <div>
              <p
                className="mb-4 font-semibold border-b-2 border-orange-300"
                style={{ color: signautreData.titleColor }}
              >
                {" "}
                Set Title Color{" "}
              </p>
              <SketchPicker
                color={signautreData.titleColor}
                onChangeComplete={(color) => onColorChange("titleColor", color)}
              />
            </div>
            <div>
              <p
                className="mb-4 font-semibold border-b-2 border-orange-300"
                style={{ color: signautreData.linkColor }}
              >
                {" "}
                Set Link Color
              </p>
              <SketchPicker
                color={signautreData.linkColor}
                onChangeComplete={(color) => onColorChange("linkColor", color)}
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
