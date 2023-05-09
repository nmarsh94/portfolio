import React from 'react';
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import './Header.scss';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const Header = () => (
  <div className="app__header app__flex">
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__header-info"
    >
      <div className="app__header-badge">
        <div className="app__flex">
          <span></span>
          <div style={{ marginLeft: 20, marginTop: 50 }}>
            <p className="p1-text">Hello, I'm</p>
            <h1 className="head-text">Nicolas Marsh</h1>
          </div>
        </div>
        <div className="tag-cmp app__flex">
          <p className="p-text">Software Engineer</p>
        </div>
      </div>
      <div className="tag-cmp app__flex">
      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[ images.sass].map((circle, index) => (
          <div className="tag-cmp app__flex" key={`circle-${index}`}>
            <a href="https://raw.githubusercontent.com/nmarsh94/portfolio/main/src/assets/resume-nicolas-marsh.pdf"  download> 
              <img src={images.resume} alt="profile_bg" title="Click here to download the resume in PDF" />
            </a>
          </div>
        ))}
      </motion.div>
        </div>

    </motion.div>

    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img"
    >
     <img src={images.profile} alt="profile_bg"/>
      <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        src={images.paint2}
        alt="profile_circle"
        className="overlay_img"
      />
    </motion.div>

  </div>
);

export default AppWrap(Header, 'home');
