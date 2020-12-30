const Project = (props) => {
  return (
    <div className="offset-md-1 project">
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-lg-12">
              <h3>{props.name}</h3>
              <a href={props.link}><img src={props.image} alt=""/></a>
              <h6>{props.message}</h6>
              <a href={props.Github}>Github Repository: {props.Github}</a>
              <h5>Techologies: {props.techologies}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project;