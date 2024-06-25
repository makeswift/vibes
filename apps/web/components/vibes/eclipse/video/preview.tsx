import Video from '.'
import GlowContainer from '../glow-container'

export default function Preview() {
  return (
    <div className="flex min-h-48 items-center justify-center bg-[#07090D] p-5 sm:min-h-64 sm:p-8 lg:min-h-80 lg:p-12">
      <GlowContainer className="w-[640px] max-w-full">
        <Video videoUrl="https://vimeo.com/530562598" />
      </GlowContainer>
    </div>
  )
}
