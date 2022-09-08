import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { incNum, decNum } from './action'

const App = () => {
  const myState = useSelector((state) => state.changeTheValue)
  const dispatch = useDispatch()
  return (
    <>
      <div
        className="main"
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div className="container" style={{ textAlign: 'center' }}>
          <h1>increment/decrement counter</h1>

          <div className="quantity">
            <a
              className="quantity_minus"
              title="decrement"
              onClick={() => dispatch(decNum())}
            >
              <span>-</span>
            </a>
            <input
              name="quantity"
              type="text"
              className="quantity_input"
              value={myState}
            />
            <a
              className="quantity_minus"
              title="increment"
              onClick={() => dispatch(incNum())}
            >
              <span>+</span>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default App


