import "./App.css";
import PioneerLogo from "./images/PioneerLogo.png";
import SydKyn from "./images/sydkynwhite.png";
import KGD from "./images/kgd_white.png";
import Buoy from "./images/buoy_white.webp";

export default function App() {
  return (
    <div className="wrapper">
      <div className="logoWrapper">
        <img className="pLogo" src={PioneerLogo}></img>
      </div>
      <div className="TextWrap">
        <h1>
          Pioneer Software<span className="dot">.</span>
        </h1>
        <p>Where your business meets the future</p>
      </div>
      <div className="clientLogoWraper">
        <div style={{ flex: 3 }} />
        <div
          style={{
            flex: 10,
            alignContent: "center",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          <a href="https://www.kimgordondesigns.com/">
            <img style={{ height: "8vh", width: "45.7vh" }} src={KGD}></img>
          </a>
        </div>
        <div style={{ flex: 1 }} />
        <div
          style={{
            flex: 10,
            alignContent: "center",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          <a href="https:://www.buoy.studio">
            <img style={{ height: "16vh", width: "36vh" }} src={Buoy}></img>
          </a>
        </div>
        <div style={{ flex: 1 }} />

        <div
          style={{
            flex: 10,
            alignContent: "center",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          <a href="https://www.syd-kyn.com/password">
            <img style={{ height: "10vh", width: "9.2vh" }} src={SydKyn}></img>
          </a>
        </div>
        <div style={{ flex: 3 }} />
      </div>
    </div>
  );
}
