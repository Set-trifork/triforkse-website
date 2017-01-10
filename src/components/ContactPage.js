import React, { Component } from 'react'
import Navbar from './Navbar';
import PageFooter from './PageFooter';
import './ContactPage.css';
import BEM from '../BEM';

const page = BEM("contact-page");
const section = BEM("section");

const vcardTrifork = {
  name: "Trifork AB",
  items: [
    { key: "street", field: "Street", value: "Ferkens Gränd 3" },
    { key: "city", field: "City", value: "SE-111 30 Stockholm" },
    { key: "country", field: "Country", value: "Sweden" },
    { key: "vat", field: "Org no.", value: "556993-3392" },
    { key: "email", field: "Email", value: <a href="mailto:stockholm@trifork.com">stockholm@trifork.com</a> }
  ]
};

const vcardThomas = {
  name: "Thomas Anagrius",
  items: [
    { key: "title", field: "Title", value: "VD, Managing Director" },
    { key: "phone", field: "Phone", value: "+46 70 445 0863" },
    { key: "email", field: "Email", value: <a href="mailto:thb@trifork.com">thb@trifork.com</a> }
  ]
};

export default class ContactPage extends Component {
  renderVCard(vcard) {
    return (
      <div {...page("vcard")}>
        <h2>{vcard.name}</h2>
        { vcard.items.map(item => (
          <div key={item.key} {...page("vcard-row")}>
            <span {...page("vcard-field")}>{item.field}</span>
            {item.value}
          </div>
        )) }
      </div>
    );
  }

  render() {
    return (
      <div {...page()}>
        <Navbar current="/contact"/>

        <div {...page("content")}>
          <div {...page("left")} style={{ backgroundImage: `url(${require("../images/photos/gamlastan.jpg")})`, backgroundPosition: "center" }}>
          </div>
          <div {...page("right")}>
            <h2  {...section("title")}>Come and visit us!</h2>
            <div {...section("text")}>
              <div {...section("description")}>
                <p>We have our offices in the beautiful Gamla Stan, the old town of Stockholm. Just drop us a message and let us know when you'd like to come over.</p>
                <p>There's also a good chance we'll be attending on of the many meetups in Stockholm. We usually <a href="/blog">blog</a> about it.</p>
                <p>Or, if you'd rather get your coffee mug signed, why not join us for lunch?</p>
              </div>
            </div>
          </div>
        </div>

        <div {...page("content", "alternate")}>
          <div {...page("map")} style={{ backgroundImage: `url(${require("../images/pictures/map.png")})` }}></div>
          <div {...page("map-info")}>
            <h3>20 Offices in 9 Countries</h3>
            <p>The Swedish Trifork Office is one of many Trifork. If you are looking for one of our other offices, head over to our <a href="http://trifork.com/">Global Website.</a></p>
          </div>
        </div>

        <div {...page("content")}>
          <div {...page("left")} style={{ backgroundImage: `url(${require("../images/photos/6.jpg")})` }}>
          </div>
          <div {...page("right")}>
            <h2  {...section("title")}>Or send us a message</h2>
            <div {...section("text")}>
              <div {...section("description")}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus eget est a congue. Maecenas non fringilla urna, vitae interdum libero. Nunc ut sem eleifend, volutpat sapien vitae, rhoncus purus. Sed at tortor eget est feugiat bibendum.</p>
              </div>
            </div>
          </div>
        </div>

        <div {...page("content", "focus")}>
          <div {...page("vcards")}>
            { this.renderVCard(vcardTrifork) }
            { this.renderVCard(vcardThomas) }
          </div>
        </div>
        <PageFooter />
      </div>
    );
  }
}
