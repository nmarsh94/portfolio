import React from 'react';
import {  BsInstagram, BsLinkedin , BsGithub} from 'react-icons/bs';

const SocialMedia = () => (
  <div className="app__social">
    <a href="https://www.linkedin.com/in/nicolasmarsh/" target="_blank" rel="noreferrer">
      <div>
        <BsLinkedin />
      </div>
    </a>
    <a href="https://github.com/nmarsh94" target="_blank" rel="noreferrer" >
      <div>
        <BsGithub />
      </div>
    </a>
    <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
      <div>
        <BsInstagram />
      </div>
    </a>
  </div>
);

export default SocialMedia;
