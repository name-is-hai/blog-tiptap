import { BlogEditor } from '@/components/editor/blog-editor';
import { ThemeToggle } from '@/components/theme-toggle';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <BlogEditor />
      <ThemeToggle />
    </div>
  );
}
