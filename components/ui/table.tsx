import * as React from 'react'

import { cn } from '@/lib/utils'

export interface TableProps extends React.HTMLAttributes<HTMLTableElement> {
  className: string
  children: React.ReactNode
}

const Table = React.forwardRef<HTMLTableElement, TableProps>(({ children }, ref) => (
  <div className="relative w-full overflow-auto">
    <table ref={ref} className="w-full border border-black text-sm">
      <thead className="border-b-2 border-black">
        <tr>
          <th className="p-4 align-middle font-bold">Prop</th>
          <th className="p-4 align-middle">Type</th>
          <th className="p-4 align-middle">Default</th>
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  </div>
))
Table.displayName = 'Table'

export interface TableRowProps extends React.HTMLAttributes<HTMLTableRowElement> {
  children: React.ReactNode
}

const TableRow = React.forwardRef<HTMLTableRowElement, TableRowProps>(({ children }, ref) => (
  <tr ref={ref} className="border-b border-black/10 transition-colors last:border-b-0">
    {children}
  </tr>
))
TableRow.displayName = 'TableRow'

export interface TableCellProps extends React.HTMLAttributes<HTMLTableCellElement> {
  children: React.ReactNode
}

const TableCell = React.forwardRef<HTMLTableCellElement, TableCellProps>(({ children }, ref) => (
  <td ref={ref} className="p-4 align-middle font-light [&:has([role=checkbox])]:pr-0">
    {children}
  </td>
))
TableCell.displayName = 'TableCell'

export { Table, TableRow, TableCell }
