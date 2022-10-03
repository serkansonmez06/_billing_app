import React from "react";

function NotFoundComponent() {
  return (
    <div style={{ minHeight: "100vh" }}>
      <img
        src="https://drudesk.com/sites/default/files/styles/blog_page_header_1088x520/public/2018-02/404-error-page-not-found.jpg?itok=YW-iShwf"
        alt=""
        style={{
          objectFit: "fill",
          width: "100%",
          height: "100vh",
          boxShadow: "22px 22px 25px #b37924",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "83%",
          left: "50%",
          fontFamily: "Times",
          fontWeight: "bold",
          height: "30%",
          fontSize: "30px",
          width: "30%",
          color: "black",
        }}
      >
        Please Check your URL
      </div>
    </div>
  );
}

export default NotFoundComponent;
