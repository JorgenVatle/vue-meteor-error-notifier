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
}