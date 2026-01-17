import React from "react";
import { NavLink } from "react-router-dom";

const AdminSidebar = () => {
  return (
    <>
      <div className="list-group">
        <NavLink to="/admin/profile" className="list-group-item">
          <span>
            <i className="fas fa-house fs-5"></i>
          </span>
          <span className="float-end me-3 fw-semibold">Home</span>
        </NavLink>
        <NavLink to="/admin/product" className="list-group-item">
          <span>
            <i className="fa-brands fa-buffer fs-5"></i>
          </span>
          <span className="float-end me-3 fw-semibold">Product</span>
        </NavLink>
        <NavLink to="/admin/team" className="list-group-item">
          <span>
            <i className="fa-solid fa-users fs-5"></i>
          </span>
          <span className="float-end me-3 fw-semibold">Team</span>
        </NavLink>
        <NavLink to="/admin/testimonial" className="list-group-item">
          <span>
            <i className="fa-regular fa-comment-dots fs-5"></i>
          </span>
          <span className="float-end me-3 fw-semibold">Testimonial</span>
        </NavLink>
        <NavLink to="/admin/testimonial" className="list-group-item">
          <span>
            <i className="fa-regular fa-comment-dots fs-5"></i>
          </span>
          <span className="float-end me-3 fw-semibold">Testimonial</span>
        </NavLink>
        <NavLink to="/admin/testimonial" className="list-group-item">
          <span>
            <i className="fa-regular fa-comment-dots fs-5"></i>
          </span>
          <span className="float-end me-3 fw-semibold">Testimonial</span>
        </NavLink>
        <NavLink to="/admin/testimonial" className="list-group-item">
          <span>
            <i className="fa-regular fa-comment-dots fs-5"></i>
          </span>
          <span className="float-end me-3 fw-semibold">Testimonial</span>
        </NavLink>
        <NavLink to="/admin/testimonial" className="list-group-item">
          <span>
            <i className="fa-regular fa-comment-dots fs-5"></i>
          </span>
          <span className="float-end me-3 fw-semibold">Testimonial</span>
        </NavLink>
      </div>
    </>
  );
};

export default AdminSidebar;
