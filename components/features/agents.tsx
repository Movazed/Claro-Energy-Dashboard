import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function Agents() {
  return (
    <Card>
      <CardHeader className="px-7">
        <CardTitle>Agentic AI</CardTitle>
        <CardDescription>Recent activities in your AI system.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Agent</TableHead>
              <TableHead className="hidden sm:table-cell">Task Type</TableHead>
              <TableHead className="hidden sm:table-cell">Status</TableHead>
              <TableHead className="hidden md:table-cell">Last Updated</TableHead>
              <TableHead className="text-right">Priority</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="bg-accent">
              <TableCell>
                <div className="font-medium">Alpha Bot</div>
                <div className="hidden text-sm text-muted-foreground md:inline">
                  alpha@agentic.ai
                </div>
              </TableCell>
              <TableCell className="hidden sm:table-cell">Data Analysis</TableCell>
              <TableCell className="hidden sm:table-cell">
                <Badge className="text-xs" variant="secondary">
                  Completed
                </Badge>
              </TableCell>
              <TableCell className="hidden md:table-cell">2025-01-23</TableCell>
              <TableCell className="text-right">High</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="font-medium">Beta Assistant</div>
                <div className="hidden text-sm text-muted-foreground md:inline">
                  beta@agentic.ai
                </div>
              </TableCell>
              <TableCell className="hidden sm:table-cell">Error Resolution</TableCell>
              <TableCell className="hidden sm:table-cell">
                <Badge className="text-xs" variant="outline">
                  Pending
                </Badge>
              </TableCell>
              <TableCell className="hidden md:table-cell">2025-01-22</TableCell>
              <TableCell className="text-right">Medium</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="font-medium">Gamma Advisor</div>
                <div className="hidden text-sm text-muted-foreground md:inline">
                  gamma@agentic.ai
                </div>
              </TableCell>
              <TableCell className="hidden sm:table-cell">Forecasting</TableCell>
              <TableCell className="hidden sm:table-cell">
                <Badge className="text-xs" variant="secondary">
                  Completed
                </Badge>
              </TableCell>
              <TableCell className="hidden md:table-cell">2025-01-20</TableCell>
              <TableCell className="text-right">Low</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="font-medium">Delta Solver</div>
                <div className="hidden text-sm text-muted-foreground md:inline">
                  delta@agentic.ai
                </div>
              </TableCell>
              <TableCell className="hidden sm:table-cell">Optimization</TableCell>
              <TableCell className="hidden sm:table-cell">
                <Badge className="text-xs" variant="secondary">
                  Completed
                </Badge>
              </TableCell>
              <TableCell className="hidden md:table-cell">2025-01-21</TableCell>
              <TableCell className="text-right">High</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
