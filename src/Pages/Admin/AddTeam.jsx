import React, { useState, useContext } from "react";
import { TeamContext } from "../../Context/TeamContext";

const AddTeam = () => {
  const { teamDetails, setTeamDetails, addTeamMember } = useContext(TeamContext);
  const [error, setError] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;
    setTeamDetails((pre) => ({
      ...pre,
      [name]: value,
    }));
  }
  function validate() {
    let newErrors = {};
    let isValid = true;
    if (!teamDetails.name) {
      newErrors.name = "Team Name is required";
      isValid = false;
    }
    if (!teamDetails.position) {
      newErrors.position = "Team Position is required";
      isValid = false;
    }
    if (!teamDetails.about) {
      newErrors.about = "Team about is required";
      isValid = false;
    }
    if (!teamDetails.teamPic) {
      newErrors.teamPic = "Team Image is required";
      isValid = false;
    }

    setError(newErrors);
    return isValid;
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (validate()) {
      addTeamMember(teamDetails);
      alert("Team member added successfully!");
      setTeamDetails({
        name:'',
        teamPic:'',
        position:'',
        about:''
      });
    }
  }
  return (
    <>
      <div className="container team">
        <h1 className="text-center my-bg fs-4 text-center text-light rounded-2 py-1">
          Add Team
        </h1>
        <form action="" onSubmit={handleSubmit}>
          <div className="row mb-3">
            <input
              type="text"
              className="form-control"
              name="name"
              placeholder="Team Member Name"
              onChange={(e) => handleChange(e)}
            />
            {error && <p className='text-danger mb-0'>{error.name}</p> }
          </div>
          <div className="row mb-3">
            <input
              type="text"
              className="form-control"
              name="position"
              placeholder="Position"
              onChange={(e) => handleChange(e)}
            />
            {error && <p className='text-danger mb-0'>{error.position}</p> }
          </div>
          <div className="row mb-3">
            <input
              type="text"
              className="form-control"
              name="about"
              placeholder="Bio"
              onChange={(e) => handleChange(e)}
            />
            {error && <p className='text-danger mb-0'>{error.about}</p> }
          </div>
          <div className="row mb-3">
            <input
              type="file"
              className=""
              name="teamPic"
              placeholder="Bio"
              onChange={(e) => handleChange(e)}
            />
            {error && <p className='text-danger mb-0'>{error.teamPic}</p> }
          </div>
          <div className="row mb-3 justify-content-center">
            <div className="col-md-6">
              <button type="submit" className="btn btn-primary fs-5 w-100">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddTeam;
