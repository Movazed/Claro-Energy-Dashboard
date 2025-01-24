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

export default function Dashboard() {
  const pathname = usePathname(); // Get the current pathname using usePathname

  const getLinkClass = (path: string) =>
    `flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${
      pathname === path
        ? "bg-muted text-primary" // Selected effect
        : "text-muted-foreground hover:text-primary" // Default style
    }`;

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
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
                <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                  6
                </Badge>
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
            <Card>
              <CardHeader className="p-2 pt-0 md:p-4">
                <CardTitle>Upgrade to Pro</CardTitle>
                <CardDescription>
                  Unlock all features and get unlimited access to our support
                  team.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
                <Button size="sm" className="w-full">
                  Upgrade
                </Button>
              </CardContent>
            </Card>
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
    <Card>
      <CardHeader>
        <CardTitle>Total Revenue</CardTitle>
        <CardDescription>$45,231.89</CardDescription>
        <Badge className="text-green-500">+20.1% from last month</Badge>
      </CardHeader>
    </Card>
    <Card>
      <CardHeader>
        <CardTitle>Subscriptions</CardTitle>
        <CardDescription>+2,350</CardDescription>
        <Badge className="text-green-500">+180.1% from last month</Badge>
      </CardHeader>
    </Card>
    <Card>
      <CardHeader>
        <CardTitle>Sales</CardTitle>
        <CardDescription>+12,234</CardDescription>
        <Badge className="text-green-500">+19% from last month</Badge>
      </CardHeader>
    </Card>
    <Card>
      <CardHeader>
        <CardTitle>Active Now</CardTitle>
        <CardDescription>+573</CardDescription>
        <Badge className="text-green-500">+201 since last hour</Badge>
      </CardHeader>
    </Card>
  </div>

  <div className="grid gap-4 lg:grid-cols-3">
    <Card className="lg:col-span-2">
      <CardHeader>
        <CardTitle>Overview</CardTitle>
      </CardHeader>
      <CardContent>
        {/* Replace this with a graph library like Chart.js or Recharts */}
        <div className="h-[300px] bg-gray-200"></div>
      </CardContent>
    </Card>

    <Card>
      <CardHeader>
        <CardTitle>Recent Sales</CardTitle>
        <CardDescription>You made 265 sales this month.</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {[
            { name: "Olivia Martin", email: "olivia.martin@email.com", amount: "$1,999.00" },
            { name: "Jackson Lee", email: "jackson.lee@email.com", amount: "$1,999.00" },
            { name: "Isabella Nguyen", email: "isabella.nguyen@email.com", amount: "$39.00" },
            { name: "William Kim", email: "will@email.com", amount: "$299.00" },
            { name: "Sofia Davis", email: "sofia.davis@email.com", amount: "$299.00" },
          ].map((sale, index) => (
            <li key={index} className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">{sale.name}</p>
                <p className="text-xs text-muted-foreground">{sale.email}</p>
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
