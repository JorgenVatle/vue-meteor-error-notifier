import { Vue } from 'vue/types/vue';
import { MeteorError, NotificationInterfaces } from './interfaces';
import ErrorNotifier from './ErrorNotifier';

interface VueMeteorErrorNotificationOptions {
    notifier: NotificationInterfaces;
}

const warn = (message) => {
    console.warn('[VueMeteorErrorNotifier]', message);
};

export default {
    install(vue: typeof Vue, { notifier = 'native' }: VueMeteorErrorNotificationOptions) {
        if (notifier === 'native') {
            warn(
                'You\'re running VueMeteorErrorNotifier in `native` mode.\n' +
                'While this is the default interface, it is not the best for the user experience.\n' +
                'Use an interface like `buefy` or `sweetalert2` for non-blocking notifications that look great.\n\n' +
                'See https://github.com/JorgenVatle/vue-meteor-error-notifier#notification-interfaces for more information.'
            )
        }

        if (!ErrorNotifier.isAvailable(vue, notifier)) {
            warn(
                'The notification interface you specified is not available, or isn\'t being included before\n' +
                'VueMeteorErrorNotifier.\n\n' +
                'See https://github.com/JorgenVatle/vue-meteor-error-notifier#notification-interfaces for more information.'
            )
        }

        vue.prototype.$notifyError = function (error: MeteorError) {
            new ErrorNotifier(error, vue)[notifier]();
        }
    }
}