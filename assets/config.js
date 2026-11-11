// One place for the analytics ID and the waitlist endpoint.
window.SWP_CONFIG = {
  ga: '',          // GA4 measurement ID, e.g. G-XXXXXXXXXX
  formAction: 'https://docs.google.com/forms/d/e/1FAIpQLSc6duGgp2PUWemf5q9G0-hZOfdlADhQoOAtMT17WY7YfgH8qQ/formResponse',
  fields: { event: 'entry.1714695734', variant: 'entry.423491897', email: 'entry.430977467', source: 'entry.1990850214' }
};

window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
if (window.SWP_CONFIG.ga) {
  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + window.SWP_CONFIG.ga;
  document.head.appendChild(s);
  gtag('js', new Date());
  gtag('config', window.SWP_CONFIG.ga);
}
