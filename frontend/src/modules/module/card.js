import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
    name: "counter",
    initialState: {
        day: [
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
            const { cardType, cardData } = action.payload;
            if (cardType === "day") {
                state.day.push(cardData);
            }
            if (cardType === "week") {
                state.day.push(cardData);
            }
            if (cardType === "month") {
                state.day.push(cardData);
            }
        },
        removeCard: (state, action) => {},
    },
});

export const { addCard, removeCard } = cardSlice.actions;

export default cardSlice.reducer;
