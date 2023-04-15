import './index.css'

const Logout = props => {
  const {onClickToggle} = props

  const onClickBtn = () => {
    onClickToggle()
  }

  return (
    <button onClick={onClickBtn} type="button">
      Logout
    </button>
  )
}

export default Logout
