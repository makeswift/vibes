import clsx from 'clsx'

type Props = {
  currentIndex: number
  setCurrentIndex: (index: number) => void
  totalItems: number
}

export const ProgressBar = function ProgressBar({
  currentIndex,
  setCurrentIndex,
  totalItems,
}: Props) {
  return (
    <div className="flex">
      {Array.from({ length: totalItems }, (_, index) => (
        <button
          aria-label={`View image number ${index + 1}`}
          key={index}
          className="rounded-lg px-1.5 py-2 focus:outline-0 focus:ring-2 focus:ring-primary"
          onClick={() => setCurrentIndex(index)}
        >
          <div className="relative overflow-hidden">
            {/* White Bar - Current Index Indicator / Progress Bar */}
            <div
              className={clsx(
                'absolute h-0.5 w-[calc-(228_/_3)] bg-background opacity-100',
                index === currentIndex ? 'translate-x-0' : '-translate-x-[101%]'
              )}
              style={{
                transitionDuration: `${index === currentIndex ? '5s' : '0s'}`,
                width: `${190 / totalItems}px`,
              }}
            />

            {/* Grey Bar */}
            <div
              className="p h-0.5 w-[calc-(228_/_3)] bg-background opacity-30"
              style={{ width: `${190 / totalItems}px` }}
            />
          </div>
        </button>
      ))}
    </div>
  )
}

export default ProgressBar
