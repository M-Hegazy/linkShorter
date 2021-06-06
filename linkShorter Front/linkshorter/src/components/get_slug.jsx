import React from "react";

function Get_slug() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "60vh",
          marginBottom: "-13em",
        }}
      >
        <form style={{ width: "30em" }}>
          <div className="form-group">
            <label for="enter the short URL ">Search For Your Links</label>
            <input
              type="url"
              className="form-control"
              placeholder="ex: https://127.0.0.1:5000/wrjdeb"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Search
          </button>
        </form>
      </div>
    </>
  );
}

export default Get_slug;
