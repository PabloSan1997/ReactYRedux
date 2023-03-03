import { StarFilled, StarOutlined } from '@ant-design/icons'
import { Button } from 'antd';
import React from 'react'

function StartButton({isFavorite, onFuncion}) {
    const Icon = isFavorite ? StarFilled:StarOutlined;
  return (
    <Button icon={<Icon/>} onClick={onFuncion}/>
  )
}

export  {StartButton}