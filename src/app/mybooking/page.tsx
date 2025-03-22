'use client';

import BookingList from "@/components/BookingList";

export default function MyBooking() {
    return (
        <main className="min-h-screen">
            <div className="p-8">
                <h1 className="text-2xl font-bold mb-6">My Venue Bookings</h1>
                <BookingList />
            </div>
        </main>
    );
} 