import React from "react";

function TalkToUsForm({ message }) {
  return (
    <div className="card shadow p-4 border-0">
      <div>
        <h2 className="text-danger">{message}</h2>
      </div>
      <div className="mb-3">
        <label>Name</label>
        <input type="text" placeholder="Name" className="form-control" />
      </div>

      <div className="mb-3">
        <label>Email</label>
        <input type="text" placeholder="Email" className="form-control" />
      </div>

      <div className="mb-3">
        <label>Mobile</label>
        <input type="text" placeholder="Mobile" className="form-control" />
      </div>

      <div className="mb-3">
        <button className="btn btn-warning">SUBMIT DATA</button>
      </div>
    </div>
  );
}

export default TalkToUsForm;
