import texts from "../../utils/texts.js";
import React from "react";
import './Footer.scss';
import imgLogo from "../../assets/white.gif";

export default function Footer({currentLang}) {
  return (
    <footer className={'footer'}>

      <div className={'footer__container'}>

        <div className={'footer__left-block'}>
          <div className={'footer__info'}>
            <div className={'footer__branding'}>
              <h2 className={"footer__title"}>TearsOprah</h2>
              <img className={"footer__logo"} src={imgLogo}/>
            </div>
            <p className={'footer__email'}>qmeshokp@mail.ru</p>
          </div>
          <p>{`${texts[currentLang].name} ${texts[currentLang].profession}`}</p>
        </div>

        <div className={'footer__right-block'}>
          <h2 className={'footer__links-title'}>{texts[currentLang].media}</h2>
          <div className={'footer__links'}>
            <a className={'footer__link'}><img className={'footer__link-icon'} src={'https://cdn-icons-png.flaticon.com/512/25/25231.png'} /></a>
            <a className={'footer__link'}><img className={'footer__link-icon'} src={'https://cdn-icons-png.flaticon.com/512/25/25231.png'} /></a>
            <a className={'footer__link'}><img className={'footer__link-icon'} src={'https://cdn-icons-png.flaticon.com/512/25/25231.png'} /></a>
          </div>
        </div>

      </div>

      <p className={'footer__copyright'}>{`© ${texts[currentLang].madeBy}. ${new Date().getFullYear()}`}</p>

    </footer>
  )
}
