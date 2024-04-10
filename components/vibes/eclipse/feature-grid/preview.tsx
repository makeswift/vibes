import FeatureGrid from '.'

export default function Preview() {
  return (
    <div className="flex min-h-48 items-center justify-center bg-[#07090D] p-16 sm:min-h-64 lg:min-h-80">
      <FeatureGrid
        className="w-full"
        features={[
          {
            heading: 'Feature 1',
            description: 'This is a description of feature 1',
            icon: {
              url: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTo1NjMyZmQyMS0yOTZlLTQ0YmMtOWQ5Zi01ZTg0NWMyMjRkODU=/users.svg',
              dimensions: { width: 20, height: 20 },
            },
            iconAlt: 'Feature 1 icon',
          },
          {
            heading: 'Feature 2',
            description: 'This is a description of feature 2',
            icon: {
              url: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTo1NjMyZmQyMS0yOTZlLTQ0YmMtOWQ5Zi01ZTg0NWMyMjRkODU=/users.svg',
              dimensions: { width: 20, height: 20 },
            },
            iconAlt: 'Feature 2 icon',
          },
          {
            heading: 'Feature 3',
            description: 'This is a description of feature 3',
            icon: {
              url: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTo1NjMyZmQyMS0yOTZlLTQ0YmMtOWQ5Zi01ZTg0NWMyMjRkODU=/users.svg',
              dimensions: { width: 20, height: 20 },
            },
            iconAlt: 'Feature 3 icon',
          },
          {
            heading: 'Feature 4',
            description: 'This is a description of feature 3',
            icon: {
              url: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTo1NjMyZmQyMS0yOTZlLTQ0YmMtOWQ5Zi01ZTg0NWMyMjRkODU=/users.svg',
              dimensions: { width: 20, height: 20 },
            },
            iconAlt: 'Feature 3 icon',
          },
          {
            heading: 'Feature 4',
            description: 'This is a description of feature 3',
            icon: {
              url: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTo1NjMyZmQyMS0yOTZlLTQ0YmMtOWQ5Zi01ZTg0NWMyMjRkODU=/users.svg',
              dimensions: { width: 20, height: 20 },
            },
            iconAlt: 'Feature 3 icon',
          },
          {
            heading: 'Feature 4',
            description: 'This is a description of feature 3',
            icon: {
              url: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTo1NjMyZmQyMS0yOTZlLTQ0YmMtOWQ5Zi01ZTg0NWMyMjRkODU=/users.svg',
              dimensions: { width: 20, height: 20 },
            },
            iconAlt: 'Feature 3 icon',
          },
        ]}
      />
    </div>
  )
}
