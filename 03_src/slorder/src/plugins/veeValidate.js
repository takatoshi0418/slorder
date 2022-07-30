import { ValidationObserver, ValidationProvider, extend, localize } from "vee-validate";
import {required} from 'vee-validate/dist/rules';
import ja from 'vee-validate/dist/locale/ja.json';
import Vue from "vue";

extend('required', required);
localize('ja', ja);

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);

export default {}