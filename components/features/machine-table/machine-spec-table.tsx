import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { IMachineTable } from "@/data/static/machines/machines.types";

interface IMachineSpecTableProps {
  tables?: IMachineTable[];
}

/**
 * Renders spec tables with a fixed first column; remaining columns scroll horizontally.
 */
export function MachineSpecTable({ tables }: IMachineSpecTableProps) {
  if (!tables?.length) return null;

  return (
    <div className={"flex flex-col gap-8 p-2 text-start"}>
      {tables.map((table, index) => (
        <div key={table.title ?? index} className={"flex flex-col gap-3"}>
          {table.title && (
            <h3 className={"text-lg font-semibold text-primary"}>
              {table.title}
            </h3>
          )}
          <div className={"border"}>
            <Table className={"border-separate border-spacing-0"}>
              <TableHeader>
                <TableRow className={"hover:bg-transparent"}>
                  <TableHead
                    className={
                      "sticky left-0 z-10 w-36 min-w-36 bg-primary text-primary-foreground border-r border-primary-foreground/20 md:w-56 md:min-w-56"
                    }
                  >
                    Machine Models
                  </TableHead>
                  {table.columns.map((column) => (
                    <TableHead
                      key={column}
                      className={"min-w-44 bg-primary text-primary-foreground"}
                    >
                      {column}
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {table.rows.map((row) => (
                  <TableRow key={row.label}>
                    <TableCell
                      className={
                        "sticky left-0 z-10 w-36 min-w-36 whitespace-normal border-b border-r bg-background font-medium text-primary md:w-56 md:min-w-56"
                      }
                    >
                      {row.label}
                    </TableCell>
                    {table.columns.map((column, i) => (
                      <TableCell
                        key={column}
                        className={
                          "min-w-44 whitespace-normal border-b bg-background"
                        }
                      >
                        {row.values[i] ?? "—"}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      ))}
    </div>
  );
}
