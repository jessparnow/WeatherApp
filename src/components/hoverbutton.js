import React from "react";

function Hover() {
    return (
        <div className="dropdown is-hoverable">
        <div className="dropdown-trigger">
          <button
            className="button has-background-primary"
            aria-haspopup="true"
            aria-controls="dropdown-menu4"
          >
            <span>Day 1 Date</span>
            {/* <span className="icon is-small">
              <i className="fas fa-angle-down" aria-hidden="true"></i>
            </span> */}
          </button>
        </div>
        <div className="dropdown-menu" id="dropdown-menu4" role="menu">
          <div className="dropdown-content">
            <div className="dropdown-item">
              <div className="media-left">
                <figure className="image is-48x48">
                  <img
                    src="https://bulma.io/images/placeholders/96x96.png"
                    alt="grey square"
                  />
                </figure>
              </div>
              <p>Temp</p>
            </div>
          </div>
        </div>
      </div>
    )
}
export default Hover;