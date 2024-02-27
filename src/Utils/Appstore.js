import {configureStore} from '@reduxjs/toolkit'
import usereducer from './Videoslice'
export const store= configureStore({
    reducer:{
          video: usereducer,
    }
})