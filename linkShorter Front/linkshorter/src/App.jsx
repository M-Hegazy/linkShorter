import { useState } from "react";
import React from "react";
import Create from "./components/create_slug";
import Update from "./components/update_slug";
import Get from "./components/get_slug";
import Navbar from "./components/navbar";
const axios = require("axios");

const App = () => {
  const [comp, setcomp] = useState("");

  const create_new_slug = (Data) => {
    console.log(Data);

    //   axios({
    //     method: "post",
    //     url: "/shortlinks",
    //     data: Data,
    //   });
  };
  const onUpdate = (items) => {
    console.log(items);
    // axios({
    //   method: "PUT",
    //   url: "/shortlinks",
    //   data: items,
    // });
  };

  // axios
  //   .get("/shortlinks", {
  //     params: {
  //       ID: 12345,
  //     },
  //   })
  //   .then(function (response) {
  //     console.log(response);
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   })
  //   .then(function () {
  //     // always executed
  //   });

  return (
    <>
      <Navbar />
      <Get />

      <div
        className="container"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <button
          type="button"
          onClick={() => setcomp("Create")}
          className="btn btn-outline-primary"
        >
          Create Slug
        </button>
        <button
          type="button"
          onClick={() => setcomp("Update")}
          className="btn btn-outline-primary"
        >
          Update Slug
        </button>
      </div>

      {comp === "Create" && <Create onSubmitt={create_new_slug} />}

      <div style={{ display: "flex", justifyContent: "center" }}>
        {comp === "Update" && <Update onUpdate={onUpdate} />}
      </div>
    </>
  );
};

export default App;
