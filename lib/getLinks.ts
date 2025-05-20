import { auth } from '@/auth';
import {
  HomeIcon,
  DocumentDuplicateIcon,
  UserGroupIcon,
  UserIcon,
} from '@heroicons/react/24/outline';

export async function getLinks() {
  const session = await auth();
  const isAdmin = session?.user?.role === 'admin';

  const links = [
    { name: 'Home', href: '/dashboard', icon: HomeIcon },
    { name: 'Invoices', href: '/dashboard/invoices', icon: DocumentDuplicateIcon },
    { name: 'Customers', href: '/dashboard/customers', icon: UserGroupIcon },
  ];

  if (isAdmin) {
    links.push({ name: 'Users', href: '/dashboard/users', icon: UserIcon });
  }

  return links;
}
