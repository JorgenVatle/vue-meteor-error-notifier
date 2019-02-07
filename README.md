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

// Make sure this is placed after Vue.use(Buefy) or Vue.use(VueSweetalert2)
Vue.use(VueMeteorErrorNotifier, {
    notifier: 'sweetalert2' // Can be one of 'native', 'sweetalert2' or 'buefy'
});
```

## Use
```js
export default {
    methods: {
        someVueMethod() {
            Meteor.call('some.meteor.method', (err, resp) => {
                if (err) {
                    return this.$notifyError(err); // Formats and spits out a user friendly error notification
                }
               
                // Continue method here
            });
        }
    }
}
```

## Notification Interfaces
Errors can be emitted using either native `alert()` notifications, or using a pre-existing notification library like the
[Toast](https://buefy.github.io/documentation/toast/) notifications bundled with Buefy or 
[Sweetalert](https://sweetalert2.github.io/)'s Toast notifications.

As native `alert()` notifications blocks the user interface until input is received from the user, I'd recommend
using installing (if not already installed) either [Buefy](https://buefy.github.io/#/) or 
[Vue-Sweetalert2](https://github.com/avil13/vue-sweetalert2). Then specify the interface you want to use in the 
[`Vue.use()`](#import) options specified above.

## License
This repository is licensed under the ISC license.

Copyright (c) 2019, Jørgen Vatle.