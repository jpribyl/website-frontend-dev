//@format
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import '../../../../assets/css/App.css';
import * as d3 from 'd3';

import Circle from '../../../../components/atoms/d3/circles/index';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center'
};

//props:
//num items
//width
//height
//max radius
//min radius
//color list

class Canvas extends Component {
  constructor(props) {
    super();
    this.state = {
      data: this._seedData(props)
    };
  }

  _seedData = props => {
    const numPoints = props.numPoints;
    const width = props.width;
    const height = props.height;
    const maxRadius = props.maxRadius;

    let data = [];
    for (var i = 0, len = numPoints; i < len; i++) {
      var x = Math.random() * width;
      var y = Math.random() * height;
      var r = Math.random() * maxRadius;
      data.push({
        x: x,
        y: y,
        r: r,
        className: 'star'
      });
    }
    return data;
  };

  _animate = () => {
    this.setState({
      data: this._seedData(this.props)
    });
  };

  _removePoint = d => {
    d3.select(ReactDOM.findDOMNode(d))
      .transition()
      .duration(500)
      .style('fill-opacity', '0')
      .style('stroke-opacity', '0')
      .remove();
  };

  componentDidMount() {
    this._animate();
    d3.interval(() => {
      this._animate();
    }, this.props.duration * 0.9);
  }

  render() {
    return (
      <g
        className="clickable canvas"
        style={{
          transform:
            'translate(' +
            this.props.margin.left +
            'px,' +
            this.props.margin.top +
            'px)'
        }}>
        >
        {this.state.data.map(point => {
          return (
            <Circle
              onClick={d => {
                this._removePoint(d);
              }}
              animate={this.props.animate}
              className={point.className}
              duration={this.props.duration}
              x={point.x}
              y={point.y}
              r={point.r}
            />
          );
        })}
      </g>
    );
  }
}
export default Canvas;