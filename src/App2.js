import React, {useState} from 'react'
import './App.css'




const Text = React.memo(function Text({content, onClick}) {
  console.log('Text rerender', content)
  return (
    <div className="text" onClick={onClick}>
      {content}
    </div>
  )
})


function App() {
  const [content, setContent] = useState(1)
  const [content2, setContent2] = useState(500)
  const handleClick = () => {
    setContent(prevState => prevState + 1)
  }
  const handleClick2 = () => {
    setContent2(prevState => prevState + 1)
  }
  return (
    <div>
      <div className="App">
        <Text content={content} onClick={handleClick} />
        <Text content={content2} onClick={handleClick2} />
      </div>
      <div>
        <button onClick={() => setContent(prevState => prevState + 1)}>
          更新左邊
        </button>
        <button onClick={() => setContent2(prevState => prevState + 1)}>
          更新右邊
        </button>
      </div>
    </div>
  )
}

export default App
