import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
    name: "counter",
    initialState: {
        day: [],
        week: [],
        month: [],
    },

    reducers: {
        addCard: (state, action) => {
            const { cardType, cardData } = action.payload;
            console.log(action.payload);
            if (cardType === "day") {
                state.day.push(...cardData);
            }
            if (cardType === "week") {
                state.week.push(...cardData);
            }
            if (cardType === "month") {
                state.month.push(...cardData);
            }
        },
    },
});

export const { addCard, removeCard } = cardSlice.actions;

export default cardSlice.reducer;
