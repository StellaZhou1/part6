const initialState = 'You good!'

const reducer = (state = initialState, action) => {
switch (action.type) {
    case 'SET':
        return action.notification
    case 'NULL':
        return ''
}
return state
}

export default reducer