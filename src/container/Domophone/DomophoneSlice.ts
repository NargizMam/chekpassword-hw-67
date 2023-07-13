import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface CalcState {
    password: string;
    passwordBorder: string;
    passwordText: string;
    value: string;
}

const initialState: CalcState = {
    password: '2835',
    passwordBorder: 'border-dark',
    passwordText: '',
    value: '',
};

export const domophoneSlice = createSlice({
    name: 'domophone',
    initialState,
    reducers:{
        changeValue: (state, action: PayloadAction<string>) => {
            if(state.value.length < 4){
                state.value += action.payload;
                state.passwordText += "*";
            }else{
                state.passwordBorder = 'border border-danger';
                return;
            }
        },
        checkPassword: (state) => {
            state.passwordText =''
            if(state.password === state.value){
                state.passwordBorder = 'border-success'
                state.passwordText = 'Access Granted!';
            }else {
                state.passwordText= 'Access Denied!';
                state.passwordBorder = 'border-danger';
            }
        },
        deleteOneNumber: (state) => {
            state.value = state.value.substring(0, state.value.length - 1);
            state.passwordText = state.passwordText.substring(0, state.passwordText.length - 1);
        }
    }
});
export const domophoneReducer = domophoneSlice.reducer;
export const {changeValue, checkPassword, deleteOneNumber} = domophoneSlice.actions;
