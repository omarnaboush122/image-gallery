import { useState } from "react";

const ImageSearch = ({ searchText }) => {
  const [inputText, setInputText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    searchText(inputText);
    setInputText("");
  };
  return (
    <div className="max-w-sm rounded overflow-hidden my-10 mx-auto">
      <form onSubmit={handleSubmit} className="w-full max-w-sm">
        <div className="flex items-center border-b border-b-2 border-teal-500 py-2">
          <input
            type="text"
            className="appearence-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-light focus:outline-none"
            placeholder="Search Image Term"
            onChange={(e) => setInputText((e.target.value))}
            value={inputText}
          />
          <button
            className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 text-sm border-4 text-white py-1 px-2 rounded"
            type="submit"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default ImageSearch;
