import React from 'react'

const Preview = ({srcDoc}) => {
    console.log('srcdoc',srcDoc);
  return (
    <div>
        <iframe srcDoc={srcDoc} width="1200" title='Html-demo' height="600"/>
    </div>
  )
}

export default Preview