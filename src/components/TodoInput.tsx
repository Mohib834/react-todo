import { useState } from "react";

interface Props {
  onSubmit: (title: string) => void;
}

export default function TodoInput(props: Props) {
  const [title, setTitle] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleSubmit = () => {
    props.onSubmit(title);
    setTitle("");
  };

  return (
    <div className="flex items-center justify-center">
      <div className="flex-1 border rounded-lg border-gray-400 focus-within:border-gray-300">
        <input
          className="flex-grow h-7 ml-4 bg-transparent focus:outline-none font-medium"
          type="text"
          placeholder="Add a new task"
          onChange={handleChange}
          value={title}
        />
      </div>

      <button
        type="submit"
        onClick={handleSubmit}
        className="ml-3 transition-all duration-300 min-w-[61px] min-h-[30px] max-h-[30px] text-sm bg-[#6366F1] hover:bg-[#484aab] text-blue-dark font-semibold py-1 px-2 border border-transparent rounded flex justify-center items-center disabled:bg-gray-500 disabled:border-gray-600"
      >
        Add
      </button>
    </div>
  );
}
