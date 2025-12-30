import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";

interface Column {
  key: string;
  header: string;
  className?: string;
}

interface DataTableProps {
  columns: Column[];
  data: Record<string, string | React.ReactNode>[];
  className?: string;
  variant?: "default" | "safe" | "unsafe" | "neutral";
}

const variantStyles = {
  default: "border-border",
  safe: "border-[var(--color-mint)]",
  unsafe: "border-[var(--color-blush)]",
  neutral: "border-[var(--color-lavender)]",
};

export default function DataTable({ 
  columns, 
  data, 
  className,
  variant = "default" 
}: DataTableProps) {
  return (
    <div className={cn(
      "rounded-xl border overflow-hidden bg-card shadow-sm",
      variantStyles[variant],
      className
    )}>
      <Table>
        <TableHeader>
          <TableRow className="bg-[var(--color-cream)]/50 hover:bg-[var(--color-cream)]/50">
            {columns.map((col) => (
              <TableHead 
                key={col.key} 
                className={cn(
                  "font-[var(--font-heading)] font-semibold text-foreground",
                  col.className
                )}
              >
                {col.header}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row, idx) => (
            <TableRow 
              key={idx}
              className="hover:bg-[var(--color-cream)]/30 transition-colors"
            >
              {columns.map((col) => (
                <TableCell key={col.key} className={col.className}>
                  {row[col.key]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
