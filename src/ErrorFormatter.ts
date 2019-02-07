interface MeteorError {
    /**
     * Error description.
     */
    reason?: string,

    /**
     * Error Code
     */
    error: number,

    /**
     * Form validation errors.
     */
    details?: Array<{message: string}>

    /**
     * Error type
     */
    errorType: string,
}

export default class ErrorFormatter {

    /**
     * Meteor error object.
     */
    private exception: MeteorError;

    /**
     * Error formatter constructor.
     *
     * @param meteorError
     */
    constructor(meteorError: MeteorError) {
        this.exception = meteorError;
    }

    /**
     * Error reason.
     */
    public get reason() {
        return this.exception.reason;
    }

    /**
     * Form validation error messages.
     */
    public get formErrors() {
        if (typeof this.exception.details !== 'object') {
            return [];
        }

        if (!this.exception.details.length) {
            return [];
        }

        return this.exception.details.map((field) => field.message);
    }

    /**
     * User friendly error message.
     */
    public get message() {
        return this.reason || `Unexpected error occurred! [${this.exception.error}]`;
    }

    /**
     * Collection of error messages for the current error.
     */
    public get messages() {
        return this.formErrors.length
            ? this.formErrors
            : [this.message];
    }

}