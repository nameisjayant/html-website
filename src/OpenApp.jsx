import React from 'react';

const OpenApp = () => {

  const handleButtonClick = () => {
    window.location.href = "coworking-app://dashboard"
    setTimeout(()=>{
        window.location.href = "https://play.google.com/store/apps/details?id=com.awfis.mobile"
    },2000)
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome to the website</h1>
      <button
        onClick={handleButtonClick}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
          marginTop: '20px',
        }}
      >
        {'Open Awfis App'}
      </button>
    </div>
  );
};

export default OpenApp;