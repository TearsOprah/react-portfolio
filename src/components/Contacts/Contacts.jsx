import texts from "../../utils/texts.js";
import socialLinks from "../../utils/links.js";
import "./Contacts.scss";

export default function Contacts({currentLang}) {
  return (
    <div className={'contacts'}>
      <h2 className={'contacts__title'}>{texts[currentLang].contacts}</h2>
      <p className={'contacts__description'}>{texts[currentLang].contactsMessage}</p>
      <div className={'contacts__block'}>
        <h3 className={'contacts__list-title'}>{texts[currentLang].messageMeHere}</h3>
        <div className={'contacts__links'}>
          {socialLinks.map((link, i) =>
            <div key={i} className={'contacts__links-item'}>
              <img className={'contacts__link-image'} src={link[1]}/>
              <p className={'contacts__link'}>{link[0]}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
