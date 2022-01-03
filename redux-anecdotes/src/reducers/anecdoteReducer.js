
const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const incrementVote = (state,id) => {
  let newState = []
  state.forEach((s)=>{
    if (s.id===id){
      newState.push({
        content:s.content,
        id:s.id,
        votes:s.votes+1
      })
    }
    else{
      newState.push(s)
    }
  })
  return newState
}

export const createAnecdote = (content) => {
  const action = {
    type: 'NEW_ANECDOTE',
    data: asObject(content)
  }
  return action
}

const initialState = anecdotesAtStart.map(asObject)


const reducer = (state = initialState, action) => {
  console.log('state now: ', state)
  console.log('action', action)
  switch (action.type) {
    case 'VOTE':
      return incrementVote(state,action.data.id)
    case 'NEW_ANECDOTE':
      return [...state,action.data]
  }
  return state
}

export default reducer