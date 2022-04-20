import "./Pokedex.css";

function PokedexContainer() {
  return (
    <>
      <div id="pokedex">
        {/* <!-- Left Panel --> */}
        <div id="left-panel">
          {/* <!-- Top lights --> */}
          <div className="left-top-container">
            <div className="lights-container">
              <div className="big-light-boarder">
                <div className="big-light blue">
                  <div className="big-dot light-blue"></div>
                </div>
              </div>
              <div className="small-lights-container">
                <div className="small-light red">
                  <div className="dot light-red"></div>
                </div>
                <div className="small-light yellow">
                  <div className="dot light-yellow"></div>
                </div>
                <div className="small-light green">
                  <div className="dot light-green"></div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Center Screen -->
       
        <!-- Bottom Buttons --> */}
          <div className="buttons-container">
            <div className="upper-buttons-container"></div>
          </div>
        </div>
        {/* <!-- End of Left panel -->

      <!-- Right-panel --> */}
        <div id="right-panel">
          {/* <!-- Blank container --> */}
          <div className="empty-container">
            <svg height="100%" width="100%">
              <polyline
                points="0,0 0,40 138,40 158,75 250,75 250,0 0,0"
                style={{ fill: "#f2f2f2", stroke: "none", strokeWidth: "3px" }}
              />
              <polyline
                points="0,40 138,40 158,75 250,75"
                style={{ fill: "none", stroke: " black", strokeWidth: "3px" }}
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}

export default PokedexContainer;
