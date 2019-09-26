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
  good_work: require('./assets/good_work.gif'),
  head: require('./assets/head.gif'),
  magic: require('./assets/magic.gif'),
  pclFeatures: require('./assets/pcl_features.jpg'),
  realsense: require('./assets/realsense.png'),
  warpSpeed: require('./assets/warp_speed.gif'),
  active_stereo_camera_front_with_texture: require('./assets/stereo_camera_front_with_texture.png'),
  realsense_summary: require('./assets/realsense_summary.png'),
  stereo_camera_top: require('./assets/sterio_camera_top.png'),
  stereo_camera_top_rgb: require('./assets/active_sterio_camera_with_rgb_top.png'),
  stereo_camera_front: require('./assets/stereo_camera_front.png'),
  stereo_camera_front2: require('./assets/stereo_camera_front_2.png'),
  stereo_camera_front_no_texture: require('./assets/stereo_camera_front_with_no_texture.png')
};

const icpImages = { 
  icp01: require('./assets/ICP_ICP_001.png'),
  icp02: require('./assets/ICP_ICP_002.png'),
  icp03: require('./assets/ICP_ICP_003.png'),
  icp04: require('./assets/ICP_ICP_004.png'),
  icp05: require('./assets/ICP_ICP_005.png'),
  icp06: require('./assets/ICP_ICP_006.png'),
  icp07: require('./assets/ICP_ICP_007.png'),
  icp08: require('./assets/ICP_ICP_008.png'),
  icp09: require('./assets/ICP_ICP_009.png'),
  icp10: require('./assets/ICP_ICP_010.png'),
  icp11: require('./assets/ICP_ICP_011.png'),
  icp12: require('./assets/ICP_ICP_012.png'),
  icp13: require('./assets/ICP_ICP_013.png'),
  icp14: require('./assets/ICP_ICP_014.png'),
  icp15: require('./assets/ICP_ICP_015.png'),
  icp16: require('./assets/ICP_ICP_016.png')
}

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
          <Image width={668} height={245} src={images.theater.replace('/', '')} margin="40px auto 228px"/>
        </Slide>

        <Slide transition={['appear']} bgColor="primary">
          <Heading textColor="secondary" caps fit>
            Seeing the World
          </Heading>
          <Image width={668} height={245} src={images.theaterColorized.replace('/', '')} margin="40px auto 30px"/>
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
          <Image width={450} height={450} src={images.head.replace('/', '')} margin="40px auto"/>
          <Text textFont="secondary" lineHeight={1.6} textSize={32}>
            <sup>1</sup> get it?
          </Text>
        </Slide>

        <Slide transition={['zoom', 'slide']} bgColor="primary">
          <Heading textColor="secondary" size={4} caps >
            buckle up
          </Heading>
          <Image width={438} height={340} src={images.warpSpeed.replace('/', '')} margin="40px auto"/>
          <Text textFont="secondary" lineHeight={1.6} bold>
            ... there's a lot of ground to cover
          </Text>
        </Slide>

        <Slide>
          <Heading textColor="secondary" lineHeight={1.6} size={4}>
            First Problem:
          </Heading>
          <Text textFont="secondary" lineHeight={1.6} bold size="4">
            Data Acquisition
          </Text>
        </Slide>

        <Slide bgColor="primary">
          <Heading textColor="secondary" size={4}>
            Intel RealSense
          </Heading>
          <Image width={559} height={309} src={images.realsense.replace('/', '')} margin="10px auto 10px"/>
          <Text textFont="secondary" lineHeight={1.6} bold>
            RGB-D Sensor
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
            More specifically
          </Heading>
          <Text textFont="secondary" lineHeight={1.6} bold>
             Realsense is an Active Stereo Camera
          </Text>
        </Slide>

        <Slide bgColor="primary">
          <Heading textColor="secondary" lineHeight={1.6} fit>
            How do stereo cameras work, anyway?
          </Heading>
          <Appear>
            <div>
              <Image width={350} height={196} src={images.magic.replace('/', '')} />
              <Text textFont="secondary" lineHeight={1.6} bold>
                Magic.
              </Text>
              <Text textFont="secondary" lineHeight={1.6} textSize={18} bold>
                (aka math)
              </Text>
            </div>
          </Appear>
        </Slide>

        <Slide bgColor="primary">
          <Text textFont="secondary" lineHeight={1.6} bold fit>
            "regular" stereo camera: part 1
          </Text>
          <Image width={640} height={480} bgColor="white" src={images.stereo_camera_top.replace('/', '')} />
        </Slide>

        <Slide bgColor="primary">
          <Text textFont="secondary" lineHeight={1.6} bold fit>
            "regular" stereo camera: part 2
          </Text>
          <Image width={640} height={480} bgColor="white" src={images.stereo_camera_front.replace('/', '')} />
        </Slide>

        <Slide bgColor="primary">
          <Text textFont="secondary" lineHeight={1.6} bold fit>
            "regular" stereo camera: part 3
          </Text>
          <Image width={640} height={480} bgColor="white" src={images.stereo_camera_front2.replace('/', '')} />
        </Slide>

        <Slide bgColor="primary">
          <Text textFont="secondary" lineHeight={1.6} bold fit>
            "regular" stereo camera: part 4
          </Text>
          <Image width={640} height={480} bgColor="white" src={images.stereo_camera_front_no_texture.replace('/', '')} />
        </Slide>

        <Slide bgColor="primary">
          <Text textFont="secondary" lineHeight={1.6} bold fit>
            "active" stereo camera: part 1
          </Text>
          <Image width={640} height={480} bgColor="white" src={images.active_stereo_camera_top.replace('/', '')} />
        </Slide>

        <Slide bgColor="primary">
          <Text textFont="secondary" lineHeight={1.6} bold fit>
            "active" stereo camera: part 2
          </Text>
          <Image width={640} height={480} bgColor="white" src={images.active_stereo_camera_front_with_texture.replace('/', '')} />
        </Slide>

        <Slide bgColor="primary">
          <Text textFont="secondary" lineHeight={1.6} bold size="4">
            depth images: part 1
          </Text>
          <Image width={640} height={480} bgColor="white" src={images.depth_image.replace('/', '')} />
        </Slide>

        <Slide bgColor="primary">
          <Text textFont="secondary" lineHeight={1.6} bold size="4">
            depth images: part 2
          </Text>
          <Image width={640} height={480} bgColor="white" src={images.depth_image_top.replace('/', '')} />
        </Slide>

        <Slide bgColor="primary">
          <Text textFont="secondary" lineHeight={1.6} bold size="4">
            depth images: part 3
          </Text>
          <Image width={640} height={480} bgColor="white" src={images.depth_image_top_rays.replace('/', '')} />
        </Slide>

        <Slide bgColor="primary">
          <Text textFont="secondary" lineHeight={1.6} bold size="4">
            Where does the color come from?
          </Text>
          <Image width={640} height={480} bgColor="white" src={images.stereo_camera_top_rgb.replace('/', '')} />
        </Slide>

        <Slide bgColor="primary">
          <Image width={559} height={309} src={images.realsense.replace('/', '')} margin="10px auto 10px"/>
        </Slide>

        <Slide bgColor="primary">
          <Image width={640} height={480} bgColor="white" src={images.realsense_summary.replace('/', '')} />
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
          
          <Text textFont="secondary" lineHeight={1.6} bold fit>
            <Link href="https://github.com/daniel-packard/worldIn3dExamples" target="_blank">
              https://github.com/daniel-packard/worldIn3dExamples
            </Link>
          </Text>
        </Slide>

        <Slide bgColor="primary">
          <Heading textColor="secondary" lineHeight={1.6} size={4}>
            (todo: demo fallback video)
          </Heading>
        </Slide>

        <Slide>
          <Heading textColor="secondary" lineHeight={1.6} size={4}>
            Next Problem: 
          </Heading>
          <Text textFont="secondary" lineHeight={1.6} bold size="4">
            Putting the Pieces Together
          </Text>
        </Slide>

        <Slide bgColor="primary">
          <Text textFont="secondary" lineHeight={1.6} bold fit>
            Putting the pieces together: prelude 1
          </Text>
          <Image width={640} height={480} bgColor="white" src={icpImages.icp01.replace('/', '')} />
        </Slide>

        <Slide bgColor="primary">
          <Text textFont="secondary" lineHeight={1.6} bold fit>
            Putting the pieces together: prelude 2
          </Text>
          <Image width={640} height={480} bgColor="white" src={icpImages.icp02.replace('/', '')} />
        </Slide>

        <Slide bgColor="primary">
          <Text textFont="secondary" lineHeight={1.6} bold fit>
            Putting the pieces together: prelude 3
          </Text>
          <Image width={640} height={480} bgColor="white" src={icpImages.icp03.replace('/', '')} />
        </Slide>

        <Slide bgColor="primary">
          <Text textFont="secondary" lineHeight={1.6} bold fit>
            Putting the pieces together: prelude 4
          </Text>
          <Image width={640} height={480} bgColor="white" src={icpImages.icp04.replace('/', '')} />
        </Slide>

        <Slide bgColor="primary">
          <Text textFont="secondary" lineHeight={1.6} bold fit>
            So how do we get from A to B?
          </Text>
          <div className="img-row">
            <Image width={320} height={240} src={icpImages.icp04.replace('/', '')} />
            <Image width={320} height={240} src={icpImages.icp02.replace('/', '')} />
          </div>
        </Slide>

        <Slide bgColor="primary" textColor="secondary">
          <Heading textColor="secondary" lineHeight={1.6} size={4} fit>
            Enter: Point Cloud Library (PCL)
          </Heading>
          <Link href="http://pointclouds.org/" target="_blank">
            <Image src={images.pclFeatures.replace('/', '')}/>
          </Link>
          <Text textFont="secondary" lineHeight={1.6} bold>
            <Link href="https://github.com/pointcloudlibrary/pcl" target="_blank">
              https://github.com/pointcloudlibrary/pcl
            </Link>
          </Text>
        </Slide>

        <Slide bgColor="primary">
          <Text textFont="secondary" lineHeight={1.6} bold>
            ICP: Part 1
          </Text>
          <Text textFont="secondary" lineHeight={1.6} bold>
            (Not _that_ ICP... Iterative Closest Point)
          </Text>
          <Image width={640} height={480} bgColor="white" src={icpImages.icp05.replace('/', '')} />
        </Slide>

        <Slide bgColor="primary">
          <Text textFont="secondary" lineHeight={1.6} bold>
            ICP: Part 2
          </Text>
          <Text textFont="secondary" lineHeight={1.6} bold>
            "How do we line up these two point clouds?"
          </Text>
          <Image width={640} height={480} bgColor="white" src={icpImages.icp05.replace('/', '')} />
        </Slide>

        <Slide bgColor="primary">
          <Text textFont="secondary" lineHeight={1.6} bold>
            ICP: Part 3
          </Text>
          <Text textFont="secondary" lineHeight={1.6} bold>
            Answer: Pretty much exactly what it sounds like.
          </Text>
          <Image width={640} height={480} bgColor="white" src={icpImages.icp06.replace('/', '')} />
        </Slide>

        <Slide bgColor="primary">
          <Text textFont="secondary" lineHeight={1.6} bold>
            ICP: Part 3
          </Text>
          <Text textFont="secondary" lineHeight={1.6} bold>
            Answer: Pretty much exactly what it sounds like.
          </Text>
          <Image width={640} height={480} bgColor="white" src={icpImages.icp07.replace('/', '')} />
        </Slide>

        <Slide bgColor="primary">
          <Text textFont="secondary" lineHeight={1.6} bold>
            ICP: Part 3
          </Text>
          <Text textFont="secondary" lineHeight={1.6} bold>
            Answer: Pretty much exactly what it sounds like.
          </Text>
          <Image width={640} height={480} bgColor="white" src={icpImages.icp08.replace('/', '')} />
        </Slide>

        <Slide bgColor="primary">
          <Text textFont="secondary" lineHeight={1.6} bold>
            ICP: Part 3
          </Text>
          <Text textFont="secondary" lineHeight={1.6} bold>
            Answer: Pretty much exactly what it sounds like.
          </Text>
          <Image width={640} height={480} bgColor="white" src={icpImages.icp09.replace('/', '')} />
        </Slide>

        <Slide bgColor="primary">
          <Text textFont="secondary" lineHeight={1.6} bold>
            ICP: Part 3
          </Text>
          <Text textFont="secondary" lineHeight={1.6} bold>
            Answer: Pretty much exactly what it sounds like.
          </Text>
          <Image width={640} height={480} bgColor="white" src={icpImages.icp10.replace('/', '')} />
        </Slide>

        <Slide bgColor="primary">
          <Text textFont="secondary" lineHeight={1.6} bold>
            ICP: Part 3
          </Text>
          <Text textFont="secondary" lineHeight={1.6} bold>
            Answer: Pretty much exactly what it sounds like.
          </Text>
          <Image width={640} height={480} bgColor="white" src={icpImages.icp11.replace('/', '')} />
        </Slide>

        <Slide bgColor="primary">
          <Text textFont="secondary" lineHeight={1.6} bold>
            ICP: Part 4
          </Text>
          <Text textFont="secondary" lineHeight={1.6} bold>
            Review the same thing, but with sensors
          </Text>
          <Image width={640} height={480} bgColor="white" src={icpImages.icp12.replace('/', '')} />
        </Slide>

        <Slide bgColor="primary">
          <Text textFont="secondary" lineHeight={1.6} bold>
            ICP: Part 4
          </Text>
          <Text textFont="secondary" lineHeight={1.6} bold>
            Review the same thing, but with sensors
          </Text>
          <Image width={640} height={480} bgColor="white" src={icpImages.icp13.replace('/', '')} />
        </Slide>

        <Slide bgColor="primary">
          <Text textFont="secondary" lineHeight={1.6} bold>
            ICP: Part 4
          </Text>
          <Text textFont="secondary" lineHeight={1.6} bold>
            Review the same thing, but with sensors
          </Text>
          <Image width={640} height={480} bgColor="white" src={icpImages.icp14.replace('/', '')} />
        </Slide>

        <Slide bgColor="primary">
          <Text textFont="secondary" lineHeight={1.6} bold>
            ICP: Part 4
          </Text>
          <Text textFont="secondary" lineHeight={1.6} bold>
            Review the same thing, but with sensors
          </Text>
          <Image width={640} height={480} bgColor="white" src={icpImages.icp15.replace('/', '')} />
        </Slide>

        <Slide bgColor="primary">
          <Text textFont="secondary" lineHeight={1.6} bold>
            You'll often hear this called
          </Text>
          <Text textFont="secondary" lineHeight={1.6} bold>
            SLAM
          </Text>
          <Image width={640} height={480} bgColor="white" src={icpImages.icp16.replace('/', '')} />
        </Slide>

        <Slide bgColor="primary">
          <Text textFont="secondary" lineHeight={1.6} bold>
            SLAM
          </Text>
          <Text textFont="secondary" lineHeight={1.6} bold>
            Simultaneous Localization And Mapping
          </Text>
          <Appear>
            <Text textFont="secondary" lineHeight={1.6} bold>
              Because ... 
            </Text>
          </Appear>
          <Appear>
            <Text textFont="secondary" lineHeight={1.6} bold>
              you have to know what the environment looks like...
            </Text>
          </Appear>
          <Appear>
            <Text textFont="secondary" lineHeight={1.6} bold>
              ...to figure out where you are... 
            </Text>
          </Appear>
          <Appear>
            <Text textFont="secondary" lineHeight={1.6} bold>
              ...but you have to know where you are...
            </Text>
          </Appear>
          <Appear>
            <Text textFont="secondary" lineHeight={1.6} bold>
              ... to figure out what the environment looks like... 
            </Text>
          </Appear>
          <Appear>
            <Text textFont="secondary" lineHeight={1.6} bold>
              but...
            </Text>
          </Appear>
          <Appear>
            <Text textFont="secondary" lineHeight={1.6} bold>
              you get the point.
            </Text>
          </Appear>
        </Slide>

        <Slide bgColor="primary">
          <Text textFont="secondary" lineHeight={1.6} bold>
            PCL Demo (ICP)
          </Text>
          <Image width={640} height={480} bgColor="white" src={icpImages.icp16.replace('/', '')} />
        </Slide>

        <Slide bgColor="primary">
          <Text textFont="secondary" lineHeight={1.6} bold>
            Honorable Mention 1
          </Text>
          <Text textFont="secondary" lineHeight={1.6} bold>
            G2O - General Graph Optimization
          </Text>
          <Text textFont="secondary" lineHeight={1.6} bold>
            <Link href="https://github.com/RainerKuemmerle/g2o" target="_blank">
              https://github.com/RainerKuemmerle/g2o
            </Link>
          </Text>
          <Appear>
            <Text textFont="secondary" lineHeight={1.6} bold>
              Helps correct drift
            </Text>
          </Appear>
        </Slide>

        <Slide bgColor="primary">
          <Text textFont="secondary" lineHeight={1.6} bold>
            Honorable Mention 2
          </Text>
          <Text textFont="secondary" lineHeight={1.6} bold>
            PoissonRecon
          </Text>
          <Text textFont="secondary" lineHeight={1.6} bold>
            <Link href="https://github.com/mkazhdan/PoissonRecon" target="_blank">
              https://github.com/mkazhdan/PoissonRecon
            </Link>
          </Text>
          <Appear>
            <Text textFont="secondary" lineHeight={1.6} bold>
              Creates closed surfaces from unorganized point clouds
            </Text>
          </Appear>
        </Slide>

        <Slide bgColor="primary">
          <Text textFont="secondary" lineHeight={1.6} bold>
            Honorable Mention 3
          </Text>
          <Text textFont="secondary" lineHeight={1.6} bold>
            Custom UV Texture Mapping
          </Text>
          <Text textFont="secondary" lineHeight={1.6} bold>
            (todo: add image)
          </Text>
          {/* <Image width={640} height={480} src={images.textureMap.replace('/', '')} margin="40px auto 228px"/> */}
        </Slide>

        <Slide bgColor="primary">
          <Text textFont="secondary" lineHeight={1.6} bold>
            You made it! Final demo time
          </Text>
        </Slide>

      </Deck>
    );
  }
}
