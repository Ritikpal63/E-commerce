import React from "react";

const AddTeam = () => {
  return (
    <>
      <div className="container team">
        <h1 className="text-center my-bg fs-4 text-center text-light rounded-2 py-1">
          Add Team
        </h1>
        <form action="">
        <div className="row mb-3">
          <input
            type="text"
            className="form-control"
            name="name"
            placeholder="Team Member Name"
          />
        </div>
        <div className="row mb-3">
          <input
            type="text"
            className="form-control"
            name="position"
            placeholder="Position"
          />
        </div>
        <div className="row mb-3">
          <input
            type="text"
            className="form-control"
            name="about"
            placeholder="Bio"
          />
        </div>
        <div className="row mb-3">
          <input
            type="file"
            className=""
            name="teamPic"
            placeholder="Bio"
          />
        </div>
        <div className="row mb-3 justify-content-center">
          <div className="col-md-6">
          <button type='submit' className="btn btn-primary fs-5 w-100">Submit</button>
          </div>
        </div>
        </form>
      </div>
    </>
  );
};

export default AddTeam;
