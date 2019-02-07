import ErrorFormatter from './ErrorFormatter';
import { Vue } from 'vue/types/vue';
import { MeteorError, NotificationInterfaces } from './interfaces';

interface AvailableInterfaces {
    ['buefy']: boolean,
    ['native']: boolean,
    ['sweetalert2']: boolean,
}

export default class ErrorNotifier {

    /**
     * Formatted error.
     */
    error: ErrorFormatter;

    /**
     * Vue instance.
     */
    vue: typeof Vue;

    /**
     * Error Notifier constructor.
     *
     * @param error
     * @param vue
     */
    constructor(error: MeteorError, vue: typeof Vue) {
        this.error = new ErrorFormatter(error);
        this.vue = vue;
    }

    /**
     * Emit native error notification for the current error.
     */
    public native() {
        alert(this.error.messages.join('\n'));
    }

    /**
     * Emit SweetAlert notification for the current error.
     */
    public sweetalert2() {
        // @ts-ignore
        this.vue.$swal({
            type: 'error',
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 5000,
            message: this.error.messages.join('\n,'),
        })
    }

    /**
     * Emit a Buefy notification for the current error.
     */
    public buefy() {
        this.error.messages.forEach((message: string) => {
            // @ts-ignore
            this.vue.$toast.open({
                message,
                position: 'is-top-right',
                type: 'is-danger',
                queue: false,
                duration: 5000,
            })
        });
    }

    /**
     * Available notification interfaces.
     */
    public static availableInterfaces(vue: typeof Vue): AvailableInterfaces {
        return {
            alert: typeof alert === 'function',

            // @ts-ignore
            sweetalert2: typeof vue.$swal === 'function',

            // @ts-ignore
            buefy: typeof vue.$toast === 'object',
        }
    }

    /**
     * Check if the given notification interface is available.
     *
     * @param vue
     * @param notifier
     */
    public static isAvailable(vue: typeof Vue, notifier: NotificationInterfaces): boolean {
        return this.availableInterfaces(vue)[notifier];
    }
}