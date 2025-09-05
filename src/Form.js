import { useState } from "react";

function Form() {
  var [gender, setGender] = useState("");
  var [course, setCourse] = useState("");
  var [avatar, setAvatar] = useState(false);

  function handleCourse(e) {
    setCourse(e.target.value);
  }

  function handleGender(e) {
    setGender(e.target.value);
  }

  function handleAvatar(e) {
    if (e.target.checked === true) {
      setAvatar(true);
    } else {
      setAvatar(false);
    }
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <h2 className="text-sucess">Form Data</h2>
          <div>
            <label>Courses</label>
            <select className="form-select" onChange={(e) => handleCourse(e)}>
              <option>React Js</option>
              <option>Javascript</option>
              <option>HTML5</option>
              <option>CSS3</option>
              <option>PYTHON</option>
              <option>Node js</option>
              <option>SQL</option>
            </select>
          </div>

          <div>
            <label className="">Gender</label>
          </div>

          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              value="Male"
              name="gender"
              onChange={(e) => handleGender(e)}
            />
            <label className="form-check-label">Male</label>
          </div>

          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              value="Female"
              name="gender"
              onChange={(e) => handleGender(e)}
            />
            <label className="form-check-label">Female</label>
          </div>

          <div>
            <label className="">Favirote Movies</label>
          </div>

          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value="Avatar 2"
              onChange={(e) => handleAvatar(e)}
            />
            <label className="form-check-label">Avatar 2</label>
          </div>

          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value="Avatar"
            />
            <label className="form-check-label">Avatar</label>
          </div>

          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="NTR" />
            <label className="form-check-label">NTR</label>
          </div>

          <div className="mt-4">
            Course: {course} <br />
            Gender: {gender} <br />
            Avatar: {avatar.toString()} <br />
            Course: {course} <br />
            Course: {course} <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
