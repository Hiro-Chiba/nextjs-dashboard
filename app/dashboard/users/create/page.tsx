import Form from '@/app/ui/users/create-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
 
export default async function Page() {
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Users', href: '/dashboard/users' },
          {
            label: 'Create User',
            href: '/dashboard/users/create',
            active: true,
          },
        ]}
      />
      <Form />
    </main>
  );
}