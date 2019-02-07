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
     * Meteor error object
     */
    private exception: MeteorError;

    /**
     * Error formatter constructor
     *
     * @param meteorError
     */
    constructor(meteorError: MeteorError) {
        this.exception = meteorError;
    }

    /**
     * Error reason
     */
    public get reason() {
        return this.exception.reason;
    }

    /**
     * User friendly error message.
     */
    public get message() {
        return this.reason || `Unexpected error occurred! [${this.exception.error}]`;
    }

}