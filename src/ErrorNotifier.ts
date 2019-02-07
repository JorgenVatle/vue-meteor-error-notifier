import ErrorFormatter, { MeteorError } from './ErrorFormatter';

export default class ErrorNotifier {

    /**
     * Formatted error.
     */
    error: ErrorFormatter;

    /**
     * Error Notifier constructor.
     *
     * @param error
     */
    constructor(error: MeteorError) {
        this.error = new ErrorFormatter(error);
    }
}