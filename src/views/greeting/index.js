//@format
import React, {Component} from 'react';
import Switch from 'react-toggle-switch';
import {AwesomeButton} from 'react-awesome-button';
import {Grid, Row, Col} from 'react-bootstrap';
import * as d3 from 'd3';

import Greeting from '../../components/organisms/d3/greeting';
import UserGeneratedGreeting from '../../components/organisms/d3/userPickGreeting/';
import {Link} from 'react-router-dom';

class GreetingView extends Component {
  constructor(props) {
    super();

    let width = window.innerWidth * 0.89;
    let height;
    if (window.innerWidth > 800) {
      height = window.innerHeight * 0.71;
    } else {
      height = window.innerHeight * 0.6;
    }

    this.state = {
      animate: true,
      numPoints: 80,
      duration: 25000,
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
      <Grid className="greeting" fluid={true}>
        <Row>
          <Greeting
            numPoints={this.state.numPoints}
            duration={this.state.duration}
            width={this.state.width}
            height={this.state.height}
            maxRadius={this.state.maxRadius}
            margin={this.state.margin}
            animate={this.state.animate}
          />
        </Row>
        <Row>
          <hr />
          <Col className="signature" lg={3} sm={4} xs={8}>
            <h1 className="name">john pribyl</h1>
            <h2 className="title">data scientist</h2>
          </Col>
          <Col lg={3} sm={4} xs={8}>
            <div id="enterSite">
              <Link to="/bio">
                <AwesomeButton
                  id="enterSiteButton"
                  type="primary"
                  bubbles={true}
                  action={this._enterSite}>
                  ENTER SITE
                </AwesomeButton>
              </Link>
            </div>
          </Col>
          <UserGeneratedGreeting
            width={this.state.width}
            height={this.state.height}
            maxRadius={this.state.maxRadius}
            margin={this.state.margin}
            duration={this.state.duration}
            animate={this.state.animate}
          />
          <Col lg={2} sm={4} xs={4}>
            <div className="animation toggle">
              <h3>animate</h3>
              <Switch
                id="animationToggle"
                onClick={this._togglAnimate}
                on={this.state.animate}
              />
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}
export default GreetingView;