import React, {useState, useCallback} from 'react'
import './App.css'



const Input = React.memo(function Input(props) {
  const {content, setContent} = props
  console.log('Input', content)
  return (
    <div className="input">
      <input onChange={e => setContent(content, e.target.value)} />
      {content}
    </div>
  )
})



function App() {
  const fakeData = Array.from([...Array(1000).keys()])
  const [data, setData] = useState(fakeData)
  const handleSetData = useCallback((value, newValue) => {
    const updatedData = data.map(dataValue => {
      return dataValue === value ? newValue : dataValue
    })
    setData(updatedData)
  }, [])
  return (
    <div className="App">
      {data.map((value, index) => {
        return (
          <Input
            content={value}
            setContent={handleSetData}
          />
        )
      })}
    </div>
  )
}

export default App
