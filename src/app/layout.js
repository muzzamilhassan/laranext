"use client"; // Ensure this component is rendered on the client-side

import localFont from "next/font/local";
import { useEffect } from "react";

// // Import CSS files globally
// import "bootstrap/dist/css/bootstrap.min.css";
// import "tempusdominus-bootstrap-4/build/css/tempusdominus-bootstrap-4.min.css";
// import "icheck-bootstrap/icheck-bootstrap.min.css";
// import "jqvmap/dist/jqvmap.min.css";
// import "admin-lte/dist/css/adminlte.min.css";
// import "overlayscrollbars/css/OverlayScrollbars.min.css";
// import "daterangepicker/daterangepicker.css";
// import "summernote/dist/summernote-bs4.min.css";

// Local font configuration
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({ children }) {

  // Dynamically load JavaScript files
  // useEffect(() => {
  //   // Dynamically import jQuery, Bootstrap, jqvmap, and other necessary libraries
  //   const loadScripts = async () => {
  //     if (typeof window !== 'undefined') {
  //       const $ = await import('jquery');
  //       window.jQuery = $;

  //       // Load Bootstrap JS
  //       await import('bootstrap');

  //       // Load other plugins like jqvmap
  //       await import('jqvmap');
  //       await import('jqvmap/dist/maps/jquery.vmap.usa');
        
  //       // Initialize jqvmap if required
  //       $('#vmap').vectorMap({
  //         map: 'usa_en'
  //       });

  //       // Other libraries like tempus dominus, daterangepicker, etc.
  //       await import('tempusdominus-bootstrap-4');
  //       await import('daterangepicker');
  //       await import('summernote');
  //     }
  //   };

  //   loadScripts().catch(err => console.error("Error loading scripts: ", err));
  // }, []);

  return (
    <html lang="en">
     <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback"
        />

        <link
          rel="stylesheet"
          href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased hold-transition sidebar-mini layout-fixed`}
      >
        {children}
        {/* Example usage of jqvmap */}
        {/* <div id="vmap" style={{ height: "400px", width: "600px" }}></div> */}

        <script src="/plugins/jquery/jquery.min.js"></script>
        <script src="/dist/js/adminlte.js?v=3.2.0"></script>
        <script src="/dist/js/pages/dashboard.js"></script>
      </body>
    </html>
  );
}
