import clsx from 'clsx'

type Props = {
  favorited?: boolean
  setFavorited: (liked: boolean) => void
}

export const Favorite = function Favorite({ favorited, setFavorited }: Props) {
  return (
    <button
      type="button"
      onClick={() => setFavorited(!favorited)}
      className={clsx(
        'group relative flex h-[50px] w-[50px] items-center justify-center rounded-full border border-contrast-100 text-foreground transition-[colors,transform] duration-300 hover:scale-90',
        { 'bg-contrast-100': favorited }
      )}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill={favorited ? 'currentColor' : 'none'}
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform duration-300 group-hover:scale-110"
      >
        <path
          d="M17.3666 3.84166C16.941 3.41583 16.4356 3.07803 15.8794 2.84757C15.3232 2.6171 14.727 2.49847 14.1249 2.49847C13.5229 2.49847 12.9267 2.6171 12.3705 2.84757C11.8143 3.07803 11.3089 3.41583 10.8833 3.84166L9.99994 4.725L9.1166 3.84166C8.25686 2.98192 7.0908 2.49892 5.87494 2.49892C4.65908 2.49892 3.49301 2.98192 2.63327 3.84166C1.77353 4.70141 1.29053 5.86747 1.29053 7.08333C1.29053 8.29919 1.77353 9.46525 2.63327 10.325L3.5166 11.2083L9.99994 17.6917L16.4833 11.2083L17.3666 10.325C17.7924 9.89937 18.1302 9.39401 18.3607 8.83779C18.5912 8.28158 18.7098 7.6854 18.7098 7.08333C18.7098 6.48126 18.5912 5.88508 18.3607 5.32887C18.1302 4.77265 17.7924 4.26729 17.3666 3.84166Z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  )
}

export default Favorite
