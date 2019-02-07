import ErrorFormatter from './ErrorFormatter';
import { Vue } from 'vue/types/vue';
import { MeteorError, NotificationInterfaces } from './interfaces';

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
}