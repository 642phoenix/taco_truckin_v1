import React from "react";
import "./contact.css";
import Navbar from "../components/Navbar";
import axios from "axios";
// import { Link } from "react-router-dom";

const Contact = () => {
  let handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    let fname = document.getElementById("first-name").value;
    let lname = document.getElementById("last-name").value;
    let email = document.getElementById("email").value;
    let number = document.getElementById("number").value;
    let comment = document.getElementById("comment_inp").value;
    let referrer = document.getElementById("referrer").value;
    


    axios.post('http://localhost:5000/user', {
      firstName: fname,
      lastName: lname,
      email: email,
      number: number,
      comment: comment,
      referrer
    })
    .then(function (response) {
      console.log(response.data,"res");
      document.getElementById("comment-section").style.display = "none";
      document.getElementById("thank-you").style.display = "block";
    })
    .catch(function (error) {
      console.log(error);
    });
  };

  return (
    <div>
      <Navbar />

      <header className="App-header">
        <div className="contact-container">
          <div className="contact-content-section contact-us">
            <h1>Contact Us</h1>
            <p>3320 S Priest Dr.</p>
            <p>Tempe, AZ 85282</p>
            <p>(602) 733-2530</p>


            <div className="social-media-container">

            <a style={{ textDecoration: "none" }} href="https://www.facebook.com/profile.php?id=100084329169510">
              <img
                id="fb_icon"
                src="./images/FB-BLACK-WHITE-ICON-100X100.JPG"
                alt="FACEBOOK ICON"
              />
            </a>
              <img
                id="snap_icon"
                src="./images/SNAP-BLACK-WHITE-ICON-100X100.JPG"
                alt="SNAPCHAT ICON"
              />
              <img
                id="insta_icon"
                src="./images/INSTA-BLACK-WHITE-ICON-100X100.JPG"
                alt="INSTAGRAM ICON"
              />
            </div>
          </div>

          <iframe
            className="mapFrame contact-content-section"
            title="googleMapsAPI"
            src="https://storage.googleapis.com/maps-solutions-extg1k23uq/locator-plus/eml4/locator-plus.html"
            style={{ border: "0", width:"33vw", margin:"0 auto"}}
            loading="lazy"
          ></iframe>

          <div id="thank-you" className="contact-content-section"><h1>Leave Your Info</h1><p>Your Information Has Been Submitted We Will Reach Out, Thank You!</p></div>
          <div id="comment-section" className="contact-content-section">
            <h1>Leave Your Info</h1>
            {/* <form method="post" action="https://register-demo.freecodecamp.org"> */}
            <form id="commentForm" onSubmit={handleSubmit}>
              <fieldset>
                <label htmlFor="first-name">
                  Enter Your First Name:
                  <input
                    id="first-name"
                    name="first-name"
                    type="text"
                    required
                  />
                </label>
                <label htmlFor="last-name">
                  Enter Your Last Name:
                  <input id="last-name" name="last-name" type="text" required />
                </label>
                <label htmlFor="email">
                  Enter Your Email:
                  <input id="email" name="email" type="email" required />
                </label>
                <label htmlFor="number">
                  Enter Your Phone Number:
                  <input id="number" name="number" type="number" />
                </label>
              </fieldset>

              <fieldset>
                <label htmlFor="referrer">
                  How did you hear about us?
                  <select id="referrer" name="referrer" required>
                    <option value="">(select one)</option>
                    <option value="walk-up">Walk-Up</option>
                    <option value="social-media">Social Media</option>
                    <option value="website-internet">Website/Internet</option>
                    <option value="family-friend">Referred</option>
                  </select>
                </label>

                <textarea
                  id="comment_inp"
                  name="comments"
                  rows="4"
                  cols="20"
                  placeholder="I would like to know if you're available for catering next Saturday the 25th"
                ></textarea>
              </fieldset>
              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Contact;
