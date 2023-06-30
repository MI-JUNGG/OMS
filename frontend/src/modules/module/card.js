import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
    name: "counter",
    initialState: {
        day: [
            {
                cardId: 6,
                title: "test5",
                repeat: 2,
                startDate: "2023-06-03 10:00",
                endDate: "2023-06-03 11:00",
                deadline: null,
                color: "#F7F1FF",
                memo: null,
                link: null,
            },
        ],
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
