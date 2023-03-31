import React from 'react'
import parse from 'html-react-parser';

const Preview = ({srcDoc}) => {
  return (!srcDoc) ? 'Loading...' :(
    <div>
        {parse(`${srcDoc}`)}
    </div>
  )
}

export default Preview