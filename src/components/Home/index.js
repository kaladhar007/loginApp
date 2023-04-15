import {Component} from 'react'
import './index.css'
import Message from '../Message/index'
import Login from '../Login'
import Logout from '../Logout'

class Home extends Component {
  state = {isLogin: false}

  onClickToggle = () => {
    this.setState(preState => ({isLogin: !preState.isLogin}))
  }

  render() {
    const {isLogin} = this.state
    return (
      <div className="page">
        <div className="container">
          <div className="content">
            <Message text={isLogin ? 'Welcome User' : 'Please Login'} />
            {isLogin ? (
              <Logout onClickToggle={this.onClickToggle} />
            ) : (
              <Login onClickToggle={this.onClickToggle} />
            )}
          </div>
        </div>
      </div>
    )
  }
}
export default Home
