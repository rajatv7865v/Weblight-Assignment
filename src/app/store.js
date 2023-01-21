import { configureStore } from '@reduxjs/toolkit'
import pagenumber from './pagination'
export default configureStore({
  reducer: {page:pagenumber}
})