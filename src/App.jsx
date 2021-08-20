import React, { useState } from 'react'
import './App.css'

const App =()=> {
  const GIFS=[
    'https://media3.giphy.com/media/jxODdkVOIGFgc/giphy.webp?cid=ecf05e476i3zcr15f0vra7lcfcrphao5vr5kbl8ewkhq4v6z&rid=giphy.webp&ct=g',
  'https://media1.giphy.com/media/EatwJZRUIv41G/giphy.gif?cid=790b761156ba7758d64ab63588a87dce131da55dac583b1d&rid=giphy.gif&ct=g']
  const [giphfys, setGiphfys] = useState(GIFS)

  return (
    <div className="App">
      <section className="App-content">
        { giphfys.map(gif=>
          <img src={gif} />
        )
        }
      </section>
    </div>
  )
}

export default App
