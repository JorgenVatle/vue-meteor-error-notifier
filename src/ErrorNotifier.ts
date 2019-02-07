import ErrorFormatter, { MeteorError } from './ErrorFormatter';
import { Vue } from 'vue/types/vue';

export default class ErrorNotifier {

    /**
     * Formatted error.
     */
    error: ErrorFormatter;

    /**
     * Vue instance.
     */
    vue: Vue;

    /**
     * Error Notifier constructor.
     *
     * @param error
     * @param vue
     */
    constructor(error: MeteorError, vue: Vue) {
        this.error = new ErrorFormatter(error);
        this.vue = vue;
    }

    /**
     * Emit native error notification for the current error.
     */
    public notifyNative() {
        alert(this.error.messages.join('\n'));
    }

    /**
     * Emit SweetAlert notification for the current error.
     */
    public notifySweetalert() {
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
    public notifyBuefy() {
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
}