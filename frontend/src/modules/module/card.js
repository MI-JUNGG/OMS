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
                cardId: 24,
                color: "green",
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
                color: "blue",
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
                color: "red",
                deadline: "Invalid Date",
                endDate: "2023-06-11 23:59:59",
                link: null,
                memo: null,
                repeat: 2,
                startDate: "2023-06-11 01:00:00",
                title: "string",
            },
        ],
        month: [],
    },

    reducers: {
        addCard: (state, action) => {
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
