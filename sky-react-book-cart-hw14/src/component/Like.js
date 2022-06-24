import { connect } from 'react-redux'
import Title from './Title'

function Likes(props) {
  
  return (
    <div>
      <Title/>
      <div className="button-controls">
        <button onClick={props.onIncrement}> ❤ {props.likes} </button>
        <button onClick={props.onDecrement}>Dislike</button>
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    likes: state.likeReducer.likes,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onIncrement: () => {
      const action = { type: 'INCREMENT' }
      dispatch(action)
    },
    onDecrement: () => {
      const action = { type: 'DECREMENT' }
      dispatch(action)
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Likes)
