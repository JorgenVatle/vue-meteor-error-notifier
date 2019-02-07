import { Vue } from 'vue/types/vue';
import { NotificationInterfaces } from './interfaces';

interface VueMeteorErrorNotificationOptions {
    notifier: NotificationInterfaces;
}

export default {
    install(Vue: Vue, { notifier = 'native' }: VueMeteorErrorNotificationOptions) {
        if (notifier === 'native') {
            console.warn(
                'You\'re running VueMeteorErrorNotifier in `native` mode.\n' +
                'While this is the default interface, it is not the best for the user experience.' +
                'Use an interface like `buefy` or `sweetalert2` for non-blocking notifications that look great.\n\n' +
                'See https://github.com/JorgenVatle/vue-meteor-error-notifier#notification-interfaces for more information.'
            )
        }
    }
}