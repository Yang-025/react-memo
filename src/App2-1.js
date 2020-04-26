import React, {useState} from 'react'
import './App.css'


function areEqual(prevProps, nextProps) {
  /*
  return true if passing nextProps to render would return
  the same result as passing prevProps to render,
  otherwise return false
  */
 return prevProps.content === nextProps.content
}


const Text = React.memo(function Text({content, onClick}) {
  console.log('Text rerender', content)
  return (
    <div className="text" onClick={onClick}>
      {content}
    </div>
  )
}, areEqual)

function App() {
  const [content, setContent] = useState(1)
  const [content2, setContent2] = useState(500)
  const handleClick = () => {
    const updatedContent = content + 1
    setContent(updatedContent)
  }
  const handleClick2 = () => {
    const updatedContent = content2 + 1
    setContent(updatedContent)
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
