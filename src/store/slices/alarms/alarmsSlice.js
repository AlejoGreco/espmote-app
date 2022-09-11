import { createSlice } from "@reduxjs/toolkit"

export const alarmsSlice = createSlice({
    name: 'Alarms',
    initialState: {
        activeAlarm: {},
        alarmsConfig: [],
        alarmsLog: []
    },
    reducers: { }
})

