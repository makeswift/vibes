import AnnouncementBar from '@/vibes/soul/components/announcement-bar'

export default function Preview() {
  return (
    <div className="flex min-h-48 items-center justify-center bg-contrast-100 p-5 sm:min-h-64 sm:p-8 lg:min-h-80 lg:p-12">
      <AnnouncementBar>
        Get <strong>15% off</strong> and free shipping with discount code{' '}
        <strong>&quot;welcome&quot;</strong>
      </AnnouncementBar>
    </div>
  )
}
