const Notification = (props) => {
  const containerClass = `messageContainer ${props.design}`;
  return (
    <div className={containerClass}>
      <img className="img" src={props.link} />
      <p className="para">{props.text}</p>
    </div>
  );
};

const element = (
  <div className="container">
    <h1 className="heading">Notifications</h1>
    <div>
      <Notification
        text="Information Message"
        link="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        design="primary"
      />
      <Notification
        text="Success Message"
        link="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        design="success"
      />
      <Notification
        text="Warning Message"
        link="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        design="warning"
      />
      <Notification
        text="Error Message"
        link="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
        design="error"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
