import React, { Component } from 'react'
import Navbar from './Navbar';
import PageFooter from './PageFooter';
import './ContactPage.css';

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
      <div className="contact-page__vcard">
        <h2>{vcard.name}</h2>
        { vcard.items.map(item => (
          <div key={item.key} className={"contact-page__vcard-row " + item.key}>
            <span className="contact-page__vcard-field">{item.field}</span>
            {item.value}
          </div>
        )) }
      </div>
    );
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="contact-page">
          <div className="contact-page__image contact-page__image1"></div>
          <div className="contact-page__text">
            <h1>Come and visit us!</h1>
            <p>We have our offices in the beautiful Gamla Stan, the old town of Stockholm. Just drop us a message and let us know when you'd like to come over.</p>
            <p>There's also a good chance we'll be attending on of the many meetups in Stockholm. We usually <a href="/blog">blog</a> about it.</p>
            <p>Or, if you'd rather get your coffee mug signed, why not join us for lunch?</p>
          </div>
          <div className="contact-page__side-by-side contact-page__image-container">
            <div className="contact-page__image contact-page__image2"></div>
            <div className="contact-page__image contact-page__image3"></div>
          </div>
          <div className="contact-page__text">
            <h1>Or send us a message</h1>
            <p>Some inspiring and hopefully meaningful text here.</p>
          </div>
          <div className="contact-page__side-by-side contact-page__vcards">
              { this.renderVCard(vcardTrifork) }
              { this.renderVCard(vcardThomas) }
          </div>
        </div>
        <PageFooter />
      </div>
    );
  }
}
