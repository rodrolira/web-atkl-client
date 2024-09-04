import React from 'react'
import { useTranslation } from 'react-i18next'
import { useLanguage } from '../../contexts/LanguageContext'

const LanguageSelector = () => {
  const { t } = useTranslation()
  const { changeLanguage } = useLanguage()

  const handleChangeLanguage = newLanguage => {
    changeLanguage(newLanguage)
  }

  return (
    <div>
      <button onClick={() => handleChangeLanguage('en')}>{t('english')}</button>
      <button onClick={() => handleChangeLanguage('es')}>{t('spanish')}</button>
    </div>
  )
}

export default LanguageSelector
