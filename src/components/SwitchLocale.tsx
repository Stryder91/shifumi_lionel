import React from 'react';
import i18n from 'i18next';

export const SwitchLocale = () => {
  const _handleLanguageChange = () => i18n.changeLanguage(i18n.language === 'fr-FR' ? 'EN' : 'fr-FR')
  return <div onClick={_handleLanguageChange} className="flex items-center mx-2 font-bold cursor-pointer">{i18n.language === 'EN' ? 'EN' : 'FR'}</div>
}