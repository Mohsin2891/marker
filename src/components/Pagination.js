import React, { useState } from "react";

const Pagination = ({ itemsPerPage, totalItems, setPage, currentPage }) => {
  const pageNumbers = [];
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  // Limit the number of page links shown for navigation
  const maxPageNumbersToShow = 5;
  let startPage = currentPage - Math.floor(maxPageNumbersToShow / 2);
  startPage = Math.max(startPage, 1);
  let endPage = startPage + maxPageNumbersToShow - 1;
  endPage = Math.min(endPage, totalPages);

  if (totalPages <= maxPageNumbersToShow) {
    startPage = 1;
    endPage = totalPages;
  }

  return (
    <nav>
      <ul className="flex list-reset border border-grey-light rounded w-auto font-sans">
        <li className={`page-item ${currentPage === 1 ? "hidden" : ""}`}>
          <a
            onClick={() => setPage(currentPage - 1)}
            className="block py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-200"
          >
            Previous
          </a>
        </li>
        {pageNumbers.slice(startPage - 1, endPage).map((number) => (
          <li
            key={number}
            className={`page-item ${
              currentPage === number
                ? "bg-blue-500 text-white"
                : "text-blue-500"
            }`}
          >
            <a
              onClick={() => setPage(number)}
              className="block py-2 px-3 leading-tight bg-white border border-gray-300 hover:bg-blue-500 hover:text-white"
            >
              {number}
            </a>
          </li>
        ))}
        <li
          className={`page-item ${currentPage === totalPages ? "hidden" : ""}`}
        >
          <a
            onClick={() => setPage(currentPage + 1)}
            className="block py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-200"
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
