import { createSlice } from "@reduxjs/toolkit"
export const Videoslice= createSlice({
    name: 'video',
    initialState: ({}),
    reducers: {
    addrecomvideo: (state,action)=>{
state.recomvideo = action.payload;
    }
    }
})
export const {addrecomvideo} = Videoslice.actions;
export default Videoslice.reducer;