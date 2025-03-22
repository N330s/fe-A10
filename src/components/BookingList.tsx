'use client';

import { useSelector, useDispatch } from 'react-redux';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { removeBooking } from '@/redux/features/bookSlice';
import { RootState } from '@/redux/store';

interface BookItem {
    nameLastname: string;
    tel: string;
    venue: string;
    bookDate: string;
}

export default function BookingList() {
    const dispatch = useDispatch();
    const bookings = useSelector((state: RootState) => state.bookSlice?.bookItems || []);

    const handleCancelBooking = (booking: BookItem) => {
        dispatch(removeBooking(booking));
    };

    if (!bookings || bookings.length === 0) {
        return (
            <div className="p-8 text-center">
                <h2 className="text-xl font-semibold">No Venue Booking</h2>
            </div>
        );
    }

    return (
        <div className="p-8">
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name-Lastname</TableCell>
                            <TableCell>Contact Number</TableCell>
                            <TableCell>Venue</TableCell>
                            <TableCell>Booking Date</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {bookings.map((booking: BookItem, index: number) => (
                            <TableRow key={index}>
                                <TableCell>{booking.nameLastname}</TableCell>
                                <TableCell>{booking.tel}</TableCell>
                                <TableCell>{booking.venue}</TableCell>
                                <TableCell>{booking.bookDate}</TableCell>
                                <TableCell>
                                    <Button
                                        variant="outlined"
                                        color="error"
                                        onClick={() => handleCancelBooking(booking)}
                                    >
                                        Cancel
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
} 