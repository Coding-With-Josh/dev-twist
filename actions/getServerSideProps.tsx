import { prisma } from '@/utils/prisma/client';
import { supabase } from '@/utils/supabase/client';
import { useRouter } from 'next/router';

export async function getServerSideProps(context: any) {
  const session = await supabase.auth.getSession();

  if (!session.user) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  const user = await prisma.user.findUnique({ where: { email: session.user.email } });

  return {
    props: {
      user,
    },
  };
}

function Dashboard({ user }: any) {
  // Access user data here
  return (
    <div>
      <h1>Welcome, {user.name}!</h1>
    </div>
  );
}