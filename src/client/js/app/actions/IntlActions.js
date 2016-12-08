import { updateIntl } from 'react-intl-redux';

const locales = {
  en: () => require('react-intl?locale=en!./lang/en.json'),
  es: () => require('react-intl?locale=es!./lang/es.json')
};

const loadLocaleData = locale =>
  new Promise( resolve =>
    locales[locale]()(resolve)
  );

export const loadLocale = locale =>
  dispatch =>
    loadLocaleData(locale).then( messages => {
      dispatch(updateIntl({locale, messages}));
    });
