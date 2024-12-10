import { Link } from "react-router-dom";
function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" Link="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" Link="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" Link="#">Link</a>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Reference">Test</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Reducerr">Reducer</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Memo">Memo</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Modellist">Modellist</Link>
        </li>
        {/* <li className="nav-item">
          <Link className="nav-link" to="/login">Login</Link>
        </li> */}
        {/* <li className="nav-item">
          <Link className="nav-link" to="/Calculator">Calculator</Link>
        </li> */}
        <nav>
            <Link to="/add">Add User</Link>
        </nav>
        <li className="nav-item">
          <Link className="nav-link" to="/Users">Users</Link>
        </li>
        {/* <li className="nav-item">
          <Link className="nav-link" to="/Adduser">Adduser</Link>
        </li> */}
        
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" Link="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    )

}
export default Navbar;





