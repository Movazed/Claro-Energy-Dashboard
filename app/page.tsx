"use client";

import { useRouter } from "next/navigation"; // Correct import for the App Router
import { usePathname } from "next/navigation"; // Import usePathname for route matching
import Link from "next/link";
import Image from "next/image"; // Import the Image component
import {
  Bell,
  CircleUser,
  Home,
  LineChart,
  Menu,
  Package,
  Package2,
  ShoppingCart,
  Users,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ModeToggle } from "@/components/ui/mode-toggle";
import Orders from "@/components/features/database";
import AdminSearch from "@/components/features/admin-search";

// Import your BarChart component
import BarChart from "@/components/ui/BarChart"; // Adjust the import path as needed

export default function Dashboard() {
  const pathname = usePathname(); // Get the current pathname using usePathname

  const getLinkClass = (path: string) =>
    `flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${
      pathname.startsWith(path)
        ? "bg-muted text-primary" // Selected effect
        : "text-muted-foreground hover:text-primary" // Default style
    }`;

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      {/* Sidebar */}
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <Image
                src="/logo.png"
                alt="Claro Energy Logo"
                width={24}
                height={24}
                className="h-6 w-6"
              />
              <span>Claro Energy</span>
            </Link>
            <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
              <Bell className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              <Link href="/" className={getLinkClass("/")}>
                <Home className="h-4 w-4" />
                Dashboard
              </Link>
              <Link href="/database" className={getLinkClass("/database")}>
                <ShoppingCart className="h-4 w-4" />
                Database
              </Link>
              <Link href="/agents" className={getLinkClass("/agents")}>
                <Package className="h-4 w-4" />
                Agents
              </Link>
              <Link href="/call" className={getLinkClass("/call")}>
                <Users className="h-4 w-4" />
                Call History
              </Link>
            </nav>
          </div>
          <div className="mt-auto p-4">
            {/* Optional: Add footer content here */}
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <nav className="grid gap-2 text-lg font-medium">
                <Link
                  href="#"
                  className="flex items-center gap-2 text-lg font-semibold"
                >
                  <Image
                    src="/logo.png"
                    alt="Claro Energy Logo"
                    width={24}
                    height={24}
                    className="h-6 w-6"
                  />
                  <span className="sr-only">Claro Energy</span>
                </Link>
                <Link href="/" className={getLinkClass("/")}>
                  <Home className="h-5 w-5" />
                  Dashboard
                </Link>
                <Link href="/database" className={getLinkClass("/database")}>
                  <ShoppingCart className="h-5 w-5" />
                  Database
                  <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                    6
                  </Badge>
                </Link>
                <Link href="/agents" className={getLinkClass("/agents")}>
                  <Package className="h-5 w-5" />
                  Agents
                </Link>
                <Link href="/call" className={getLinkClass("/call")}>
                  <Users className="h-5 w-5" />
                  Call History
                </Link>
              </nav>
              <div className="mt-auto">
                <Card>
                  <CardHeader>
                    <CardTitle>Upgrade to Pro</CardTitle>
                    <CardDescription>
                      Unlock all features and get unlimited access to our
                      support team.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button size="sm" className="w-full">
                      Upgrade
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </SheetContent>
          </Sheet>
          <div className="w-full flex-1"></div>
          <ModeToggle />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {/* Dashboard Card */}
            <Link href="/">
              <Card className="cursor-pointer hover:shadow-lg transition-shadow bg-gradient-to-br from-gray-900 to-gray-800 text-white">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">Dashboard Overview</CardTitle>
                  <CardDescription className="text-gray-300">
                    Get a quick summary of your activities.
                  </CardDescription>
                  <Badge className="bg-green-500 hover:bg-green-600 mt-2">View Insights</Badge>
                </CardHeader>
              </Card>
            </Link>

            {/* Database Card */}
            <Link href="/database">
              <Card className="cursor-pointer hover:shadow-lg transition-shadow bg-gradient-to-br from-blue-900 to-blue-800 text-white">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">Database Management</CardTitle>
                  <CardDescription className="text-gray-300">
                    Manage and analyze your data efficiently.
                  </CardDescription>
                  <Badge className="bg-blue-500 hover:bg-blue-600 mt-2">Explore Data</Badge>
                </CardHeader>
              </Card>
            </Link>

            {/* Agents Card */}
            <Link href="/agents">
              <Card className="cursor-pointer hover:shadow-lg transition-shadow bg-gradient-to-br from-purple-900 to-purple-800 text-white">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">Agents Performance</CardTitle>
                  <CardDescription className="text-gray-300">
                    Track and manage your agents' activities.
                  </CardDescription>
                  <Badge className="bg-purple-500 hover:bg-purple-600 mt-2">Monitor Agents</Badge>
                </CardHeader>
              </Card>
            </Link>

            {/* Call History Card */}
            <Link href="/call">
              <Card className="cursor-pointer hover:shadow-lg transition-shadow bg-gradient-to-br from-indigo-900 to-indigo-800 text-white">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">Call History</CardTitle>
                  <CardDescription className="text-gray-300">
                    Review and analyze call logs.
                  </CardDescription>
                  <Badge className="bg-indigo-500 hover:bg-indigo-600 mt-2">View Logs</Badge>
                </CardHeader>
              </Card>
            </Link>
          </div>

          {/* Full-width Overview and Recent Sales Section */}
          <div className="grid gap-4 lg:grid-cols-1">
            {/* Overview Card */}
            <Card className="w-full">
              <CardHeader>
                <CardTitle>Overview</CardTitle>
              </CardHeader>
              <CardContent>
                {/* Use your BarChart component here */}
                <BarChart />
              </CardContent>
            </Card>

            {/* Recent Sales Card */}
            <Card className="w-full">
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>You made 2 changes in the database.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {[
                    {
                      name: "Olivia Martin",
                      email: "olivia.martin@email.com",
                      amount: "$1,999.00",
                    },
                    {
                      name: "Jackson Lee",
                      email: "jackson.lee@email.com",
                      amount: "$1,999.00",
                    },
                    {
                      name: "Isabella Nguyen",
                      email: "isabella.nguyen@email.com",
                      amount: "$39.00",
                    },
                    {
                      name: "William Kim",
                      email: "will@email.com",
                      amount: "$299.00",
                    },
                    {
                      name: "Sofia Davis",
                      email: "sofia.davis@email.com",
                      amount: "$299.00",
                    },
                  ].map((sale, index) => (
                    <li key={index} className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium">{sale.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {sale.email}
                        </p>
                      </div>
                      <p className="text-sm font-medium">{sale.amount}</p>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}