'use client'

import { TextField, Select, MenuItem, Button, SelectChangeEvent } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { Dayjs } from "dayjs";
import { addBooking } from "@/redux/features/bookSlice";
import BookingList from "@/components/BookingList";

interface FormData {
    name: string;
    contact: string;
    venue: string;
    date: Dayjs | null;
}

export default function Booking() {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState<FormData>({
        name: '',
        contact: '',
        venue: '',
        date: null
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (formData.date) {
            dispatch(addBooking({
                nameLastname: formData.name,
                tel: formData.contact,
                venue: formData.venue,
                bookDate: formData.date.format('YYYY/MM/DD')
            }));
            // Reset form
            setFormData({
                name: '',
                contact: '',
                venue: '',
                date: null
            });
        }
    };

    const handleTextFieldChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSelectChange = (e: SelectChangeEvent) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <main className="p-8">
            <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
                <TextField 
                    fullWidth
                    variant="standard" 
                    name="name" 
                    label="Name-Lastname"
                    value={formData.name}
                    onChange={handleTextFieldChange}
                />
                <TextField 
                    fullWidth
                    variant="standard" 
                    name="contact" 
                    label="Contact-Number"
                    value={formData.contact}
                    onChange={handleTextFieldChange}
                />
                <Select
                    fullWidth
                    id="venue"
                    name="venue"
                    value={formData.venue}
                    onChange={handleSelectChange}
                    variant="standard"
                >
                    <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>
                    <MenuItem value="Spark">Spark Space</MenuItem>
                    <MenuItem value="GrandTable">The Grand Table</MenuItem>
                </Select>
                <DatePicker
                    label="Booking Date"
                    value={formData.date}
                    onChange={(newValue) => setFormData(prev => ({ ...prev, date: newValue }))}
                    slotProps={{ textField: { fullWidth: true, variant: "standard" } }}
                />
                <Button 
                    type="submit"
                    name="Book Venue"
                    variant="contained"
                    color="primary"
                    fullWidth
                    className="mt-4"
                >
                    Book Venue
                </Button>
            </form>
            <div className="mt-8">
                <BookingList />
            </div>
        </main>
    );
}