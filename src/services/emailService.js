 * Send demo booking confirmation email
    * @param { Object } bookingData - Booking information
        * @returns { Promise }
 */
export const sendBookingConfirmation = async (bookingData) => {
    try {
        const templateParams = {
            to_name: bookingData.name,
            to_email: bookingData.email,
            company: bookingData.company,
            phone: bookingData.phone,
            product: bookingData.product,
            date: bookingData.date,
            time: bookingData.time,
            timezone: bookingData.timezone,
            message: `Demo booking for ${bookingData.product} on ${bookingData.date} at ${bookingData.time}`,
        };

        const response = await emailjs.send(
            EMAILJS_CONFIG.serviceId,
            EMAILJS_CONFIG.templates.booking,
            templateParams
        );

        return { success: true, response };
    } catch (error) {
        console.error('Email sending failed:', error);
        return { success: false, error };
    }
};

/**
 * Send contact form message
 * @param {Object} formData - Contact form data
 * @returns {Promise}
 */
export const sendContactMessage = async (formData) => {
    try {
        const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            subject: formData.subject,
            message: formData.message,
        };

        const response = await emailjs.send(
            EMAILJS_CONFIG.serviceId,
            EMAILJS_CONFIG.templates.contact,
            templateParams
        );

        return { success: true, response };
    } catch (error) {
        console.error('Email sending failed:', error);
        return { success: false, error };
    }
};

/**
 * Subscribe to newsletter
 * @param {string} email - Subscriber email
 * @returns {Promise}
 */
export const subscribeToNewsletter = async (email) => {
    try {
        const templateParams = {
            to_email: email,
            message: `New newsletter subscription from ${email}`,
        };

        const response = await emailjs.send(
            EMAILJS_CONFIG.serviceId,
            EMAILJS_CONFIG.templates.newsletter,
            templateParams
        );

        return { success: true, response };
    } catch (error) {
        console.error('Email sending failed:', error);
        return { success: false, error };
    }
};

// Export config for reference
export const getEmailConfig = () => EMAILJS_CONFIG;
