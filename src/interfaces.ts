export interface MeteorError {
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

export type NotificationInterfaces = 'native' | 'buefy' | 'sweetalert2';