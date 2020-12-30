import Profilepic from "../images/Profilepic.jpg"

function Aboutme() {
  return (
    <div className="offset-md-2">
      <h1>About Me</h1>
      <div className="col-md-4">
        <img src={Profilepic} alt="logo"></img>
      </div>
        <div className="col-md-8">
          <h5>
          I’m currently working in the automotive field as a Technician for Firestone in Lexington, NC. I am attending school for Full Stack Web Development through UNC Charlotte’s Full Stack Coding Bootcamp Program. I’m looking to start a very fulfilling career in the Web Development Industry. I am a very driven, hard working person and my family is my driving factor, to be able to provide for them and give them a good life is my main goal. I work very well with others even those who are hard to get along with. I also work very efficiently by myself as well.
          </h5>
        </div>
    </div>

  );
}

export default Aboutme;
