import { button } from '@material-tailwind/react'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useTranslation } from 'react-i18next';


export const LanguageSelector = () => {
  const {i18n} =useTranslation()
  const changeLanguage = (lng)=>{
    i18n.changeLanguage(lng)
  }
    const languages = [
        {code:'en', lang:'English'},
        {code:'uz', lang:'Uzbek'}
    ]
  return (
  <div className="btn-container flex gap-[20px]">
  {
    languages.map((lng)=>{
        return <a className= {`${lng.code===i18n.language} text-white cursor-pointer` }key={lng.code} onClick={()=>changeLanguage(lng.code)}>{lng.lang}</a>
    })
  }
  </div>
  )
}
export default LanguageSelector