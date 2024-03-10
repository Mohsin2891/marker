import React, { useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { Navbar } from "../Navbar";
import { PageTitle } from "components/pageTitleInfo/pageTitle/PageTitle";
import { MoviesListing } from "modules/movies/MoviesListing";
export default function Dashboard() {
  const [getMovieBy,setGetMovieBy]=useState("popular")

  return (
    <>
      <ToastContainer />
      <div className="bg-gray-200 pb-10">
       
        <Navbar getMovieBy= {getMovieBy} setGetMovieBy={setGetMovieBy} />
        {/* <PageTitle/> */}
     
        <div className="container px-6 mx-auto">
          <div className="rounded shadow relative bg-white z-10 -mt-8 mb-8 w-full   ">
            <MoviesListing getMovieBy= {getMovieBy} />
          </div>
        </div>
      </div>
    </>
  );
}
