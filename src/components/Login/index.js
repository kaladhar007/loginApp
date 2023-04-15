import './index.css'

const Login = props => {
  const {onClickToggle} = props

  const onClickBtn = () => {
    onClickToggle()
  }

  return (
    <button onClick={onClickBtn} type="button">
      Login
    </button>
  )
}

export default Login
