import React from "react";
import { useNavigate } from "react-router-dom";
const Home = () => {

  const navigate = useNavigate();

  const handleLogout = () =>{
    localStorage.getItem("loggedin");
    navigate("/login");
  }
  return (
    <div>
      

      <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
          <span class="navbar-brand mb-0 h1">Employee Detail</span>
        </div>
      </nav>

      

  <table class="table">
  <thead>
    <tr>
      <th scope="col">S.No</th>
      <th scope="col">Name</th>
      <th scope="col">Experience</th>
      <th scope="col">Email</th>
      <th scope="col">Salery</th>
      <th scope="col">Know More</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Arul</td>
      <td>2</td>
      <td>arul@gmail.com</td>
      <td>15000</td>
      <td><a href="https://en.wikipedia.org/wiki/Employment" >CLICK HERE</a></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Suresh</td>
      <td>10</td>
      <td>suresh@gmail.com</td>
      <td>100000</td>
      <td><a href="https://en.wikipedia.org/wiki/Employment">CLICK HERE</a></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Gayathri</td>
      <td>2</td>
      <td>gayathri@gmail.com</td>
      <td>25000</td>
      <td><a href="https://en.wikipedia.org/wiki/Employment">CLICK HERE</a></td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>dhana</td>
      <td>10</td>
      <td>dhana@gmail.com</td>
      <td>215000</td>
      <td><a href="https://en.wikipedia.org/wiki/Employment">CLICK HERE</a></td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td>vasantha</td>
      <td>15</td>
      <td>vasantha@gmail.com</td>
      <td>315000</td>
      <td><a href="https://en.wikipedia.org/wiki/Employment">CLICK HERE</a></td>
    </tr>
  </tbody>
</table>

<button onClick={handleLogout} type="button" class="btn btn-danger">Logout</button>
    </div>
  );
};

export default Home;
