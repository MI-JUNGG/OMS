import { createSlice } from "@reduxjs/toolkit";
function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
}

const dateSlice = createSlice({
    name: "counter",
    initialState: { year: null, month: null, day: null },
    reducers: {
        addDate: (state, action) => {
            return {
                ...state,
                year: action.payload,
            };
        },
        addMonth: (state, action) => {
            return {
                ...state,
                month: action.payload,
            };
        },
        addDay: (state, action) => {
            return {
                ...state,
                day: action.payload,
            };
        },
        PlusY: (state) => {
            return {
                ...state,
                year: state.year + 1,
            };
        },
        PlusM: (state) => {
            return {
                ...state,
                month: state.month + 1,
            };
        },
        PlusD: (state) => {
            const daysInMonth = getDaysInMonth(state.year, state.month);
            const day = state.day + 1;
            const adjustedDay = day > daysInMonth ? 1 : day;

            return {
                ...state,
                day: adjustedDay,
            };
        },
        minusY: (state) => {
            return {
                ...state,
                year: state.year - 1,
            };
        },
        minusM: (state) => {
            return {
                ...state,
                month: state.month - 1,
            };
        },
        minusD: (state) => {
            const daysInPreviousMonth = getDaysInMonth(
                state.year,
                state.month - 1,
            );
            const day = state.day - 1;
            const adjustedDay = day < 1 ? daysInPreviousMonth : day;

            return {
                ...state,
                day: adjustedDay,
            };
        },
    },
});

export const {
    addDate,
    addDay,
    addMonth,
    PlusD,
    PlusM,
    PlusY,
    minusY,
    minusM,
    minusD,
} = dateSlice.actions;

export default dateSlice.reducer;
