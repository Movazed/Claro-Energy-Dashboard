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

export default function Database() {
  return (
    <Card>
      <CardHeader className="px-7">
        <CardTitle>Database</CardTitle>
        <CardDescription>Recent database operations and activity logs.</CardDescription>
      </CardHeader>
      <CardContent>
        {/* CSV Upload Section */}
        <div className="mb-4">
          <label htmlFor="csv-upload" className="block text-sm font-medium text-gray-700">
            Upload CSV File
          </label>
          <input
            id="csv-upload"
            type="file"
            accept=".csv"
            className="mt-2 p-2 border border-gray-300 rounded-md"
          />
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Query</TableHead>
              <TableHead className="hidden sm:table-cell">Schema</TableHead>
              <TableHead className="hidden sm:table-cell">Operation</TableHead>
              <TableHead className="hidden md:table-cell">Last Accessed</TableHead>
              <TableHead className="text-right">Size</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>
                <div className="font-medium">SELECT * FROM users</div>
              </TableCell>
              <TableCell className="hidden sm:table-cell">public</TableCell>
              <TableCell className="hidden sm:table-cell">
                <Badge className="text-xs" variant="secondary">
                  Read
                </Badge>
              </TableCell>
              <TableCell className="hidden md:table-cell">2023-06-23 10:45 AM</TableCell>
              <TableCell className="text-right">25 MB</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="font-medium">INSERT INTO orders</div>
              </TableCell>
              <TableCell className="hidden sm:table-cell">sales</TableCell>
              <TableCell className="hidden sm:table-cell">
                <Badge className="text-xs" variant="outline">
                  Write
                </Badge>
              </TableCell>
              <TableCell className="hidden md:table-cell">2023-06-24 02:12 PM</TableCell>
              <TableCell className="text-right">15 MB</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="font-medium">UPDATE products SET price</div>
              </TableCell>
              <TableCell className="hidden sm:table-cell">inventory</TableCell>
              <TableCell className="hidden sm:table-cell">
                <Badge className="text-xs" variant="secondary">
                  Update
                </Badge>
              </TableCell>
              <TableCell className="hidden md:table-cell">2023-06-25 04:30 PM</TableCell>
              <TableCell className="text-right">10 MB</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="font-medium">DELETE FROM logs</div>
              </TableCell>
              <TableCell className="hidden sm:table-cell">system</TableCell>
              <TableCell className="hidden sm:table-cell">
                <Badge className="text-xs" variant="outline">
                  Delete
                </Badge>
              </TableCell>
              <TableCell className="hidden md:table-cell">2023-06-26 08:15 AM</TableCell>
              <TableCell className="text-right">5 MB</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="font-medium">ALTER TABLE employees</div>
              </TableCell>
              <TableCell className="hidden sm:table-cell">HR</TableCell>
              <TableCell className="hidden sm:table-cell">
                <Badge className="text-xs" variant="secondary">
                  Modify
                </Badge>
              </TableCell>
              <TableCell className="hidden md:table-cell">2023-06-27 11:00 AM</TableCell>
              <TableCell className="text-right">40 MB</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
