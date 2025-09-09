import React, { useState } from "react";
import Header from "../Shared/Header";
import Footer from "../Shared/Footer";

function ProfileUpdate() {
  let [profileFile, setProfileFile] = useState("");

  let [fileError, setFileError] = useState("");
  let [fileSizeError, setFileSizeError] = useState("");

  function handleFileChange(event) {
    // console.log(event);
    // console.log(event.target.files[0]);
    setProfileFile(event.target.files[0]);
  }

  function uploadFile() {
    let fileName = profileFile.name;
    let fileArray = fileName.split("."); //
    let extension = fileArray[fileArray.length - 1];

    if (extension === "png" || extension === "jpg") {
      setFileError("");
    } else {
      setFileError(extension + " is not Allowed");
    }

    let fileSize = profileFile.size / (1024 * 1024); // MB
    console.log(fileSize);
    if (fileSize <= 1) {
      setFileSizeError("");
    } else {
      setFileSizeError(fileSize + " not allowed, MAX 1MB Only");
    }
  }
  return (
    <div className="container">
      <div className="row">
        <Header />
      </div>
      <div className="row mt-5 mb-5">
        <div className="col-12">
          <h4>Upload Profile Pic</h4>

          <div>
            <input
              type="file"
              className="form-control"
              onChange={(e) => handleFileChange(e)}
            />
          </div>
          <div className="mt-3">
            <button className="btn btn-primary" onClick={(e) => uploadFile()}>
              Upload File
            </button>
          </div>
          <div className="mt-3 text-danger">
            {fileError}
            {fileSizeError}
          </div>
          <div className="mt-3 text-danger">{fileSizeError}</div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default ProfileUpdate;
