import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Calendar from 'react-calendar';
import { format, addDays, setHours, setMinutes } from 'date-fns';
import { HiX, HiCheckCircle, HiExclamationCircle } from 'react-icons/hi';
import { sendBookingConfirmation } from '../services/emailService';
import 'react-calendar/dist/Calendar.css';
import './BookingCalendar.css';

const BookingCalendar = ({ isOpen, onClose }) => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        phone: '',
        product: 'LeadGen AI',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'
    const [errors, setErrors] = useState({});

    // Generate time slots (9 AM - 6 PM, 30-min intervals)
    const generateTimeSlots = () => {
        const slots = [];
        for (let hour = 9; hour < 18; hour++) {
            for (let minute of [0, 30]) {
                const time = setMinutes(setHours(new Date(), hour), minute);
                const timeString = format(time, 'h:mm a');
                slots.push(timeString);
            }
        }
        return slots;
    };

    const timeSlots = generateTimeSlots();

    const products = [
        'LeadGen AI',
        'ScoreSense',
        'SDR Boost',
        'FlowForge',
        'PersonaX',
    ];

    // Disable weekends and past dates
    const tileDisabled = ({ date }) => {
        const day = date.getDay();
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        return day === 0 || day === 6 || date < today;
    };

    const handleDateChange = (date) => {
        setSelectedDate(date);
        setSelectedTime(''); // Reset time when date changes
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        // Clear error for this field
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: '' }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }
        if (!formData.company.trim()) newErrors.company = 'Company is required';
        if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
        if (!selectedDate) newErrors.date = 'Please select a date';
        if (!selectedTime) newErrors.time = 'Please select a time slot';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        setIsSubmitting(true);
        setSubmitStatus(null);

        const bookingData = {
            ...formData,
            date: format(selectedDate, 'MMMM dd, yyyy'),
            time: selectedTime,
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        };

        // Send email
        const result = await sendBookingConfirmation(bookingData);

        setIsSubmitting(false);

        if (result.success) {
            setSubmitStatus('success');
            // Reset form after 3 seconds
            setTimeout(() => {
                handleClose();
            }, 3000);
        } else {
            setSubmitStatus('error');
        }
    };

    const handleClose = () => {
        setSelectedDate(null);
        setSelectedTime('');
        setFormData({
            name: '',
            email: '',
            company: '',
            phone: '',
            product: 'LeadGen AI',
        });
        setErrors({});
        setSubmitStatus(null);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                className="booking-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={handleClose}
            >
                <motion.div
                    className="booking-modal glass-card"
                    initial={{ opacity: 0, scale: 0.9, y: 50 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 50 }}
                    transition={{ duration: 0.3 }}
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Header */}
                    <div className="booking-header">
                        <h2>
                            Schedule Your <span className="gradient-text">Demo</span>
                        </h2>
                        <button className="close-btn" onClick={handleClose} aria-label="Close">
                            <HiX />
                        </button>
                    </div>

                    {/* Success/Error Messages */}
                    {submitStatus === 'success' && (
                        <motion.div
                            className="status-message success"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <HiCheckCircle />
                            <p>Demo booked successfully! Check your email for confirmation.</p>
                        </motion.div>
                    )}

                    {submitStatus === 'error' && (
                        <motion.div
                            className="status-message error"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <HiExclamationCircle />
                            <p>
                                Booking failed. Please check your email configuration or try again later.
                            </p>
                        </motion.div>
                    )}

                    {/* Form Content */}
                    {submitStatus !== 'success' && (
                        <form className="booking-form" onSubmit={handleSubmit}>
                            {/* Product Selection */}
                            <div className="form-group">
                                <label htmlFor="product">Select Product *</label>
                                <select
                                    id="product"
                                    name="product"
                                    value={formData.product}
                                    onChange={handleInputChange}
                                    className="form-input"
                                >
                                    {products.map((product) => (
                                        <option key={product} value={product}>
                                            {product}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Calendar */}
                            <div className="form-group">
                                <label>Select Date *</label>
                                <div className="calendar-wrapper">
                                    <Calendar
                                        onChange={handleDateChange}
                                        value={selectedDate}
                                        minDate={new Date()}
                                        maxDate={addDays(new Date(), 60)}
                                        tileDisabled={tileDisabled}
                                    />
                                </div>
                                {errors.date && <span className="error-text">{errors.date}</span>}
                            </div>

                            {/* Time Slots */}
                            {selectedDate && (
                                <motion.div
                                    className="form-group"
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <label>Select Time *</label>
                                    <div className="time-slots">
                                        {timeSlots.map((slot) => (
                                            <button
                                                key={slot}
                                                type="button"
                                                className={`time-slot ${selectedTime === slot ? 'selected' : ''
                                                    }`}
                                                onClick={() => {
                                                    setSelectedTime(slot);
                                                    if (errors.time) setErrors((prev) => ({ ...prev, time: '' }));
                                                }}
                                            >
                                                {slot}
                                            </button>
                                        ))}
                                    </div>
                                    {errors.time && <span className="error-text">{errors.time}</span>}
                                </motion.div>
                            )}

                            {/* User Information */}
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="name">Name *</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className={`form-input ${errors.name ? 'error' : ''}`}
                                        placeholder="John Doe"
                                    />
                                    {errors.name && <span className="error-text">{errors.name}</span>}
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Email *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className={`form-input ${errors.email ? 'error' : ''}`}
                                        placeholder="john@company.com"
                                    />
                                    {errors.email && <span className="error-text">{errors.email}</span>}
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="company">Company *</label>
                                    <input
                                        type="text"
                                        id="company"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleInputChange}
                                        className={`form-input ${errors.company ? 'error' : ''}`}
                                        placeholder="Company Name"
                                    />
                                    {errors.company && <span className="error-text">{errors.company}</span>}
                                </div>

                                <div className="form-group">
                                    <label htmlFor="phone">Phone *</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        className={`form-input ${errors.phone ? 'error' : ''}`}
                                        placeholder="+91 123 456 7890"
                                    />
                                    {errors.phone && <span className="error-text">{errors.phone}</span>}
                                </div>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="btn btn-primary submit-btn"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    <>
                                        <span className="spinner"></span>
                                        Booking...
                                    </>
                                ) : (
                                    'Confirm Booking'
                                )}
                            </button>
                        </form>
                    )}
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default BookingCalendar;
