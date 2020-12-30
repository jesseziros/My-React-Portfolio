import Project from "./Project";
import Project1 from "../images/Project1.jpg";
import Project2 from "../images/Project2.png";
import Project3 from "../images/Project3.png"

function Portfolio() {
  const projectArray = [
    {
      name: "Find your Brewery",
      image: Project1,
      link: "https://jameslee70.github.io/FirstProject/",
      message: "My team decided to use an API called openbrewerydb to locate different bars within an area, as well as utilizing the openweathermap API for the veiwer to see the current weather in the searched area. We then input a few search bars to narrow the search for said breweries/bars. Once all of the information from the openbrewerydb API shows up on the screen we also provided a link to the breweries website. Click the Picture to view the App!",
      utilities: "Javascript, JQuery, Ajax Call, Third Party API's"
    },
    {
      name: "Doctors Connect",
      image: Project2,
      link: "https://creepy-treat-09091.herokuapp.com/",
      message: "As a team we decided to design an application that could assist in connecting doctors to other for second opinions. Once loaded you will be taken to a landing page with some information about the website. There you will see links the a Search function, Scheduled Appointments and a Logout function at the top, and at the bottom you will see a sign up bar. Once you sign in/create an account you will be taken to the search page where you can search a specific practice, doctor etc. Once you have a set appointment with them you can then keep track of it by inputting the information in the Scheduled Appointment page. Click the Picture to view the App!",
      utilities: "Node.js, MySQL/Sequelize, SASS, Bcrypt"
    },
    {
      name: "Fitness Tracker",
      image: Project3,
      link: "https://gentle-crag-01569.herokuapp.com/?id=5fd80f193f39be0017214a1a",
      message: "In my designing of this app, my duty was to get the routes work and to get the database created. Upon loading the app you will be directed to the fitness tracker page where your last workout will be displayed with all of it's information. From there you can create a new workout or continue your existing one. Creating a new one will give you 2 options of workout, Aerobic or Resistance, from there you will put in all needed information. When you click the 'Complete Workout' button it will save all of your information from that workout and display it on the home page. At the top left if you click on the 'Dashboard' link you will be taken to a page where all of your information is stored from all previous workouts and neatly decorated bar/circle graphs.",
      utilities: "Node.js, Api/Html routes, MongoDB/Mongoose"
    },
  ]
  return (
    <div>
      {projectArray.map(project => {
        return <Project name={project.name}  key={project.name} link={project.link} image={project.image} message={project.message} utilities={project.utilities} />
      })}
    </div>
  );
}

export default Portfolio;
