import React from "react";
import { Dialog } from "@headlessui/react";
import { useFormik } from "formik";
import { IoIosSearch } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { getPerson } from "../_redux/moviesActions";
import { useDispatch, useSelector } from "react-redux";

const PersonFilters = ({ isOpen, setIsOpen }) => {
  const { actionLoading } = useSelector((state) => state.movies);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      title: "",
      genre: "",
      isAdult: false,
      language: "en-US",
    },
    onSubmit: (values) => {
      dispatch(
        getPerson(values?.title, () => {
          navigate("/person");
          setIsOpen(false);
        })
      );
    },
  });

  return (
    <>
      <div className=" flex justify-end items-center">
        <IoIosSearch
          onClick={() => setIsOpen((prev) => !prev)}
          className=" w-10 h-10 bg-white cursor-pointer "
          title="Search"
        />
      </div>

      <Dialog
        open={isOpen}
        onClose={() => setIsOpen((prev) => !prev)}
        className="relative z-10"
      >
        {/* The overlay */}
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

        {/* The modal container */}
        <div className="fixed inset-0 overflow-y-auto ">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
              <Dialog.Title className="text-lg font-medium leading-6 text-gray-900">
                Search your Actor Info
              </Dialog.Title>
              <form onSubmit={formik.handleSubmit} className="mt-4">
                <div className="mb-2">
                  <label
                    htmlFor="title"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    id="title"
                    onChange={formik.handleChange}
                    value={formik.values.title}
                    className="mt-1 block w-full p-5 border-black rounded-md  shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 sm:text-sm"
                  />
                </div>

                <div className="mt-4">
                  <button
                    type="submit"
                    className="inline-flex w-full justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    {actionLoading ? "Loading" : "Search"}
                  </button>
                </div>
              </form>
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default PersonFilters;
