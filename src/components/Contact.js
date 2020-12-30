
function Contact() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <h1>Contact Me</h1>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="list-group">
              <li className="list-group-item"><h5>Email: jtziros2020@gmail.com</h5></li>
              <li className="list-group-item"><h5>Phone Number: 336-425-5225</h5></li>
              <a href="https://www.linkedin.com/in/jesse-ziros-a347151b2/" className="list-group-item list-group-item-action"><h5>For my Linkedin Profile click here!</h5></a>
              <a href="https://github.com/jesseziros?tab=repositories" className="list-group-item list-group-item-action"><h5>For my Github Repositories click here!</h5></a>
              <a href="https://dashboard.heroku.com/apps" className="list-group-item list-group-item-action"><h5>For my Deployed Heroku apps click here!</h5></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
