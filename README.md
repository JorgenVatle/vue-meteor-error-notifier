# Vue-Meteor Error Notifier
A utility for formatting error objects passed down from Meteor to the client into a user friendly notification.
Supports native `alert()` notifications, as well as [Buefy](https://buefy.github.io/#/) and
[Vue-Sweetalert2](https://github.com/avil13/vue-sweetalert2#readme) toast notifications.

## Install
```sh
npm install vue-meteor-error-notifier
```

## Import
```js
import Vue from 'vue';
import VueMeteorErrorNotifier from 'vue-meteor-error-notifier';

Vue.use(VueMeteorErrorNotifier, {
    notifier: 'sweetalert2' // Can be one of 'native', 'sweetalert2' or `buefy`
});
```