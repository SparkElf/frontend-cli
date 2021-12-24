
import { useState } from 'react'
import './TabBar.styl'
export const TabBar = (props) => {
    const [state, setState] = useState(0)

    return (
        <div className="bar">
            {
                props.data.map((text, key) => {
                    let className = "tab"
                    if (key == state) className += " choose"
                    return (
                        <div className={className} key={key} onClick={() => setState(key)} >
                            {text} {state}
                        </div>
                    )
                })
            }
        </div>
    )
}