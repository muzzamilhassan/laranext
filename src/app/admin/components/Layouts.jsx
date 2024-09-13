"use client";
import '/public/plugins/fontawesome-free/css/all.min.css';
import '/public/plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css';
import '/public/plugins/icheck-bootstrap/icheck-bootstrap.min.css';
import '/public/plugins/jqvmap/jqvmap.min.css';
import '/public/dist/css/adminlte.min.css';
import '/public/plugins/overlayScrollbars/css/OverlayScrollbars.min.css';
import '/public/plugins/daterangepicker/daterangepicker.css';
import '/public/plugins/summernote/summernote-bs4.min.css';
import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const Layouts = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      {children}
      <Footer />
    </div>
  );
};

export default Layouts;
