import React from "react";

const PaginationComponent = ({ pageNum, setPageNum }) => {
  return (
    <div>
      <nav aria-label="Page navigation example">
        <ul className="inline-flex -space-x-px text-sm">
          <li>
            <button
              onClick={() => {
                if (pageNum > 1) {
                  setPageNum(pageNum - 1);
                }
              }}
              className={` ${
                pageNum > 1
                  ? " text-gray-500 bg-white cursor-pointer hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  : "disabled  text-gray-500 bg-gray-200  cursor-none"
              }  flex items-center justify-center px-3 h-8 ms-0 leading-tight bg-white border border-e-0 border-gray-300 rounded-s-lg `}
            >
              Previous
            </button>
          </li>
          <li>
            <button
              onClick={() => setPageNum(1)}
              className={`flex items-center justify-center px-3 h-8 ${
                pageNum === 1 ? "  bg-blue-50 text-blue-600" : ""
              } border border-gray-300 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white`}
            >
              1
            </button>
          </li>
          <li>
            <button
              onClick={() => setPageNum(2)}
              className={`flex items-center justify-center px-3 h-8 ${
                pageNum === 2 ? "  bg-blue-50 text-blue-600" : ""
              } border border-gray-300 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white`}
            >
              2
            </button>
          </li>
          <li>
            <button
              onClick={() => setPageNum(2)}
              aria-current="page"
              className={`flex items-center justify-center px-3 h-8 ${
                pageNum === 3 ? "  bg-blue-50 text-blue-600" : ""
              } border border-gray-300 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white`}
            >
              3
            </button>
          </li>
          <li>
            <button
              onClick={() => setPageNum(2)}
              className={`flex items-center justify-center px-3 h-8 ${
                pageNum === 4 ? "  bg-blue-50 text-blue-600" : ""
              } border border-gray-300 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white`}
            >
              4
            </button>
          </li>
          <li>
            <button
              onClick={() => setPageNum(2)}
              className={`flex items-center justify-center px-3 h-8 ${
                pageNum === 5 ? "  bg-blue-50 text-blue-600" : ""
              } border border-gray-300 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white`}
            >
              5
            </button>
          </li>
          <li>
            <button
              onClick={() => setPageNum(pageNum + 1)}
              className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default PaginationComponent;
