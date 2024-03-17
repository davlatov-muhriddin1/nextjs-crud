import React, { Dispatch, SetStateAction } from "react";

interface Props {
  state: string;
  setState: Dispatch<SetStateAction<string>>;
  placeholder: string;
  error?: boolean;
}

function Input({ state, setState, placeholder, error }: Props) {
  return (
    <input
      type="text"
      value={state}
      onChange={(e) => setState(e.target.value)}
      placeholder={placeholder}
      className={`w-full border-2 border-slate-600 p-1 text-lg rounded-md outline-none mb-2 block ${
        error && "border-red-700 placeholder:text-red-700"
      }`}
    />
  );
}

export default Input;
