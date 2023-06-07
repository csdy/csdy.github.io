import './style.css';

import '@fortawesome/fontawesome-free/scss/fontawesome.scss';
import '@fortawesome/fontawesome-free/scss/solid.scss';
import '@fortawesome/fontawesome-free/scss/brands.scss';

import moment from 'moment/moment';
const age = moment().diff(moment('1983-08-24'), 'years');
document.querySelector('#age').innerHTML = age + '-year-old';
