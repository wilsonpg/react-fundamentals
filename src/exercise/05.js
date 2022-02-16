// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// 🐨 add a className prop to each div and apply the correct class names
// based on the text content
// 💰 Here are the available class names: box, box--large, box--medium, box--small
// 💰 each of the elements should have the "box" className applied

// 🐨 add a style prop to each div so their background color
// matches what the text says it should be
// 🐨 also use the style prop to make the font italic
// 💰 Here are available style attributes: backgroundColor, fontStyle

const Box = ({size, text, ...otherProps}) => (
  <div className={`box box--${size}`} {...otherProps}>
    {text}
  </div>
)

function App() {
  return (
    <div>
      <Box
        size="small"
        style={{fontStyle: `italic`, backgroundColor: `lightblue`}}
        text="small lightblue box"
      />
      <Box
        size="medium"
        style={{fontStyle: `italic`, backgroundColor: `pink`}}
        text="medium pink box"
      />
      <Box
        size="large"
        style={{fontStyle: `italic`, backgroundColor: `orange`}}
        text="large orange box"
      />
    </div>
  )
}

export default App
