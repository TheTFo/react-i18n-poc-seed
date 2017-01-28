import i18n from 'i18next';

i18n.init({
  lng: 'en',
  resources: {
    en: {
      common: {
        key: 'hello world'
      }
    }
  }
});

export default i18n;