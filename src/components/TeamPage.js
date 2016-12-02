import React, { Component } from 'react'
import Navbar from './Navbar';
import PageFooter from './PageFooter';
import EmployeeCard from './EmployeeCard';
import './TeamPage.css';

export default class TeamPage extends Component {
  render() {
    return (
      <div>
        <Navbar transparent={false} current="/team"/>
        <div className="team-container">
          <div className="about">
            This is TriFork Sweden, blah blah blah BLAH!!!!!!!
            This is TriFork Sweden, blah blah blah BLAH!!!!!!!
            This is TriFork Sweden, blah blah blah BLAH!!!!!!!
            This is TriFork Sweden, blah blah blah BLAH!!!!!!!
            This is TriFork Sweden, blah blah blah BLAH!!!!!!!
            This is TriFork Sweden, blah blah blah BLAH!!!!!!!
            This is TriFork Sweden, blah blah blah BLAH!!!!!!!
            This is TriFork Sweden, blah blah blah BLAH!!!!!!!
            This is TriFork Sweden, blah blah blah BLAH!!!!!!!
            This is TriFork Sweden, blah blah blah BLAH!!!!!!!
            This is TriFork Sweden, blah blah blah BLAH!!!!!!!
            This is TriFork Sweden, blah blah blah BLAH!!!!!!!
            This is TriFork Sweden, blah blah blah BLAH!!!!!!!
            This is TriFork Sweden, blah blah blah BLAH!!!!!!!
            This is TriFork Sweden, blah blah blah BLAH!!!!!!!
          </div>
          <div className="people">
            <EmployeeCard name="Thomas" position="CEO" avatar={require("../images/people/thb.jpg")} linkedin="linkedin" github="github"/>
            <EmployeeCard name="Florain" position="Developer"/>
            <EmployeeCard name="Set" position="Community Manager" avatar={require("../images/people/set.jpg")} linkedin="set"/>
          </div>
        </div>
        <PageFooter />
      </div>
    );
  }
}
