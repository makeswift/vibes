import { BlogPost, BlogPostContent } from '@/vibes/soul/sections/blog-post-content';

export default function Preview() {
  const blogPostPromise = new Promise<BlogPost>((resolve) => {
    setTimeout(() => resolve(blogPost), 1000);
  });

  return <BlogPostContent blogPost={blogPostPromise} breadcrumbs={breadcrumbs} />;
}

const blogPost = {
  author: 'Sam Smith',
  content: `
      <h2>Best Air-Purifying Plants</h2>
      <ol>
          <li>
              <h3>Snake Plant (Sansevieria)</h3>
              <p>The <strong>Snake Plant</strong>, also known as Mother-in-Law's Tongue, is one of the most effective plants for filtering out several toxins. It thrives in low light, making it perfect for bedrooms and living rooms.</p>
              <ul>
                  <li>Filters out formaldehyde, xylene, benzene, and toluene.</li>
                  <li>Easy to care for with low light and water requirements.</li>
              </ul>
          </li>
          <li>
              <h3>Spider Plant (Chlorophytum comosum)</h3>
              <p><strong>Spider Plants</strong> are great for beginners due to their hardiness. They are efficient at removing harmful substances from the air and are also pet-friendly.</p>
              <ul>
                  <li>Removes carbon monoxide, formaldehyde, and other toxins.</li>
                  <li>Produces offshoots that can be propagated.</li>
              </ul>
          </li>
          <li>
              <h3>Peace Lily (Spathiphyllum)</h3>
              <p>The <strong>Peace Lily</strong> is known for its ability to eliminate a variety of pollutants while also being an attractive flowering plant. It does require some care, especially when it comes to watering.</p>
              <ul>
                  <li>Removes ammonia, benzene, formaldehyde, and trichloroethylene.</li>
                  <li>Beautiful white blooms that brighten any room.</li>
              </ul>
          </li>
          <li>
              <h3>Aloe Vera (Aloe barbadensis miller)</h3>
              <p>Apart from its medicinal benefits, <strong>Aloe Vera</strong> is also a great air purifier. It thrives in bright sunlight and requires little maintenance.</p>
              <ul>
                  <li>Filters out formaldehyde and benzene.</li>
                  <li>Easy to care for, requires sunlight.</li>
              </ul>
          </li>
          <li>
              <h3>Boston Fern (Nephrolepis exaltata)</h3>
              <p>The <strong>Boston Fern</strong> is great for removing pollutants, but it loves humid environments, making it a perfect fit for kitchens and bathrooms.</p>
              <ul>
                  <li>Removes formaldehyde and xylene.</li>
                  <li>Thrives in high humidity environments.</li>
              </ul>
          </li>
      </ol>
    `,
  date: 'June 30, 2024',
  image: {
    src: 'https://rstr.in/monogram/vibes/RNZYqBoUs7C',
    alt: 'A plant with large leaves and a short stem.',
  },
  title: "Top 5 Plants to Purify Your Home's Air",
  tags: [
    {
      label: 'Plants',
      link: {
        href: '#',
      },
    },
    {
      label: 'Home',
      link: {
        href: '#',
      },
    },
    {
      label: 'Gardening',
      link: {
        href: '#',
      },
    },
  ],
};

const breadcrumbs = [
  {
    id: '1',
    label: 'Home',
    href: '#',
  },
  {
    id: '2',
    label: 'Blog',
    href: '#',
  },
  {
    id: '3',
    label: "Top 5 Plants to Purify Your Home's Air",
    href: '#',
  },
];
