// withLayout.js
import React from "react";
import Layout from "./Layout"; // Import the Layout component

const withLayout = (WrappedComponent) => {
  // Return a functional component
  return (props) => {
    return (
      <Layout>
        <WrappedComponent {...props} />
      </Layout>
    );
  };
};

export default withLayout;
