"use client";

import React, { FC } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  placeholder: string;
}

const Input: FC<InputProps> = (props) => {
  const { name, placeholder, label } = props;

  return (
    <div className="flex flex-col mb-6">
      <div className="mb-2">
        <label htmlFor={name}>
          {label}
        </label>
        <span className="ml-2 text-red-600">*</span>
      </div>

      <input
        type="text"
        id={name}
        className="block w-full rounded-lg border-2  bg-transparent p-4 placeholder:text-[#979797]"
        placeholder={placeholder}
      />
    </div>
  );
};

export { Input };
