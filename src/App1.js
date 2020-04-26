import React, {useState} from 'react'
import './App.css'

const Text = React.memo(function Text({content}) {
  console.log('Text rerender', content)
  return <div className="text">{content}</div>
})

function App() {
  const [content, setContent] = useState(1)
  const [content2, setContent2] = useState(500)
  return (
    <div>
      <div className="App">
        <Text content={content} />
        <Text content={content2} />
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
