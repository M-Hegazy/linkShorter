import React from "react";
import { useState } from "react";
import Updateios from "./update_comp/updateios";
import UpdateAndroid from "./update_comp/UpdateAndroid";
import UpdateURl from "./update_comp/UpdateURl";
function Update_slug({ onUpdate }) {
  const [comp, setcomp] = useState("");
  return (
    <div>
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "3em",
        }}
      >
        <button
          type="button"
          onClick={() => setcomp("IOS")}
          className="btn btn-outline-primary"
        >
          Update IOS
        </button>
        <button
          type="button"
          onClick={() => setcomp("Android")}
          className="btn btn-outline-primary"
        >
          Update Android
        </button>
        <button
          type="button"
          onClick={() => setcomp("WEB")}
          className="btn btn-outline-primary"
        >
          Update WebURL
        </button>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {comp === "IOS" && <Updateios onUpdate={onUpdate} />}
        {comp === "Android" && <UpdateAndroid onUpdate={onUpdate} />}
        {comp === "WEB" && <UpdateURl onUpdate={onUpdate} />}
      </div>
    </div>
  );
}

export default Update_slug;
