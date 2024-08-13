import './NavBar.css'


function AppBars(){
  return (
    <>
    <div class="container-fluid main-menu main-c">
      <div class="row">
        <div class="col-md-12 col-12 mx-auto">
          <nav class="navbar navbar-expand-lg navbar-light ">
            <a class="navbar-brand logo" href="#">
              <img src="https://i.pinimg.com/736x/07/f7/c0/07f7c060fa4c51976391bb4430bfed82.jpg" alt="" /> Fairy-Mate
              <i class="fa-solid fa-snowflake"></i></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="#"
                    >Home </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Order</a>
                </li>

                <li class="nav-item">
                  <a class="nav-link " href="about.html">ContactUs</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link " href="/src/Loginmain.jsx">Register/Login</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link " href="about.html">Aboutus</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>

    </>
  )
  
}

export default AppBars;