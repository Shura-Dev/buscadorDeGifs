import React, {useEffect, useState} from 'react'
import getGifs from '../services/getGifs'
import Gif from './Gif'

const ListGifs = ({params}) => {
  const {keyWord} = params
    useEffect(() => {
    getGifs({keyWord:keyWord}).then(gifs => setGiphfys(gifs)) 
  }, [keyWord])
  const [giphfys, setGiphfys] = useState([]);

  return (
    <div>
      {giphfys.map(({ title, url, id}) => (
          <Gif key={id} title={title} url={url} id={id} /> 
        ))}
    </div>
  )
}

export default ListGifs
