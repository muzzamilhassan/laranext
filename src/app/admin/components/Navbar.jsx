import React from "react";
import Link from "next/link";
import { RiBarChartHorizontalFill } from "react-icons/ri";
const Navbar = () => {
  return (
    <div>
      <nav className="main-header navbar navbar-expand navbar-white navbar-light">
      <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              className="nav-link "
              data-widget="pushmenu"
              href=""
              role="button"
            >
              <RiBarChartHorizontalFill className="!text-4xl text-black" />
            </Link>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link
              className="nav-link"
              data-widget="navbar-search"
              href="#"
              role="button"
            >
              <i className="fas fa-search" />
            </Link>
            <div className="navbar-search-block">
              <form className="form-inline">
                <div className="input-group input-group-sm">
                  <input
                    className="form-control form-control-navbar"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <div className="input-group-append">
                    <button className="btn btn-navbar" type="submit">
                      <i className="fas fa-search" />
                    </button>
                    <button
                      className="btn btn-navbar"
                      type="button"
                      data-widget="navbar-search"
                    >
                      <i className="fas fa-times" />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </li>
          <li className="nav-item dropdown">
            <Link className="nav-link" data-toggle="dropdown" href="#">
              <i className="far fa-comments" />
              <span className="badge badge-danger navbar-badge">3</span>
            </Link>
          </li>
          {/* Notifications Dropdown Menu */}
          <li className="nav-item dropdown">
            <Link className="nav-link" data-toggle="dropdown" href="#">
              <i className="far fa-bell" />
              <span className="badge badge-warning navbar-badge">15</span>
            </Link>
            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
              <span className="dropdown-item dropdown-header">
                15 Notifications
              </span>
              <div className="dropdown-divider" />
              <Link href="#" className="dropdown-item">
                <i className="fas fa-envelope mr-2" /> 4 new messages
                <span className="float-right text-muted text-sm">3 mins</span>
              </Link>
              <div className="dropdown-divider" />
              <Link href="#" className="dropdown-item">
                <i className="fas fa-users mr-2" /> 8 friend requests
                <span className="float-right text-muted text-sm">12 hours</span>
              </Link>
              <div className="dropdown-divider" />
              <Link href="#" className="dropdown-item">
                <i className="fas fa-file mr-2" /> 3 new reports
                <span className="float-right text-muted text-sm">2 days</span>
              </Link>
              <div className="dropdown-divider" />
              <Link href="#" className="dropdown-item dropdown-footer">
                See All Notifications
              </Link>
            </div>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              data-widget="fullscreen"
              href="#"
              role="button"
            >
              <i className="fas fa-expand-arrows-alt" />
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              data-widget="control-sidebar"
              data-controlsidebar-slide="true"
              href="#"
              role="button"
            >
              <i className="fas fa-th-large" />
            </Link>
          </li>
        </ul>
      </nav>
      
    </div>
  );
};

export default Navbar;
