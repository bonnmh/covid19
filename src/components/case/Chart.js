import React, {Component} from 'react';
import {StyleSheet, View, Animated, Dimensions, TextInput} from 'react-native';
import {Svg, Path, LinearGradient, Stop, Defs} from 'react-native-svg';
import * as shape from 'd3-shape';
import * as path from 'svg-path-properties';
import {scaleTime, scaleLinear, scaleQuantile} from 'd3-scale';

const d3 = {
  shape,
};
const {width, height: HEIGHT} = Dimensions.get('window');
const height = HEIGHT * 0.2;
const verticalPadding = 5;
const cursorRadius = 10;
const labelWidth = 100;
const data = [
  {x: new Date(2018, 1, 1), y: 0},
  {x: new Date(2018, 1, 16), y: 0},
  {x: new Date(2018, 1, 17), y: 200},
  {x: new Date(2018, 2, 1), y: 200},
  {x: new Date(2018, 2, 2), y: 300},
  {x: new Date(2018, 2, 5), y: 300},
];
const scaleX = scaleTime()
  .domain([new Date(2018, 1, 1), new Date(2018, 2, 5)])
  .range([0, width]);
const scaleY = scaleLinear()
  .domain([0, 300])
  .range([height - verticalPadding, verticalPadding]);
const scaleLabel = scaleQuantile().domain([0, 300]).range([0, 200, 300]);
const line = d3.shape
  .line()
  .x((d) => scaleX(d.x))
  .y((d) => scaleY(d.y))
  .curve(d3.shape.curveBasis)(data);

const properties = path.svgPathProperties(line);
const lineLength = properties.getTotalLength();
export default class Chart extends Component {
  cursor = React.createRef();
  label = React.createRef();
  state = {
    x: new Animated.Value(0),
  };
  moveCursor(value) {
    const {x, y} = properties.getPointAtLength(value);
    console.log(x, y);
    this.cursor.current.setNativeProps({
      top: y - cursorRadius,
      left: x - cursorRadius,
    });
    const label = scaleLabel(scaleY.invert(y));
    this.label.current.setNativeProps({text: `${label}`});
  }
  componentDidMount() {
    this.state.x.addListener(({value}) => this.moveCursor(value));
    this.moveCursor(0);
  }
  render() {
    const {x} = this.state;
    const translateX = x.interpolate({
      inputRange: [0, lineLength],
      outputRange: [0, width - labelWidth],
      extrapolate: 'clamp',
    });
    return (
      <View style={{flex: 1}}>
        <Svg {...{width, height}}>
          <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="gradient">
              <Stop stopColor="#CDE3F8" offset="0%" />
              <Stop stopColor="#eef6fd" offset="80%" />
              <Stop stopColor="#feffff" offset="100%" />
            </LinearGradient>
          </Defs>
          <Path d={line} fill="transparent" stroke="blue" />
          <Path
            d={`${line} L ${width} ${height} L 0 ${height}`}
            fill="url(#gradient)"
          />
          <View ref={this.cursor} style={styles.cursor} />
        </Svg>
        {/* <Animated.View style={[styles.label, {transform: [{translateX}]}]}>
          <TextInput ref={this.label} />
        </Animated.View> */}
        <View style={styles.containerInput}>
          <TextInput ref={this.label} />
        </View>
        <Animated.ScrollView
          style={StyleSheet.absoluteFill}
          contentContainerStyle={{
            width: lineLength * 2,
          }}
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {x},
                },
              },
            ],
            {
              useNativeDriver: true,
            },
          )}
          horizontal
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  cursor: {
    height: cursorRadius * 2,
    width: cursorRadius * 2,
    borderRadius: cursorRadius,
    borderColor: 'blue',
    borderWidth: 2,
    backgroundColor: 'white',
  },
  label: {
    backgroundColor: 'white',
    top: -20,
    left: 0,
    position: 'absolute',
    width: labelWidth,
  },
  containerInput: {
    backgroundColor: 'white',
    width: cursorRadius * 6,
    alignItems: 'center',
    justifyContent: 'center',
    height: cursorRadius * 3,
    position: 'absolute',
    borderColor: 'gray',
    borderWidth: 0.5,
    left: cursorRadius,
  },
});
