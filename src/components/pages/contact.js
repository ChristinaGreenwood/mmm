import React from "react";
import contactPagePicture from "../../../static/assets/images/contact-img/new.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function() {
  return (
    <div className="content-page-wrapper">
      <div
        className="left-column"
        style={{
          background: "url(" + contactPagePicture + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />
      <div className="right-column">
          <div className="contact-bullet-points">
            <div className="bullet-point-group">
            <div className="icon">
            <a><FontAwesomeIcon icon="phone"/></a>
            </div>
            <div className="text">801-426-9286</div>
            </div>

            <div className="bullet-point-group">
            <div className="icon">
            <a><FontAwesomeIcon icon="envelope"/></a>
            </div>
            <div className="text">softwareanddesign2022@gmail.com</div>
            </div>

            <div className="bullet-point-group">
            <div className="icon">
            <a><FontAwesomeIcon icon="star"/></a>
            </div>
            <div className="text">Utah County / Remote</div>
            </div>

            <div className="bullet-point-group">
            <div className="icon">
            <a><FontAwesomeIcon icon="message"/></a>
            </div>
            <div className="text">
            <a href="https://www.linkedin.com/in/christina-greenwood-20636a157/"  target="_blank">Linkedin</a>
            </div>
            </div>
          </div>

      </div>
    </div>
  );
}


<a><FontAwesomeIcon icon="wrench"/></a>

