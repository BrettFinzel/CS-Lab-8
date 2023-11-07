import { Link } from "react-router-dom";

function Navbar(props) {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">{props.title}</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <Link class="nav-item nav-link active" to ="/">Home </Link>
          <Link class="nav-item nav-link" to ="./card" >Card </Link>
          <Link class="nav-item nav-link" to ="./contact"  >Contact</Link>
        </div>
      </div>
    </nav>
    );
  }
  
  export default Navbar;