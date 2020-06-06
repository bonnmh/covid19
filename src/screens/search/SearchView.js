/**
 * @format
 * @flow
 */

import React, {useState, useRef} from 'react';

import {
  SafeAreaView,
  Dimensions,
  View,
  TextInput,
  Text,
  Image,
  TouchableHighlight,
  ScrollView,
  ScrollViewBase,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import Animated, {Easing} from 'react-native-reanimated';
const {Value, timing} = Animated;

import {type Props, ViewProps} from './types';
import useStyles from './SearchStyles';
import {BottomIcons} from 'icons';
import {TextView, Block, Scale} from 'components';
import {SwipeItem} from 'components/search';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

// Declare component
const SearchView = (props: Props) => {
  const [isFocused, setIsFocused] = useState(false);
  const [keyword, setKeyword] = useState('');
  const inpRef = useRef();

  const _input_box_translate_x = useRef(new Animated.Value(width)).current;
  const _back_button_opacity = useRef(new Animated.Value(0)).current;
  const _content_translate_y = useRef(new Animated.Value(height)).current;
  const _content_opacity = useRef(new Animated.Value(0)).current;

  const _onFocus = () => {
    setIsFocused(true);
    const input_box_translate_x_config = {
      duration: 200,
      toValue: 0,
      easing: Easing.inOut(Easing.ease),
    };
    const back_button_opacity_config = {
      duration: 200,
      toValue: 1,
      easing: Easing.inOut(Easing.ease),
    };

    // content
    const content_translate_y_config = {
      duration: 0,
      toValue: 0,
      easing: Easing.inOut(Easing.ease),
    };
    const content_opacity_config = {
      duration: 200,
      toValue: 1,
      easing: Easing.inOut(Easing.ease),
    };

    // run animation
    timing(_input_box_translate_x, input_box_translate_x_config).start();
    timing(_back_button_opacity, back_button_opacity_config).start();
    timing(_content_translate_y, content_translate_y_config).start();
    timing(_content_opacity, content_opacity_config).start();

    // force focus
    inpRef.current.focus();
  };

  const _onBlur = () => {
    setIsFocused(false);
    // animation config
    // input box
    const input_box_translate_x_config = {
      duration: 200,
      toValue: width,
      easing: Easing.inOut(Easing.ease),
    };
    const back_button_opacity_config = {
      duration: 50,
      toValue: 0,
      easing: Easing.inOut(Easing.ease),
    };

    // content
    const content_translate_y_config = {
      duration: 0,
      toValue: height,
      easing: Easing.inOut(Easing.ease),
    };
    const content_opacity_config = {
      duration: 200,
      toValue: 0,
      easing: Easing.inOut(Easing.ease),
    };

    // run animation
    timing(_input_box_translate_x, input_box_translate_x_config).start();
    timing(_back_button_opacity, back_button_opacity_config).start();
    timing(_content_translate_y, content_translate_y_config).start();
    timing(_content_opacity, content_opacity_config).start();

    // force blur
    inpRef.current.blur();
  };
  const styles = useStyles();

  const scroll_x = useRef(new Animated.Value(0)).current;
  const _scroll_y = useRef(new Animated.Value(0)).current;
  // personal card container
  const _card_width = scroll_x.interpolate({
    inputRange: [0, 100],
    outputRange: [100, 50],
    extrapolate: 'clamp',
  });
  const _card_height = scroll_x.interpolate({
    inputRange: [0, 100],
    outputRange: [170, 50],
    extrapolate: 'clamp',
  });
  const _card_position_top = scroll_x.interpolate({
    inputRange: [0, 100],
    outputRange: [0, 60],
    extrapolate: 'clamp',
  });
  const _card_position_left = scroll_x.interpolate({
    inputRange: [0, 100],
    outputRange: [10, 0],
    extrapolate: 'clamp',
  });
  const _card_border_left_radius = scroll_x.interpolate({
    inputRange: [0, 100],
    outputRange: [16, 0],
    extrapolate: 'clamp',
  });
  // image container
  const _image_container_height = scroll_x.interpolate({
    inputRange: [0, 100],
    outputRange: [100, 40],
    extrapolate: 'clamp',
  });
  const _image_container_margin = scroll_x.interpolate({
    inputRange: [0, 100],
    outputRange: [0, 4],
    extrapolate: 'clamp',
  });
  const _image_container_border_radius = scroll_x.interpolate({
    inputRange: [0, 100],
    outputRange: [0, 40],
    extrapolate: 'clamp',
  });
  // cta container
  const _cta_container_padding_top = scroll_x.interpolate({
    inputRange: [0, 100],
    outputRange: [20, -20],
    extrapolate: 'clamp',
  });
  const _cta_container_opacity = scroll_x.interpolate({
    inputRange: [0, 50],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });
  // icon
  const _icon_scale = scroll_x.interpolate({
    inputRange: [0, 100],
    outputRange: [1, 0.6],
    extrapolate: 'clamp',
  });
  const _icon_position_top = scroll_x.interpolate({
    inputRange: [0, 100],
    outputRange: [-15, -28],
    extrapolate: 'clamp',
  });
  const _icon_position_right = scroll_x.interpolate({
    inputRange: [0, 100],
    outputRange: [33, -3],
    extrapolate: 'clamp',
  });
  const _diff_clamp_scroll_y = Animated.diffClamp(_scroll_y, 0, 50);

  const _header_height = Animated.interpolate(_diff_clamp_scroll_y, {
    inputRange: [0, 50],
    outputRange: [50, 0],
    extrapolate: 'clamp',
  });

  const _header_translate_y = Animated.interpolate(_diff_clamp_scroll_y, {
    inputRange: [0, 50],
    outputRange: [0, -50],
    extrapolate: 'clamp',
  });

  const _header_opacity = Animated.interpolate(_diff_clamp_scroll_y, {
    inputRange: [0, 50],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });
  return (
    <>
      <SafeAreaView style={styles.header_safe_area}>
        <Animated.View
          style={[
            styles.header,
            {
              height: _header_height,
              transform: [{translateY: _header_translate_y}],
              opacity: _header_opacity,
            },
          ]}>
          <View style={styles.header_inner}>
            <View>
              <Block middle centered width={width / 2.5}>
                <TextView bold color={'#4397F7'} size={Scale(25)}>
                  Facebook
                </TextView>
              </Block>
            </View>
            <TouchableHighlight
              activeOpacity={1}
              underlayColor={'#ccd0d5'}
              onPress={_onFocus}
              style={styles.search_icon_box}>
              <Icon name="search" size={22} color="#000000" />
            </TouchableHighlight>
            <Animated.View
              style={[
                styles.input_box,
                {transform: [{translateX: _input_box_translate_x}]},
              ]}>
              <Animated.View style={{opacity: _back_button_opacity}}>
                <TouchableHighlight
                  activeOpacity={1}
                  underlayColor={'#ccd0d5'}
                  onPress={_onBlur}
                  style={styles.back_icon_box}>
                  <Icon name="chevron-left" size={22} color="#000000" />
                </TouchableHighlight>
              </Animated.View>
              <TextInput
                ref={inpRef}
                placeholder="Search Facebook"
                clearButtonMode="always"
                value={keyword}
                onChangeText={(value) => setKeyword(value)}
                style={styles.input}
              />
            </Animated.View>
          </View>
        </Animated.View>

        {!isFocused && (
          <>
            <Animated.ScrollView
              style={[styles.scroll_view1, {}]}
              showsVerticalScrollIndicator={false}
              bounces={false}
              scrollEventThrottle={5}
              onScroll={Animated.event([
                {
                  nativeEvent: {contentOffset: {y: _scroll_y}},
                },
              ])}>
              <View>
                <View style={[styles.container]}>
                  <Animated.View
                    style={[
                      styles.personal_card_container,
                      {
                        width: _card_width,
                        height: _card_height,
                        top: _card_position_top,
                        left: _card_position_left,
                        borderTopLeftRadius: _card_border_left_radius,
                        borderBottomLeftRadius: _card_border_left_radius,
                      },
                    ]}>
                    {/* Image container */}
                    <Animated.View
                      style={[
                        styles.image_container,
                        {
                          height: _image_container_height,
                          margin: _image_container_margin,
                          borderRadius: _image_container_border_radius,
                        },
                      ]}>
                      <Image
                        source={require('images/caugh.png')}
                        style={styles.image}
                      />
                    </Animated.View>
                    {/* Call to action */}
                    <Animated.View style={styles.cta_container}>
                      <Animated.Text
                        style={[
                          styles.text,
                          {
                            paddingTop: _cta_container_padding_top,
                            opacity: _cta_container_opacity,
                          },
                        ]}>
                        Create a{'\n'}
                        story
                      </Animated.Text>
                      {/* Icon */}
                      <Animated.View
                        style={[
                          styles.icon_container,
                          {
                            transform: [{scale: _icon_scale}],
                            top: _icon_position_top,
                            right: _icon_position_right,
                          },
                        ]}>
                        <Icon name="plus" size={18} color="#ffffff" />
                      </Animated.View>
                    </Animated.View>
                  </Animated.View>
                  <Animated.ScrollView
                    style={styles.scroll_view}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={5}
                    onScroll={Animated.event([
                      {
                        nativeEvent: {contentOffset: {x: scroll_x}},
                      },
                    ])}>
                    <View style={styles.fake_card_ghost} />
                    <View style={styles.fake_card} />
                    <View style={styles.fake_card} />
                    <View style={styles.fake_card} />
                    <View style={styles.fake_card} />
                    <View style={styles.fake_card} />
                    <View style={styles.fake_card} />
                    <View style={styles.column_spacer} />
                  </Animated.ScrollView>
                </View>
              </View>
              <SwipeItem>
                <View style={styles.fake_post} />
              </SwipeItem>

              <View style={styles.fake_post} />
              <View style={styles.fake_post} />
            </Animated.ScrollView>
          </>
        )}
      </SafeAreaView>

      <Animated.View
        style={[
          styles.content,
          {
            opacity: _content_opacity,
            transform: [{translateY: _content_translate_y}],
          },
        ]}>
        <SafeAreaView style={styles.content_safe_area}>
          <View style={styles.content_inner}>
            <View style={styles.separator} />
            {keyword === '' ? (
              <View style={styles.image_placeholder_container}>
                <Image
                  source={BottomIcons.search}
                  style={styles.image_placeholder}
                />
                <Text style={styles.image_placeholder_text}>
                  Enter a few words{'\n'}
                  to search on Facebook
                </Text>
              </View>
            ) : (
              <ScrollView>
                <View style={styles.search_item}>
                  <Icon
                    style={styles.item_icon}
                    name="search"
                    size={16}
                    color="#cccccc"
                  />
                  <Text>Fake result 1</Text>
                </View>
                <View style={styles.search_item}>
                  <Icon
                    style={styles.item_icon}
                    name="search"
                    size={16}
                    color="#cccccc"
                  />
                  <Text>Fake result 2</Text>
                </View>
                <View style={styles.search_item}>
                  <Icon
                    style={styles.item_icon}
                    name="search"
                    size={16}
                    color="#cccccc"
                  />
                  <Text>Fake result 3</Text>
                </View>
                <View style={styles.search_item}>
                  <Icon
                    style={styles.item_icon}
                    name="search"
                    size={16}
                    color="#cccccc"
                  />
                  <Text>Fake result 4</Text>
                </View>
                <View style={styles.search_item}>
                  <Icon
                    style={styles.item_icon}
                    name="search"
                    size={16}
                    color="#cccccc"
                  />
                  <Text>Fake result 5</Text>
                </View>
              </ScrollView>
            )}
          </View>
        </SafeAreaView>
      </Animated.View>
    </>
  );
};

SearchView.defaultProps = {};

export default SearchView;
