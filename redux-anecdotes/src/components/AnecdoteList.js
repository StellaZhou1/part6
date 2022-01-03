import { useSelector, useDispatch } from 'react-redux'
const AnecdoteList = () =>{
    const anecdotes = useSelector(state => state.anecdotes)
    const dispatch = useDispatch()
    const vote = (id) => {
        dispatch({type: 'VOTE',anecdote:{id:id}})
        console.log('vote', id)
    }
    return (
        <div>
             {anecdotes.sort(function (a, b) {
                return b.votes - a.votes
            })
            .map(anecdote =>
                <div key={anecdote.id}>
                    <div>
                        {anecdote.content}
                    </div>
                    <div>
                        has {anecdote.votes}
                        <button onClick={() => vote(anecdote.id)}>vote</button>
                    </div>
                </div>
            )}
        </div>
    )
}
export default AnecdoteList