import React from "react";
import { useState } from "react";
function UpdateURl({ onUpdate }) {
  const [Slug, setSLug] = React.useState("");
  const [URInpt, setURLInput] = React.useState("");
  const handleClick = (e) => {
    e.preventDefault();
    onUpdate({
      slug: Slug,
      url: URInpt,
    });
  };

  const handleSLugChange = (event) => {
    setSLug(event.target.value);
  };
  const handleURLChange = (event) => {
    setURLInput(event.target.value);
  };
  return (
    <div>
      <form style={{ width: "25em" }}>
        <div className="form-group">
          <label for="exampleInputEmail1">slug</label>
          <input
            type="text"
            onChange={handleSLugChange}
            className="form-control"
            placeholder="ex:sbadbs"
            required
          />
          <small id="emailHelp" className="form-text text-muted">
            Enter the Slug
          </small>
        </div>
        <div className="form-group">
          <label for="web url"> Web URL</label>
          <input
            type="url"
            onChange={handleURLChange}
            className="form-control"
            placeholder="ex: http://localhost:3000/"
            required
          />
        </div>
        <button
          type="onClick"
          onClick={handleClick}
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default UpdateURl;
