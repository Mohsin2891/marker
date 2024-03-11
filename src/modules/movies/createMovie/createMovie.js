import React from "react";
import { Dialog } from "@headlessui/react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { addMovie } from "../_redux/moviesService";
import { errorToast, successToast } from "utils/ToastNotifications";

const CreateMovieDialogue = ({ isOpen, setIsOpen }) => {
  const initialValues = {
    name: "",
    description: "",
    language: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    description: Yup.string().required("Required"),
    language: Yup.string().required("Required"),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    const res = await addMovie(values);

    res?.data?.success
      ? successToast("Movie Added Successfull!")
      : errorToast(res?.data?.status_message);

    setIsOpen(false); // Close the dialog box after submitting
  };

  return (
    <>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen((pre) => !pre)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <Dialog.Panel className="fixed inset-0 flex items-center justify-center p-4">
          {/* Adjusted to cover 40% of the screen width and improved UI elements */}
          <div
            className="bg-white rounded-lg shadow-xl mx-auto p-8 space-y-6"
            style={{ width: "40%" }}
          >
            <Dialog.Title className="text-xl font-semibold text-gray-900">
              Create a New Movie List
            </Dialog.Title>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form className="space-y-6">
                  <div className="flex flex-col">
                    <label
                      htmlFor="name"
                      className="mb-2 font-medium text-gray-700"
                    >
                      Name
                    </label>
                    <Field
                      name="name"
                      type="text"
                      className="form-input mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label
                      htmlFor="description"
                      className="mb-2 font-medium text-gray-700"
                    >
                      Description
                    </label>
                    <Field
                      name="description"
                      as="textarea"
                      rows="4"
                      className="form-textarea mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label
                      htmlFor="language"
                      className="mb-2 font-medium text-gray-700"
                    >
                      Language
                    </label>
                    <Field
                      name="language"
                      as="select"
                      className="form-select mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                    >
                      <option value="">Select a language</option>
                      <option value="en">English</option>
                      {/* Add more language options as needed */}
                    </Field>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md focus:outline-none focus:shadow-outline-blue disabled:bg-blue-300"
                  >
                    {isSubmitting ? "Creating..." : "Create"}
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </Dialog.Panel>
      </Dialog>
    </>
  );
};

export default CreateMovieDialogue;
