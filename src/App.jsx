import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import BookingCalendar from './components/BookingCalendar';
import './App.css';

function App() {
    const [isBookingOpen, setIsBookingOpen] = useState(false);

    const openBooking = () => setIsBookingOpen(true);
    const closeBooking = () => setIsBookingOpen(false);

    return (
        <div className="App">
            <ScrollProgress />
            <Navbar />
            <main>
                <Hero />
                <Products />
                <Features />
                <Testimonials />
                <CTA openBooking={openBooking} />
            </main>
            <Footer />

            {/* Booking Calendar Modal */}
            <BookingCalendar isOpen={isBookingOpen} onClose={closeBooking} />
        </div>
    );
}

export default App;
