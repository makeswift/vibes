import { CSSProperties } from 'react'

import clsx from 'clsx'

import styles from './sticker.module.css'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  front: React.ReactNode
  back: React.ReactNode
  shadow: React.ReactNode
  peel?: number
  peelAngle?: number
  width?: number
  height?: number
  rotation?: number
  animationDuration?: number
  shadowStartX?: number
  shadowStartY?: number
  shadowHoverX?: number
  shadowHoverY?: number
}

const toRads = (deg: number) => (deg * Math.PI) / 180.0
const toDegrees = (rads: number) => (rads * 180.0) / Math.PI

export default function Sticker({
  className,
  style,
  front,
  back,
  shadow,
  peel = 0.3,
  peelAngle = -10,
  width = 145,
  height = 205,
  rotation = 0,
  animationDuration = 350,
  shadowStartX = -4,
  shadowStartY = 4,
  shadowHoverX = -6,
  shadowHoverY = 10,
  ...rest
}: Props) {
  const size = Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2))
  const offsetTop = (size - height) / 2
  const offsetLeft = (size - width) / 2
  const rotationAngleFix =
    peelAngle > 90
      ? peelAngle - 90
      : peelAngle < -90
        ? 270 - peelAngle
        : peelAngle < 0
          ? peelAngle + 90
          : 90 - peelAngle
  const diagonalAngle = toDegrees(Math.atan(height / width))
  const angleFix = rotationAngleFix + diagonalAngle
  const angleFixBack = peelAngle + 180
  const offsetDiagonalAngle = (size - Math.sin(toRads(angleFix)) * size) / 2
  const offsetBack = offsetDiagonalAngle - size
  const peelTranslate = (size - offsetDiagonalAngle * 2) * peel

  return (
    <div
      {...rest}
      className={clsx(styles.sticker, className)}
      style={
        {
          ...style,
          '--width': `${width}px`,
          '--height': `${height}px`,
          '--rotation': `${rotation}deg`,
          '--size': `${size}px`,
          '--offset-top': `${offsetTop}px`,
          '--offset-left': `${offsetLeft}px`,
          '--peel-angle': `${peelAngle}deg`,
          '--offset-diagonal-angle': `${offsetDiagonalAngle}px`,
          '--front-x': `${-offsetDiagonalAngle * Math.cos(toRads(peelAngle))}px`,
          '--front-y': `${-offsetDiagonalAngle * Math.sin(toRads(peelAngle))}px`,
          '--front-peeled-x': `${(-offsetDiagonalAngle - peelTranslate) * Math.cos(toRads(peelAngle))}px`,
          '--front-peeled-y': `${(-offsetDiagonalAngle - peelTranslate) * Math.sin(toRads(peelAngle))}px`,
          '--front-rotation': `${-peelAngle}deg`,
          '--back-x': `${offsetBack * Math.cos(toRads(angleFixBack))}px`,
          '--back-y': `${offsetBack * Math.sin(toRads(angleFixBack)) * -1}px`,
          '--back-peeled-x': `${(offsetBack + peelTranslate) * Math.cos(toRads(angleFixBack))}px`,
          '--back-peeled-y': `${(offsetBack + peelTranslate) * Math.sin(toRads(angleFixBack)) * -1}px`,
          '--back-rotation': `${angleFixBack}deg`,
          '--peel-translate': `${peelTranslate}px`,
          '--shadow-start-x': `${shadowStartX}px`,
          '--shadow-start-y': `${shadowStartY}px`,
          '--shadow-hover-x': `${shadowHoverX}px`,
          '--shadow-hover-y': `${shadowHoverY}px`,
          '--animation-duration': `${animationDuration}ms`,
        } as CSSProperties
      }
    >
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.sclip}>
            <div className={styles.shadow}>{shadow}</div>
          </div>
          <div className={styles.clip}>
            <div className={styles.back}>{back}</div>
            <div className={styles.front}>{front}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
