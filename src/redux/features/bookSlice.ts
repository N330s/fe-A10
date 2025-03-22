import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Dayjs } from 'dayjs';

interface BookItem {
    nameLastname: string;
    tel: string;
    venue: string;
    bookDate: string;
}

interface BookState {
    bookItems: BookItem[];
}

const initialState: BookState = {
    bookItems: []
};

export const bookSlice = createSlice({
    name: 'bookSlice',
    initialState,
    reducers: {
        addBooking: (state, action: PayloadAction<BookItem>) => {
            if (state.bookItems.length < 2) {
                state.bookItems.push(action.payload);
            } else {
                // Replace the oldest booking (first in array) with the new one
                state.bookItems = [state.bookItems[1], action.payload];
            }
        },
        removeBooking: (state, action: PayloadAction<BookItem>) => {
            state.bookItems = state.bookItems.filter(item => 
                !(item.nameLastname === action.payload.nameLastname &&
                item.bookDate === action.payload.bookDate &&
                item.venue === action.payload.venue)
            );
        }
    }
});

export const { addBooking, removeBooking } = bookSlice.actions;
export default bookSlice.reducer;
