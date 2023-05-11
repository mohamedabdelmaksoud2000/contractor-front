import { ToDarkMode, ToLightMode } from "../Type"

const inetelState = {
    mode: true,
}


export const DarkModeReducer = (state = inetelState, action) => {
    switch (action.type) {
        case ToDarkMode:
            return { mode: state.mode = true }
        case ToLightMode:
            return { mode: state.mode = false }
        default:
            return state
    }
}