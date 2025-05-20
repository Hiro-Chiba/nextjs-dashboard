import Form from '@/app/ui/users/edit-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchUserById } from '@/lib/data';
import { notFound } from 'next/navigation';

type Props = {
  params: Promise<{ id: string }>;
};

export default async function Page({ params }: Props) {
    const { id } = await params;
    const user = await fetchUserById(id);
      if (!user) {
        notFound();
      }

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Users', href: '/dashboard/users' },
          {
            label: 'Edit Users',
            href: `/dashboard/users/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Form user={user}  />
    </main>
  );
}