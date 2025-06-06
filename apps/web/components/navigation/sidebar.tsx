import { Chapter } from './navigation';
import { PageLink } from './page-link';

interface Props {
  chapter: Chapter;
}

export function Sidebar({ chapter }: Props) {
  return (
    <aside className="sticky top-16 hidden h-[calc(100vh-4rem)] w-56 shrink-0 xl:block">
      <ul className="text-foreground h-full space-y-5 overflow-y-auto py-10">
        {chapter.groups.map((group) => (
          <div key={group.title}>
            <div className="mb-2.5 text-sm font-bold">{group.title}</div>
            {group.pages.map((page) => (
              <li className="[&_a]:block [&_a]:py-1.5" key={page.slug}>
                <PageLink chapterSlug={chapter.slug} page={page} />
              </li>
            ))}
          </div>
        ))}
      </ul>
    </aside>
  );
}
