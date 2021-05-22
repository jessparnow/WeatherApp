import "font-awesome/css/font-awesome.min.css";
import Hover from "./components/hoverbutton";
import Search from "./components/searchbar";

function App() {
  return (
    <div className="App">
      <div>
      <Search></Search>
      </div>
      <div className="card columns">
        {/* <div className="card-image">
    <figure className="image is-4by3">
      <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
    </figure>
  </div> */}
        <div className="card-content">
          <div className="media column ">
            <div className="media-left">
              <figure className="image is-96x96">
                <img
                  src="https://bulma.io/images/placeholders/96x96.png"
                  alt="grey square"
                />
              </figure>
            </div>
            <div className="media-content">
              <p className="title">Today's Date</p>
              
            </div>
          </div>

          <div className="content is-left">
            <div className="media-content">
              <p className="title">5 Day Forecast</p>
            </div>
           <Hover></Hover>
           
           

            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
