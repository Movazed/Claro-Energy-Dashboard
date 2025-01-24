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

export default function CallHistory() {
  return (
    <Card>
      <CardHeader className="px-7">
        <CardTitle>Call History</CardTitle>
        <CardDescription>Recent AI-powered interactions and their results.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>AI Agent</TableHead>
              <TableHead className="hidden sm:table-cell">Interaction Type</TableHead>
              <TableHead className="hidden sm:table-cell">Result</TableHead>
              <TableHead className="hidden md:table-cell">Interaction Date</TableHead>
              <TableHead className="text-right">Outcome Score</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="bg-accent">
              <TableCell>
                <div className="font-medium">Alpha Bot</div>
                <div className="hidden text-sm text-muted-foreground md:inline">
                  alpha@agent.ai
                </div>
              </TableCell>
              <TableCell className="hidden sm:table-cell">Inquiry</TableCell>
              <TableCell className="hidden sm:table-cell">
                <Badge className="text-xs" variant="secondary">
                  Resolved
                </Badge>
              </TableCell>
              <TableCell className="hidden md:table-cell">2023-06-23</TableCell>
              <TableCell className="text-right">85</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="font-medium">Beta AI</div>
                <div className="hidden text-sm text-muted-foreground md:inline">
                  beta@agent.ai
                </div>
              </TableCell>
              <TableCell className="hidden sm:table-cell">Issue</TableCell>
              <TableCell className="hidden sm:table-cell">
                <Badge className="text-xs" variant="outline">
                  Unresolved
                </Badge>
              </TableCell>
              <TableCell className="hidden md:table-cell">2023-06-24</TableCell>
              <TableCell className="text-right">60</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="font-medium">Gamma AI</div>
                <div className="hidden text-sm text-muted-foreground md:inline">
                  gamma@agent.ai
                </div>
              </TableCell>
              <TableCell className="hidden sm:table-cell">
                Automation
              </TableCell>
              <TableCell className="hidden sm:table-cell">
                <Badge className="text-xs" variant="secondary">
                  Completed
                </Badge>
              </TableCell>
              <TableCell className="hidden md:table-cell">2023-06-25</TableCell>
              <TableCell className="text-right">95</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="font-medium">Delta Agent</div>
                <div className="hidden text-sm text-muted-foreground md:inline">
                  delta@agent.ai
                </div>
              </TableCell>
              <TableCell className="hidden sm:table-cell">Monitoring</TableCell>
              <TableCell className="hidden sm:table-cell">
                <Badge className="text-xs" variant="secondary">
                  Completed
                </Badge>
              </TableCell>
              <TableCell className="hidden md:table-cell">2023-06-26</TableCell>
              <TableCell className="text-right">90</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="font-medium">Alpha Bot</div>
                <div className="hidden text-sm text-muted-foreground md:inline">
                  alpha@agent.ai
                </div>
              </TableCell>
              <TableCell className="hidden sm:table-cell">Inquiry</TableCell>
              <TableCell className="hidden sm:table-cell">
                <Badge className="text-xs" variant="secondary">
                  Resolved
                </Badge>
              </TableCell>
              <TableCell className="hidden md:table-cell">2023-06-23</TableCell>
              <TableCell className="text-right">85</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="font-medium">Beta AI</div>
                <div className="hidden text-sm text-muted-foreground md:inline">
                  beta@agent.ai
                </div>
              </TableCell>
              <TableCell className="hidden sm:table-cell">Issue</TableCell>
              <TableCell className="hidden sm:table-cell">
                <Badge className="text-xs" variant="outline">
                  Unresolved
                </Badge>
              </TableCell>
              <TableCell className="hidden md:table-cell">2023-06-24</TableCell>
              <TableCell className="text-right">60</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="font-medium">Gamma AI</div>
                <div className="hidden text-sm text-muted-foreground md:inline">
                  gamma@agent.ai
                </div>
              </TableCell>
              <TableCell className="hidden sm:table-cell">
                Automation
              </TableCell>
              <TableCell className="hidden sm:table-cell">
                <Badge className="text-xs" variant="secondary">
                  Completed
                </Badge>
              </TableCell>
              <TableCell className="hidden md:table-cell">2023-06-25</TableCell>
              <TableCell className="text-right">95</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="font-medium">Delta Agent</div>
                <div className="hidden text-sm text-muted-foreground md:inline">
                  delta@agent.ai
                </div>
              </TableCell>
              <TableCell className="hidden sm:table-cell">Monitoring</TableCell>
              <TableCell className="hidden sm:table-cell">
                <Badge className="text-xs" variant="secondary">
                  Completed
                </Badge>
              </TableCell>
              <TableCell className="hidden md:table-cell">2023-06-26</TableCell>
              <TableCell className="text-right">90</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
