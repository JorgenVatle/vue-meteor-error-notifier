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
    private error: MeteorError;

    /**
     * Error formatter constructor
     *
     * @param meteorError
     */
    constructor(meteorError: MeteorError) {
        this.error = meteorError;
    }

}