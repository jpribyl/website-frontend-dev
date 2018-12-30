//@format
import React, {Component} from 'react';
import {Grid, Row, Image} from 'react-bootstrap';

import Header from '../../components/organisms/d3/header';
import Sidebar from '../../components/atoms/sidebar';
import Card from '../../components/atoms/card';

import soopLogo from '../../assets/img/icons/soop_dino.png';

class PortfolioView extends Component {
  constructor(props) {
    super();

    let height, width, numPoints;
    if (window.innerWidth > 800) {
      height = window.innerHeight * 0.2;
      width = window.innerWidth * 0.89;
      numPoints = 40;
    } else {
      height = window.innerHeight * 0.1;
      width = window.innerWidth * 0.7;
      numPoints = 15;
    }

    this.state = {
      headerText: 'PORTFOLIO',
      animate: false,
      numPoints: numPoints,
      width: width,
      height: height,
      maxRadius: 20,
      margin: {
        top: 30,
        right: window.innerWidth * 0.02,
        bottom: 30,
        left: window.innerWidth * 0.02
      }
    };
  }
  _togglAnimate = () => {
    this.setState({animate: !this.state.animate});
  };
  _enterSite = () => {};

  render() {
    return (
      <div>
        <Sidebar />
        <Grid fluid={true}>
          <Row>
            <div className="padForMenu">
              <Header
                text={this.state.headerText}
                numPoints={this.state.numPoints}
                duration={this.state.duration}
                width={this.state.width}
                height={this.state.height}
                maxRadius={this.state.maxRadius}
                margin={this.state.margin}
                animate={this.state.animate}
              />
            </div>
            <hr className="hrLarge" />
          </Row>
          <h2>Live Apps</h2>
          <Row className="well padForGrid">
            <Card
              dim={true}
              className="link"
              id="soopLink"
              category="This app scrapes the web to find public events with free snacks. User likes and dislikes help a neural network categorize events."
              title="Daily Soup"
              xs={12}
              md={4}
              to="/soop"
              content={
                <Image className="centered" src={soopLogo} rounded responsive />
              }
            />
            <Card
              dim={true}
              id="testLink"
              category="just a test"
              title="test"
              xs={12}
              md={4}
              content={<div>asdf</div>}
            />
            <Card
              category="just a test"
              title="test"
              xs={12}
              md={4}
              content={<div>asdf</div>}
            />
          </Row>
          <h2>Blog Posts</h2>
          <Row className="well padForGrid">
            <Card
              category="just a test"
              title="test"
              xs={4}
              content={<div>asdf</div>}
            />
            <Card
              category="just a test"
              title="test"
              xs={4}
              content={<div>asdf</div>}
            />
            <Card
              category="just a test"
              title="test"
              xs={4}
              content={<div>asdf</div>}
            />
          </Row>
        </Grid>
      </div>
    );
  }
}
export default PortfolioView;
