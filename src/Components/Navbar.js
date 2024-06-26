import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

export default function Navbar(props) {
    //const[mode, setMode] = useState(true)

    // const handleMode = () => {
    //     setMode(!mode)
    //     if(!mode){
    //         setStyle({
    //             backgroundColor : 'Black',
    //             color : 'White'
    //         })
    //     }
    //     else{
    //         setStyle({
    //             backgroundColor : 'White',
    //             color : 'Black'
    //         })
    //     }
    // }


  return (
    <div>
      {/* Navbar starts here  */}
      <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            {props.title}
          </a>
          <button
            className="navbar-toggler" 
            type="button"
            // style={{color:'white'}}
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="/about">
                  {props.about}
                </a>
              </li> */}
            </ul>
            {/* <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form> */}
            {/* <button className="btn btn-primary" onClick={handleMode}>Enable {mode ? "Light" : "Dark"} Mode</button> */}
            <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
              <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {props.mode === 'light' ? 'dark' : 'light'} Mode</label>
            </div>
          </div>
        </div>
      </nav>
      </div>
      {/* Navbar ends here */}
      {/* <div className='container my-3'>
        <Textform heading = "Enter the text to analyze"/>
      </div> */}
      


    </div>
  );
}

Navbar.propTypes = { title: PropTypes.string, about: PropTypes.string };
