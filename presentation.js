/* eslint-disable import/no-webpack-loader-syntax */
// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Deck,
  Heading,
  Image,
  Link,
  Quote,
  Slide,
  Text,
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');

const images = {
  theater: require('./assets/3d_theater.JPG'),
  theaterColorized: require('./assets/3d_theater_colorized.png'),
  active_stereo_camera_top: require('./assets/active_sterio_camera_top.png'),
  depth_image: require('./assets/depth_image.png'),
  depth_image_top: require('./assets/depth_image_top.png'),
  depth_image_top_rays: require('./assets/depth_image_top_rays.png'),
  depth_rays_isometric: require('./assets/depth_rays_isometric.png'),
  good_work: require('./assets/good_work.gif'),
  head: require('./assets/head.gif'),
  magic: require('./assets/magic.gif'),
  pclFeatures: require('./assets/pcl_features.jpg'),
  realsense: require('./assets/realsense.png'),
  warpSpeed: require('./assets/warp_speed.gif'),
  active_stereo_camera_front_with_texture: require('./assets/stereo_camera_front_with_texture.png'),
  realsense_summary: require('./assets/realsense_summary.png'),
  stereo_camera_top: require('./assets/sterio_camera_top.png'),
  stereo_camera_front: require('./assets/stereo_camera_front.png'),
  stereo_camera_front_no_texture: require('./assets/stereo_camera_front_with_no_texture.png')
};

