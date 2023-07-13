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

            if (cardType === "day") {
                state.day.push(...cardData);
            }
            if (cardType === "week") {
                state.week.push(...cardData);
            }
            if (cardType === "month") {
                cardData.forEach((card) => {
                    const existingCard = state.month.find(
                        (c) => c.cardId === card.cardId,
                    );
                    if (!existingCard) {
                        state.month.push(card);
                    }
                });
            }
        },
    },
});

export const { addCard, removeCard } = cardSlice.actions;

export default cardSlice.reducer;
