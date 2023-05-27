import React, { useState } from "react";
import { forwardRef } from "react";
import { BsPlus } from "react-icons/bs";
import { fileToImg } from "../../utils/fileToImg";
import Image from "next/image";

const FileInput = forwardRef(({ img, formKey, register }, ref) => {
  const [imgSrc, setImgSrc] = useState(img);

  return (
    <div>
      <label className="bg-input w-fit h-[60px] flex items-center justify-end px-4">
        <input
          type="file"
          ref={ref}
          {...register(formKey, {
            onChange: (e) =>
              fileToImg(e.target.files[0]).then((r) => setImgSrc(r)),
          })}
          className="hidden"
          accept="image/*"
        />
        <span>Add File</span>
        <BsPlus />
      </label>
      {imgSrc && (
        <div className="mt-10">
          <Image
            src={imgSrc}
            alt="post image"
            className="aspect-square object-cover"
            width = "150"
            height = "150"
          />
        </div>
      )}
      <p className="mt-2 text-sm">Up to 5mb</p>
    </div>
  );
});

FileInput.displayName = "File Input"

export default FileInput