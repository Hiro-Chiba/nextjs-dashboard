import Form from '@/app/ui/invoices/edit-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchInvoiceById, fetchCustomers } from '@/lib/data';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id: invoiceId } = await params;
  return {
    title: `請求書の編集 - ${invoiceId}`,
    description: `請求書 #${invoiceId} の編集ページです。`,
    keywords: ['請求書', '編集', invoiceId],
    robots: 'noindex, nofollow',
    alternates: {
      canonical: `/dashboard/invoices/${invoiceId}/edit`,
    },
  };
}

export default async function Page({ params }: Props) {
    const { id } = await params;
    const [invoice, customers] = await Promise.all([
        fetchInvoiceById(id),
        fetchCustomers(),
      ]);
      if (!invoice) {
        notFound();
      }

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/invoices' },
          {
            label: 'Edit Invoice',
            href: `/dashboard/invoices/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Form invoice={invoice} customers={customers} />
    </main>
  );
}