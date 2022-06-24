import { connect } from 'react-redux'

function Title(props) {
  return (
    <div className="card-title">
      <div className="card-title-top">
        <input type="text" onChange={props.onChangeValue}/>
      </div>
      <p>{props.valueUser}</p>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    valueUser: state.titleReducer.valueUser,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onChangeValue: (event) => {
      const action = { type: 'ONCHANGE', value: event.target.value }
      dispatch(action)
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Title)
