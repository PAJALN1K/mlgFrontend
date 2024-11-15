declare type RootState = ReturnType<typeof import("src/app/store").store.getState>;
declare type AppDispatch = typeof import("src/app/store").store.dispatch;
