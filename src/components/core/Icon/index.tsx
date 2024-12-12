import React, { useState } from 'react'
import './iconStyles.css'
import { IconData } from '../../../types/dataTypes'
import Search from '../../../assets/icons/Search'
import Plus from '../../../assets/icons/Plus'
import Bell from '../../../assets/icons/Bell'
import Settings from '../../../assets/icons/Settings'

const iconList = {
  Search: (props: IconData) => <Search {...props} />,
  Plus: (props: IconData) => <Plus {...props} />,
  Bell: (props: IconData) => <Bell {...props} />,
  Settings: (props: IconData) => <Settings {...props} />,
}

type IconProps = {
  name: string
  fill?: string
  width?: number
  height?: number
  id?: string
  stroke?: string
  strokeWidth?: number
  style?: React.CSSProperties
  clickable?: boolean
  pressedColor?: string
  onPress?: () => void
}

const Icon = (props: IconProps) => {
  let Component = iconList[props.name as keyof typeof iconList]
  const [isPressed, setIsPressed] = useState<boolean>(false)

  if (!Component) {
    Component = iconList['Search']
  }
  return (
    <div
      id={props.id}
      className="svg-icon"
      style={{
        ...{
          width: `${props.width}px`,
          height: `${props.height}px`,
          ...props.style,
        },
      }}
      onClick={() => props.onPress && props.onPress()}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseOut={() => setIsPressed(false)}
    >
      <Component
        width={props.width}
        height={props.height}
        fill={
          isPressed && props?.pressedColor ? props.pressedColor : props.fill
        }
        stroke={props.stroke}
        strokeWidth={props.strokeWidth}
      />
    </div>
  )
}

export default Icon
