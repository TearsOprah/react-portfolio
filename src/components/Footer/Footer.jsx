import texts from "../../utils/texts.js";
import React from "react";
import './Footer.scss';
import imgLogo from "../../assets/white.gif";
import media from "../../utils/media.js";
import {Link} from "react-router-dom";
import { motion } from "framer-motion";

export default function Footer({ currentLang, handleLinkClick, animateProps }) {
  return (
    <motion.footer className={'footer'}
                   {...animateProps}
    >

      <div className={'footer__container'}>

        <div className={'footer__left-block'}>
          <div className={'footer__info'}>
            <div className={'footer__branding'}>
              <Link to={'/'} onClick={() => handleLinkClick('/')}>
                <h2 className={"footer__title"}>TearsOprah</h2>
              </Link>
              <img className={"footer__logo"} src={imgLogo}/>
            </div>
            <p className={'footer__email'}>qmeshokp@mail.ru</p>
          </div>
          <p>{`${texts[currentLang].name} ${texts[currentLang].profession}`}</p>
        </div>

        <div className={'footer__right-block'}>
          <h2 className={'footer__links-title'}>{texts[currentLang].media}</h2>
          <div className={'footer__links'}>
            {media.map((item, i) =>
              <a key={i} href={item[0]} target={'_blank'} className={'footer__link'}><img className={'footer__link-icon'} src={item[1]} /></a>
            )}
          </div>
        </div>

      </div>

      <p className={'footer__copyright'}>{`© ${texts[currentLang].madeBy}. ${new Date().getFullYear()}`}</p>

    </motion.footer>
  )
}
