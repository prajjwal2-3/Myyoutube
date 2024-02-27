import { createSlice } from "@reduxjs/toolkit"
export const Videoslice= createSlice({
    name: 'video',
    initialState: ({}),
    reducers: {
    addrecomvideo: (state,action)=>{
state.recomvideo = action.payload;
    },
    addrecomchannel: (state,action)=>{
        state.recomchannel = action.payload;
            }
    }
})
export const {addrecomvideo,addrecomchannel} = Videoslice.actions;
export default Videoslice.reducer;