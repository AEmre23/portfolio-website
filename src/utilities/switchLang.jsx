import React, { useLayoutEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next';
import Turkey from '../assets/Turkey.png'
import USA from '../assets/USA.png'

const SwitchLang = ({ setChange, change, className }) => {
  const { i18n } = useTranslation();
  const inputRef = useRef()

  useLayoutEffect(() => {
    if (localStorage.getItem('lang') === 'tr') {
      inputRef.current.checked = true
      i18n.changeLanguage("tr")
    }
  }, []);

  const handleLang = e => {
    if (e.target.checked) {
      localStorage.setItem('lang', 'tr')
      i18n.changeLanguage("tr")
    }
    else {
      localStorage.setItem('lang', 'en')
      i18n.changeLanguage("en")
    }
  }

  return (
    <label onChange={(e) => { setChange && setChange(!change); handleLang(e) }} className={`${className} switch m:scale-90`}>
      <img className='Turkey' src={Turkey} alt='Turkey-icon' />
      <img className='USA' src={USA} alt='USA-icon' />
      <input ref={inputRef} type="checkbox" />
      <span className="slider round"></span>
    </label>
  )
}

export default SwitchLang
