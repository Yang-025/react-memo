import React, {useState, useMemo, useCallback} from 'react'
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
  const handleClick = useCallback(() => {
    const updatedContent = content + 1
    setContent(updatedContent)
  }, [content])
  const handleClick2 = useCallback(() => {
    const updatedContent = content2 + 1
    setContent2(updatedContent)
  }, [content2])


  const complecatedContent2 = useMemo(() => {
    // 好複雜的計算
    console.log('好複雜的計算')
    return content2 * 100 + 1000
  }, [content2])


  return (
    <div>
      <div className="App">
        <Text content={content} onClick={handleClick} />
        <Text content={complecatedContent2} onClick={handleClick2} />
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
