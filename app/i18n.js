/**
 * i18n.js
 *
 * This will setup the i18n language files and locale data for your app.
 *
 */
import { addLocaleData } from 'react-intl';
import { DEFAULT_LOCALE } from './containers/App/constants'; // eslint-disable-line

import enLocaleData from 'react-intl/locale-data/en';
import frLocaleData from 'react-intl/locale-data/fr';

export const appLocales = [
  'en',
  'fr',
];

import enTranslationMessages from './translations/en.json';
import frTranslationMessages from './translations/fr.json';

addLocaleData(enLocaleData);
addLocaleData(frLocaleData);

export const formatTranslationMessages = (locale, messages) => {
  const defaultFormattedMessages = locale !== DEFAULT_LOCALE ? formatTranslationMessages(DEFAULT_LOCALE, enTranslationMessages) : {};
  const formattedMessages = {};
  const messageKeys = Object.keys(messages);
  for (const messageKey of messageKeys) {
    if (locale === DEFAULT_LOCALE) {
      formattedMessages[messageKey] = messages[messageKey];
    } else {
      formattedMessages[messageKey] = messages[messageKey] || defaultFormattedMessages[messageKey];
    }
  }

  return formattedMessages;
};

export const translationMessages = {
  en: formatTranslationMessages('en', enTranslationMessages),
  fr: formatTranslationMessages('fr', frTranslationMessages),
};
