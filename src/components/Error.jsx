const Error = ({ message,tryAgain}) => {
  console.log(message, "message");
  return (
    <div className="error-wrapper">
      <div>
        <p>üzgünüz bir hata oluştu.</p>
        <p className="danger">{message}</p>
      </div>
      <div className="button-wrapper">
        <button  className="btn" type="button" onClick={tryAgain}>
          <strong>TRY AGAIN </strong>
          <div id="container-stars">
            <div id="stars"></div>
          </div>

          <div id="glow">
            <div className="circle"></div>
            <div className="circle"></div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Error;
