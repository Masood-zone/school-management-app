import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import persistReducer from "redux-persist/lib/persistReducer";
import storage from "redux-persist/lib/storage";
import adminReducer from "../slice/admins/adminSlice";
import studentsReducer from "../slice/students/studentsSlice";
import classesReducer from "../slice/class/classSlice";
import paymentReducer from "../slice/payments/paymentSlice";
import attendanceReducer from "../slice/attendance/attendanceSlice";

const persistConfig = {
  key: "root",
  storage,
};

const persistedAdminReducer = persistReducer(persistConfig, adminReducer);

const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),

  reducer: {
    admins: persistedAdminReducer,
    students: studentsReducer,
    classes: classesReducer,
    payments: paymentReducer,
    attendances: attendanceReducer,
  },
});

export const persistor = persistStore(store);

export default store;
