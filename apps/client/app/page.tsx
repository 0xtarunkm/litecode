import Navbar from '@/components/navbar';
import Workspace from '@/components/workspace/workspace';
import client from '@repo/database/client';

async function getProblem() {
  try {
    const response = await client.problem.findFirst({
      where: {
        id: '6c1d68df-5ab8-4cee-b333-e7ae36bd8b3b',
      },
    });

    return response;
  } catch (e) {
    console.log(e);
  }
}

export default async function Home() {
  const problem = await getProblem();
  return (
    <main className="h-screen flex flex-col">
      <Navbar problem={problem} />
      <div className="h-screen p-2 overflow-auto">
        <Workspace problem={problem} />
      </div>
    </main>
  );
}
