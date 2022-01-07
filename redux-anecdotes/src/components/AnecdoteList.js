import { useSelector, useDispatch } from 'react-redux'

const AnecdoteList = () =>{
    const anecdotes = useSelector(state => state.anecdotes)
    const dispatch = useDispatch()
    
    const vote = (id) => {
        let voted
        anecdotes.forEach(a=>{
            if(id===a.id){
                voted = a
            } 
        })
        dispatch({type: 'VOTE',anecdote:{id:id}})
        dispatch({
            type: 'SET',
            notification: `you voted ${voted.content}`
        })
        setTimeout(() => {dispatch({type:'NULL'})}, 5000)
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