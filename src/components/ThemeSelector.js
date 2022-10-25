import React from 'react'
import './ThemeSelector.css'
import useTheme from '../hooks/useTheme'

const themeColors = ['#58249c','#ff6666', '#249c6b', '#ffb366','#b70233','#ff66ff','#d966ff','#b366ff','#668cff','#66d9ff']


function ThemeSelector() {
    const {color_change} = useTheme()

  return (
    <div className="theme-selector">
        <div className="theme-buttons">
            {themeColors.map(color=>(
                <div
                    key={color}
                    onClick={()=>color_change(color)}
                    style={{background:color}}
                />
            ))}
        </div>
    </div>
  )
}

export default ThemeSelector