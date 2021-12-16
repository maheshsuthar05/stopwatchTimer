const initialState = {
    time : { ms: 0, s: 0, m: 0, h: 0 }
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case 'UPDATE_TIMER':
        return { ...state, time : Object.assign(state.time, {ms: payload.ms, s: payload.s, m: payload.m, h: payload.h}) }

    default:
        return state
    }
}
