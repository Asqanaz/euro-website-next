import React from "react";

export const Input = ({
  type,
  placeholder,
  extraStyles,
  register,
  name,
  validationSchema,
  errors,
  value,
  postError,
  defaultValue,
  onChange,
  endIcon
}) => {
  return (
    <div className="flex flex-col">
      <label className="flex flex-row relative">
        <input
          onChange={onChange}
          value={value}
          type={type}
          placeholder={placeholder}
          className={`w-full py-4 px-4 text-primary lg:text-base text-sm outline-0 border bg-input ${extraStyles} ${
            errors && errors[name]?.type === "required"
              ? "border-red-500"
              : "border-transparent"
          }`}
          defaultValue={name !== "password" ? defaultValue : null}
          {...(register && register(name, validationSchema))}
        />
        {endIcon}
      </label>
      <p className="text-red-500 mt-2 ml-2">
        {postError &&
          postError.data?.error.find((err) => err.param === name)?.msg}
        {errors[name]?.message}
      </p>
    </div>
  );
};
