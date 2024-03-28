import * as React from 'react'

export interface TableProps extends React.HTMLAttributes<HTMLTableElement> {
  className: string
  children: React.ReactNode
}

const Table = React.forwardRef<HTMLTableElement, TableProps>(({ children }) => (
  <div className="relative w-full overflow-auto">
    <table className="table w-full border border-foreground text-sm">
      <thead>
        <tr>
          <th className="border-b-2 border-foreground bg-foreground/5 p-3 align-middle dark:bg-foreground/20">
            Prop
          </th>
          <th className="border-b-2 border-foreground bg-foreground/5 p-3 align-middle dark:bg-foreground/20">
            Type
          </th>
          <th className="border-b-2 border-foreground bg-foreground/5 p-3 align-middle dark:bg-foreground/20">
            Default
          </th>
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

const TableRow = React.forwardRef<HTMLTableRowElement, TableRowProps>(
  ({ children }: { children: React.ReactNode }) => <tr>{children}</tr>
)
TableRow.displayName = 'TableRow'

export interface TableCellProps extends React.HTMLAttributes<HTMLTableCellElement> {
  children: React.ReactNode
}

const TableCell = React.forwardRef<HTMLTableCellElement, TableCellProps>(
  ({ children }: { children: React.ReactNode }) => (
    <td className="border-b border-foreground p-3 align-middle font-light [&:has([role=checkbox])]:pr-0">
      {children}
    </td>
  )
)
TableCell.displayName = 'TableCell'

export { Table, TableRow, TableCell }
