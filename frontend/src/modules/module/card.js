import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
    name: "counter",
    initialState: {
        day: [
            {
                cardId: 24,
                color: "#FFFFF",
                deadline: "Invalid Date",
                endDate: "2023-06-11 23:59:59",
                link: null,
                memo: null,
                repeat: 2,
                startDate: "2023-06-11 01:00:00",
                title: "string",
            },
            {
                cardId: 25,
                color: "#FFFFF",
                deadline: "Invalid Date",
                endDate: "2023-06-11 23:59:59",
                link: null,
                memo: null,
                repeat: 2,
                startDate: "2023-06-11 01:00:00",
                title: "string",
            },
            {
                cardId: 26,
                color: "#FFFFF",
                deadline: "Invalid Date",
                endDate: "2023-06-11 23:59:59",
                link: null,
                memo: null,
                repeat: 2,
                startDate: "2023-06-11 01:00:00",
                title: "string",
            },
        ],
        week: [
            {
                cardId: 6,
                title: "test5",
                repeat: 2,
                start: "2023-06-18 03:00:00",
                end: "2023-06- 04:00:00",
                deadline: null,
                memo: null,
                link: null,
            },
        ],
        month: [],
    },

    reducers: {
        addCard: (state, action) => {
            console.log(action.payload);
            console.log(1);
            const { cardType, cardData } = action.payload;
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
