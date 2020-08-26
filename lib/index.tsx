import React from 'react'
import ReactDom from 'react-dom'
import Icon from "./icon"

const fn = () => {
    console.log('fn');
}

ReactDom.render(<div>
    <Icon name="weChat" onClick={fn} />
</div>, document.querySelector('#root'));