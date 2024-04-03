import AppBar from '../components/appbar';
import { getServerSession } from 'next-auth';
import { authHandler } from '../lib/auth';

export default async function Page() {
  const session = await getServerSession(authHandler);
  return (
    <main>
      <AppBar />
      <h1>Hello</h1>
      {JSON.stringify(session)}
    </main>
  );
}
