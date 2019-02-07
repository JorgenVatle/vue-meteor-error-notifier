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