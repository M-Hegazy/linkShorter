import React from "react";

import { useState } from "react";

function Create_slug({ onSubmitt }) {
  const [Slug, setSLug] = React.useState("");
  const [URInpt, setURLInput] = React.useState("");
  const [IosPrimary, setIosPrimary] = React.useState("");
  const [IosFallback, setIosFallback] = React.useState("");
  const [andriodPrimary, setandriodPrimary] = React.useState("");
  const [andriodfallback, setandriodfallback] = React.useState("");

  // const [url, setUrl] = React.useState("");

  const handleClick = (e) => {
    e.preventDefault();
    onSubmitt({
      slug: Slug,
      url: URInpt,
      ios: {
        iosPrimary: IosPrimary,
        IosFallback: IosFallback,
      },
      android: {
        andriodPrimary: andriodPrimary,
        andriodFallback: andriodfallback,
      },
    });
  };

  const handleSLugChange = (event) => {
    setSLug(event.target.value);
  };
  const handleURLChange = (event) => {
    setURLInput(event.target.value);
  };
  const handleIosPrimaryChange = (event) => {
    setIosPrimary(event.target.value);
  };
  const handleIOSFallbckChange = (event) => {
    setIosFallback(event.target.value);
  };
  const handleAndroidPrimaryChange = (event) => {
    setandriodPrimary(event.target.value);
  };
  const handleANDRoidFallbackChange = (event) => {
    setandriodfallback(event.target.value);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <form style={{ width: "25em" }}>
        <div className="form-group">
          <label for="exampleInputEmail1">slug</label>
          <input
            type="text"
            onChange={handleSLugChange}
            className="form-control"
            placeholder="ex:sbadbs"
          />
          <small id="emailHelp" className="form-text text-muted">
            Enter the Slug you want{" "}
            <span style={{ color: "red" }}>optional</span>
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
        <div className="form-group">
          <label for="Ios primary">IOS primary</label>
          <input
            type="url"
            onChange={handleIosPrimaryChange}
            className="form-control"
            placeholder="ex: http://localhost:3000/"
            required
          />
        </div>
        <div className="form-group">
          <label for="Ios fallback">IOS fallback</label>
          <input
            type="url"
            onChange={handleIOSFallbckChange}
            className="form-control"
            placeholder="ex: http://localhost:3000/"
            required
          />
        </div>
        <div className="form-group">
          <label for="Android Primary">Adroid primary</label>
          <input
            type="url"
            onChange={handleAndroidPrimaryChange}
            className="form-control"
            placeholder="ex: http://localhost:3000/"
            required
          />
        </div>
        <div className="form-group">
          <label for="Android Fallback">Adroid fallback</label>
          <input
            type="url"
            onChange={handleANDRoidFallbackChange}
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

export default Create_slug;
