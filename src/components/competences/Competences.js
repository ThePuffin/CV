import React, { Component } from "react";
import "./Competence.css";
import imgBootstrap from "./icons/if_Bootstrap_682700.png";
import imgJQuery from "./icons/if_jquery_252091.png";
import imgMySql from "./icons/if_mysql_1322469.png";
import imgsass from "./icons/if_sass_icon_291782.png";
import imgHTLM from "./icons/if_10-html5_104494.png";
import imgcss from "./icons/if_icon_287_226925.png";
import imgjavascript from "./icons/if_code-programming-javascript-software-develop-command-language_652581.png";
import imgnodejs from "./icons/if_node-js_1269842.png";
import imgreact from "./icons/if_react_js_1322468.png";

class Competences extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container">
        <h3>Mes compétences</h3>
        <div className="row">
          <div className="container col-6">
            <h5>Langages et frameworks</h5>
            <p className="pFont">
              <img src={imgHTLM} className="icons" alt="html" /> HTML 5
            </p>
            <p className="pFont">
              <img src={imgcss} className="icons" alt="css" /> CSS 3
            </p>
            <p className="pFont">
              <img src={imgsass} className="icons" alt="sass" /> SASS
            </p>
            <p className="pFont">
              <img src={imgjavascript} className="icons" alt="javascript" />JavaScript
              ES6
            </p>
            <p className="pFont">
              <img src={imgnodejs} className="icons" alt="nodejs" />NodeJS
            </p>
            <p className="pFont">
              <img src={imgreact} className="icons" alt="react" /> React
            </p>

            <p className="pFont">
              <img src={imgBootstrap} className="icons" alt="bootstrap" />{" "}
              Bootstrap 4
            </p>

            <p className="pFont">
              <img src={imgJQuery} className="icons" alt="jquery" /> JQuery
            </p>

            <p className="pFont">
              {" "}
              <img src={imgMySql} className="icons" alt="mysql" /> MySQL
            </p>
          </div>
          <div className="col-6">
            <h5>Langues</h5>
            <p className="pFont">Anglais (oral et écrit)</p>
            <br />
            <h5>Logiciels</h5>
            <p className="pFont">Visualcode</p>
            <p className="pFont">GitHub</p>
            <p className="pFont">Pack Microsoft Office 2016</p>
            <p className="pFont">AutoCAD</p>
            <p className="pFont">Talren</p>
            <p className="pFont">Geolog</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Competences;
