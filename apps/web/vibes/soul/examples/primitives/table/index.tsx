import { Badge } from '@/vibes/soul/primitives/badge';
import { ButtonLink } from '@/vibes/soul/primitives/button-link';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/vibes/soul/primitives/table';

const orders = [
  {
    id: '#12345',
    date: 'Jan 15, 2024',
    status: 'Delivered',
    items: 3,
    total: '$149.99',
  },
  {
    id: '#12346',
    date: 'Jan 20, 2024',
    status: 'Shipped',
    items: 1,
    total: '$89.99',
  },
  {
    id: '#12347',
    date: 'Jan 25, 2024',
    status: 'Processing',
    items: 2,
    total: '$199.99',
  },
  {
    id: '#12348',
    date: 'Feb 1, 2024',
    status: 'Pending',
    items: 4,
    total: '$299.99',
  },
];

function getBadgeVariant(status: string) {
  switch (status) {
    case 'Delivered':
      return 'success';
    case 'Shipped':
      return 'info';
    case 'Processing':
      return 'warning';
    default:
      return 'primary';
  }
}

export default function Preview() {
  return (
    <div className="bg-background mx-auto max-w-4xl px-6 py-8">
      <div className="space-y-6">
        <div>
          <h2 className="text-foreground text-2xl font-semibold">Recent Orders</h2>
          <p className="text-contrast-500 mt-2 text-sm">
            Track and manage your recent order history
          </p>
        </div>

        <Table>
          <TableCaption>A list of your recent orders and their status.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Order ID</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Items</TableHead>
              <TableHead className="text-right">Total</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell className="font-medium">{order.id}</TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell>
                  <Badge variant={getBadgeVariant(order.status)}>{order.status}</Badge>
                </TableCell>
                <TableCell className="text-right">{order.items}</TableCell>
                <TableCell className="text-right font-medium">{order.total}</TableCell>
                <TableCell className="text-right">
                  <ButtonLink href="#" size="x-small" variant="secondary">
                    View Details
                  </ButtonLink>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <div className="mt-8">
          <h3 className="text-foreground mb-4 text-lg font-semibold">Product Comparison Table</h3>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Feature</TableHead>
                <TableHead>Basic Plan</TableHead>
                <TableHead>Pro Plan</TableHead>
                <TableHead>Enterprise</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Storage</TableCell>
                <TableCell>10 GB</TableCell>
                <TableCell>100 GB</TableCell>
                <TableCell>Unlimited</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Users</TableCell>
                <TableCell>1</TableCell>
                <TableCell>5</TableCell>
                <TableCell>Unlimited</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Support</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Email + Chat</TableCell>
                <TableCell>24/7 Phone</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">API Access</TableCell>
                <TableCell>❌</TableCell>
                <TableCell>✅</TableCell>
                <TableCell>✅</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Custom Integrations</TableCell>
                <TableCell>❌</TableCell>
                <TableCell>❌</TableCell>
                <TableCell>✅</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
