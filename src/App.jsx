import React from "react";
import { Dropdown } from 'react-bootstrap';

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="row bg-dark">
          <div className="col-sm-10">
            <Dropdown>
              <Dropdown.Toggle variant="primary" id="dropdown-basic">
                Pilih Bahasa
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Indonesia</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Inggris</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Jerman</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="col-sm-2">
            <figure className="figure">
              <img src="https://png.pngtree.com/svg/20161113/ef1b24279e.png" width="40px" className="figure-img img-fluid rounded" alt="..." />
              <figcaption className="figure-caption">Alan Saputri</figcaption>
            </figure>
          </div>

        </div>
        <div className="row">
          <div className="col-sm-4 offset-sm-8">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="/">Home</a></li>
                <li className="breadcrumb-item"><a href="/">Library</a></li>
                <li className="breadcrumb-item active" aria-current="page">Data</li>
              </ol>
            </nav>
          </div>
        </div>
        <div className="row">
          <div className="offset-md-3 col-md-6 offset-md-3">
            <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
              <ol className="carousel-indicators">
                <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="https://images.performgroup.com/di/library/GOAL/30/f0/neymar-psg-paris-saint-germain-2018-19_gmakk5891n9c19udcwofmrsgc.jpg?t=-1258742791&quality=60&w=1600" class="d-block w-100" alt="..." />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>First slide label</h5>
                    <p>Some representative placeholder content for the first slide.</p>
                  </div>
                </div>
                <div class="carousel-item">
                  <img src="https://images.performgroup.com/di/library/GOAL/63/7f/sani-rizki-fauzi-indonesia-u-22_4yztc4nehkt61fa7omuyagf71.jpg?t=351764441&quality=60&w=1600

" className="d-block w-100" alt="..." />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Second slide label</h5>
                    <p>Some representative placeholder content for the second slide.</p>
                  </div>
                </div>
                <div class="carousel-item">
                  <img src="https://images.performgroup.com/di/library/GOAL/f3/33/england-celebrate-vs-montenegro_e97kv5anpqlq1gr9nc2qaz4ko.jpg?t=-1232521935&quality=60&w=1600" className="d-block w-100" alt="..." />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Third slide label</h5>
                    <p>Some representative placeholder content for the third slide.</p>
                  </div>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-target="#carouselExampleCaptions" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-target="#carouselExampleCaptions" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <ul class="list-group">
              <li className="list-group-item active" aria-current="true">Liga 1 Indonesia</li>
              <li className="list-group-item">Liga Primer Inggris</li>
              <li className="list-group-item">Divisi Primera</li>
              <li className="list-group-item">Serie A</li>
              <li className="list-group-item">Ligue 1</li>
              <li className="list-group-item">bundes Liga</li>
            </ul>
          </div>
          <div className="col-md-5">
            <div className="jumbotron">
              <h1 className="display-4">Divisi Primera</h1>
              <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
              <a className="btn btn-primary btn-lg" href="/" role="button">Read More</a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="row">
              <div className="col">
                <center>
                  <figure className="figure">
                    <img src="https://png.pngtree.com/svg/20161113/ef1b24279e.png" width="40px" className="figure-img img-fluid rounded" alt="..." />
                    <h3>Login</h3>
                  </figure>
                </center>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <form>
                  <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" />
                  </div>
                  <div class="form-group form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                  </div>
                  <button type="submit" class="btn btn-primary">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
