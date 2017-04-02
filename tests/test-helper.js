import resolver from './helpers/resolver';
import {
  setResolver
} from 'ember-qunit';

setResolver(resolver);

window.$.fn.modal.settings.context = "#ember-testing";
