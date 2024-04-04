import Navbar from '@/components/navbar';
import Workspace from '@/components/workspace/workspace';

export default function Home() {
  return (
    <main className="h-screen flex flex-col">
      <Navbar />
      <div className="h-screen p-2">
        <Workspace />
      </div>
    </main>
  );
}
