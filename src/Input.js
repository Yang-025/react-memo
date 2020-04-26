import React from 'react'

function Input(props) {
  const {content, setContent} = props
  console.log('Input', content)
  return (
    <div className="input">
      <input onChange={e => setContent(e.target.value)} />
      {content}
    </div>
  )
}

function areEqual(prevProps, nextProps) {
  /*
  return true if passing nextProps to render would return
  the same result as passing prevProps to render,
  otherwise return false
  */
 return prevProps.content === nextProps.content
}

export default React.memo(Input, areEqual)