const theme = createTheme(
  {
    primary: '#f5f5f5',
    secondary: '#1F2022',
    highlight: '#03A9FC',
    muted: '#909192',
    white: '#fff'
  },
  {
    primary: {
      name: 'Montserrat',
      googleFont: true,
      styles: ['100']
    },
    secondary: {
      name: 'Lato',
      googleFont: true,
      styles: ['300']
    }
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={['fade']} transitionDuration={500} theme={theme}>

        <Slide bgColor="primary">
          <Heading textColor="secondary" caps fit>
            Seeing the World
          </Heading>
          <Image src={images.theater.replace('/', '')} margin="40px auto 228px"/>
        </Slide>

        <Slide transition={['appear']} bgColor="primary">
          <Heading textColor="secondary" caps fit>
            Seeing the World
          </Heading>
          <Image src={images.theaterColorized.replace('/', '')} margin="40px auto 30px"/>
          <Heading textColor="secondary" caps textSize={198}>
            in 3D
          </Heading>
        </Slide>

        <Slide bgColor="primary" fit>
          <Heading textColor="secondary" lineHeight={1.5} size={4}>
            Intel RealSense
          </Heading>
          <Heading textColor="secondary" lineHeight={1.5} size={4}>
            Point Cloud Library
          </Heading>
          <Heading textColor="secondary" lineHeight={1.5} size={4}>
            3D Reconstruction
          </Heading>
        </Slide>

        <Slide bgColor="primary" fit>
          <Heading textColor="secondary" lineHeight={1.5} size={4}>
            Where We're Headed <sup>1</sup>
          </Heading>
          <Image src={images.head.replace('/', '')} margin="40px auto"/>
          <Text textFont="secondary" lineHeight={1.6} textSize={32}>
            <sup>1</sup> get it?
          </Text>
        </Slide>

        <Slide transition={['zoom', 'slide']} bgColor="primary">
          <Heading textColor="secondary" size={4} caps >
            buckle up
          </Heading>
          <Image src={images.warpSpeed.replace('/', '')} margin="40px auto"/>
          <Text textFont="secondary" lineHeight={1.6} bold>
            ... there's a lot of ground to cover
          </Text>
        </Slide>

        <Slide bgColor="primary">
          <Heading textColor="secondary" size={4}>
            Intel RealSense
          </Heading>
          <Image src={images.realsense.replace('/', '')} margin="10px auto 10px"/>
          <Text textFont="secondary" lineHeight={1.6} bold>
            RGB-D Sensor
          </Text>
          <Text textFont="secondary" lineHeight={1.6} bold textSize={28}>
            (depth camera)
          </Text>
        </Slide>

        <Slide bgColor="primary">
          <Heading textColor="secondary" lineHeight={1.6} size={4}>
            RGB-D means<br/>
          </Heading>
          <Text textFont="secondary" lineHeight={1.6} bold>
            Color & Depth
          </Text>
        </Slide>

        <Slide bgColor="primary">
          <Heading textColor="secondary" lineHeight={1.6} size={4}>
            Realsense is
          </Heading>
          <Text textFont="secondary" lineHeight={1.6} bold>
            an Active Stereo Camera
          </Text>
        </Slide>

        <Slide bgColor="primary">
          <Heading textColor="secondary" lineHeight={1.6} fit>
            How do stereo cameras work, anyway?
          </Heading>
          <Appear>
            <div>
              <Image src={images.magic.replace('/', '')} padding="50px 50px 0"/>
              <Text textFont="secondary" lineHeight={1.6} bold>
                magic.
              </Text>
            </div>
          </Appear>
        </Slide>

        <Slide bgColor="primary">
          <Text textFont="secondary" lineHeight={1.6} bold fit>
            "regular" stereo camera: part 1
          </Text>
          <Image bgColor="white" src={images.stereo_camera_top.replace('/', '')} padding="20px"/>
        </Slide>

        <Slide bgColor="primary">
          <Text textFont="secondary" lineHeight={1.6} bold fit>
            "regular" stereo camera: part 2
          </Text>
          <Image bgColor="white" src={images.stereo_camera_front.replace('/', '')} padding="50px"/>
        </Slide>

        <Slide bgColor="primary">
          <Text textFont="secondary" lineHeight={1.6} bold fit>
            "regular" stereo camera: part 3
          </Text>
          <Image bgColor="white" src={images.stereo_camera_front_no_texture.replace('/', '')} padding="50px"/>
        </Slide>

        <Slide bgColor="primary">
          <Text textFont="secondary" lineHeight={1.6} bold fit>
            "active" stereo camera: part 1
          </Text>
          <Image bgColor="white" src={images.active_stereo_camera_top.replace('/', '')} padding="50px"/>
        </Slide>

        <Slide bgColor="primary">
          <Text textFont="secondary" lineHeight={1.6} bold fit>
            "active" stereo camera: part 2
          </Text>
          <Image bgColor="white" src={images.active_stereo_camera_front_with_texture.replace('/', '')} padding="50px"/>
        </Slide>

        <Slide bgColor="primary">
          <Text textFont="secondary" lineHeight={1.6} bold size="4">
            depth images: part 1
          </Text>
          <Image bgColor="white" src={images.depth_image.replace('/', '')} padding="50px"/>
        </Slide>

        <Slide bgColor="primary">
          <Text textFont="secondary" lineHeight={1.6} bold size="4">
            depth images: part 2
          </Text>
          <Image bgColor="white" src={images.depth_image_top.replace('/', '')} padding="50px"/>
        </Slide>

        <Slide bgColor="primary">
          <Text textFont="secondary" lineHeight={1.6} bold size="4">
            depth images: part 3
          </Text>
          <Image bgColor="white" src={images.depth_image_top_rays.replace('/', '')} padding="50px"/>
        </Slide>

        <Slide bgColor="primary">
          <Text textFont="secondary" lineHeight={1.6} bold size="4">
            depth images: part 4
          </Text>
          <Image bgColor="white" src={images.depth_rays_isometric.replace('/', '')} padding="50px"/>
        </Slide>

        <Slide bgColor="primary">
          <Text textFont="secondary" lineHeight={1.6} bold size="4">
            Realsense Summary
          </Text>
          <Image bgColor="white" src={images.realsense_summary.replace('/', '')} padding="50px"/>
        </Slide>

        <Slide bgColor="primary">
          <Heading textColor="secondary" lineHeight={1.6} size={4}>
            RealSense demo
          </Heading>
          <Text textFont="secondary" lineHeight={1.6} bold>
            <Link href="https://github.com/IntelRealSense/librealsense" target="_blank">
              https://github.com/IntelRealsense/librealsense
            </Link>
          </Text>
        </Slide>

        <Slide bgColor="primary">
          <Heading textColor="secondary" lineHeight={1.6} size={4}>
            RealSense Demo Fallback
          </Heading>
          <Text textFont="secondary" lineHeight={1.6}>
            (AKA "Plan B")
          </Text>
        </Slide>

        <Slide bgColor="primary" textColor="secondary">
          <Heading textColor="secondary" lineHeight={1.6} size={4}>
            Point Cloud Library (PCL)
          </Heading>
          <Text textFont="secondary" lineHeight={1.6} bold>
            <Link href="http://pointclouds.org/" target="_blank">
              <Image src={images.pclFeatures.replace('/', '')}/>
            </Link>
          </Text>
          <Text textFont="secondary" lineHeight={1.6} bold>
            <Link href="https://github.com/pointcloudlibrary/pcl" target="_blank">
              https://github.com/pointcloudlibrary/pcl
            </Link>
          </Text>
        </Slide>

      </Deck>
    );
  }
}
