import { Vue } from 'vue/types/vue';

interface MeteorError {
    error: {
        /**
         * Error description.
         */
        reason?: string,

        /**
         * Error Code
         */
        error: string,

        /**
         * Form validation errors.
         */
        details?: Array<{message: string}>

        /**
         * Error type
         */
        errorType: string,
    }
}

interface VueMeteorErrorNotificationOptions {
    notifier: 'native' | 'buefy' | 'sweetalert2';
}

export default {
    install(Vue: Vue, { notifier = 'native' }: VueMeteorErrorNotificationOptions) {

    }
}