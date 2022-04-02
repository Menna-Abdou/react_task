import { Button, Container } from "react-bootstrap";
import { useNavigate, NavLink, Outlet } from "react-router-dom";
function About() {
  let navigate = useNavigate();
  let goToHome = () => {
    navigate("/home");
  };
  return (
    <>
      <div className="alert alert-primary p-3">
        <h1>About</h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque possimus
        fugit, ut iusto eius praesentium, ipsum, magni amet explicabo maiores
        incidunt! Sequi accusantium dolore omnis debitis quas, sapiente officiis
        nobis!
        <br></br>
        <Button className="m-4 btn" onClick={goToHome}>
          Back To Home
        </Button>
      </div>
      <div className="alert alert-success p-2">
        <Container className="row">
          <div className="col-6">
            <ul>
              <li>
                <NavLink NavLink to="company" className="tab text-dark">
                  {" "}
                  Company
                </NavLink>
              </li>
              <li>
                <NavLink NavLink to="service" className="tab text-dark">
                  {" "}
                  Service
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="col-6">
            <Outlet />
          </div>
        </Container>
      </div>
    </>
  );
}
export default About;
