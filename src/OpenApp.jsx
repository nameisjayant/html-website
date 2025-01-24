import React from "react";

const OpenApp = () => {
  const handleButtonClick = (key) => {
    const appUrl = key ? `coworking-app://${key}` : `coworking-app://`;

    // Attempt to open the app
    window.location.href = appUrl;

    // Fallback to Play Store after 2 seconds
    setTimeout(() => {
      window.location.href =
        "https://play.google.com/store/apps/details?id=com.awfis.mobile";
    }, 2000);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>{"Welcome to the website"}</h1>
      <button
        onClick={() => handleButtonClick("")}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          marginTop: "20px",
        }}
      >
        {"Open Home Page"}
      </button>
      <button
        onClick={() => handleButtonClick("meetingRoom")}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          marginTop: "20px",
          marginLeft: "20px",
        }}
      >
        {"Open Meeting Room Page"}
      </button>
      <button
        onClick={() => handleButtonClick("fnb")}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          marginTop: "20px",
          marginLeft: "20px",
        }}
      >
        {"Open F&B Page"}
      </button>
      <button
        onClick={() => handleButtonClick("daypass")}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          marginTop: "20px",
          marginLeft: "20px",
        }}
      >
        {"Open DayPass Page"}
      </button>
    </div>
  );
};

export default OpenApp;
