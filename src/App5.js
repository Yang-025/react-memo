import React, {useState, useCallback} from 'react'
import './App.css'

function areEqual(prevProps, nextProps) {
  /*
  return true if passing nextProps to render would return
  the same result as passing prevProps to render,
  otherwise return false
  */
  if (prevProps.content === nextProps.content) {
    return true
  }
}

const Input = React.memo(function Input(props) {
  const {content, setContent} = props
  console.log('Input', content)
  return (
    <div className="input">
      <input onChange={e => setContent(content, e.target.value)} />
      {content}
    </div>
  )
}, areEqual)

function App() {
  const fakeData = Array.from([...Array(1000).keys()])
  const [data, setData] = useState(fakeData)
  const handleSetData = (value, newValue) => {
    const updatedData = data.map(dataValue => {
      return dataValue === value ? newValue : dataValue
    })
    setData(updatedData)
  }
  return (
    <div className="App">
      {data.map((value, index) => {
        return <Input content={value} setContent={handleSetData} />
      })}
    </div>
  )
}

export default App
