import { BlogPostPage } from '@/vibes/soul/pages/blog/post'

export default function Preview() {
  return (
    <BlogPostPage
      id="1"
      title="STYLING STORIES:"
      author="Freda Salvador"
      date="October 03, 2024"
      image={{
        src: 'https://rstr.in/monogram/vibes/lJaCK7qAO8W/k9soESSDDU1',
        alt: 'A woman wearing a green velvet dress, black boots, and a small black handbag.',
      }}
      content={`
       <h2>OCTOBER CAMPAIGN</h2>
       <p>Fall fashion is very much happening and we are very much loving everything. Boots, loafers, leopard print, sweaters, plaid, denim, gold…to name just a few of our favorite things.</p>
       <p>For our October campaign, we wanted to have fun with the styling. It’s all about taking classic looks and reimagining them with certain pieces. All your staples with a refreshed energy. Mixing textures, playing with sequins, making a statement print a neutral–we’re feeling it all.</p>

       <img src="https://rstr.in/monogram/vibes/VhqWQX3Sb-f/6g-xaTC90eo" alt="A woman wearing a brown pantsuit with a snakeskin print blazer and black flats."/>

       <h2>EVERYDAY COOL</h2>
       <h3>WITH THE LANNA BOOT + ELIS BAG</h3>
       <blockquote>
       “I’m always into leopard and believe it is as much of a neutral as black. And paired with the LANNA Boot–which we’re calling the ballet flat of boots because it truly works with everything–it’s just perfect. Tie it all together with a studded bag and cozy sweater.”
       </blockquote>
       
      `}
      relatedPostsTitle="Related posts"
      cta={{
        href: '#',
        label: 'View All',
      }}
    />
  )
}
