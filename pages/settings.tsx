'use client'
import { useState } from "react";
import Link from "next/link";
import { CircleUser, Menu, Package2, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/Dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import '../../settings-page/styles/globals.css';

export function Settings() {
  const [activeSection, setActiveSection] = useState("general");

  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <Link href="https://ai-interviewer.framer.website/" className="flex items-center gap-2" prefetch={false}>
          <div className="text-white">AI Interviewer</div>
        </Link>
        <nav className="flex items-center space-x-4 gap-4">
          <Link
            href="/"
            className="inline-flex h-9 items-center justify-center rounded-md border px-4 text-lg font-semibold text-white dark:from-white dark:to-slate-900/10 transition-colors hover:bg-muted/80 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            Dashboard
          </Link>
          <Link
            href="/interview"
            className="inline-flex h-9 items-center justify-center rounded-md border px-4 text-lg font-semibold text-white dark:from-white dark:to-slate-900/10 transition-colors hover:bg-muted/80 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            Interview
          </Link>
          <Link
            href="/settings" // Update the link to point to the correct path
            className="inline-flex h-9 items-center justify-center rounded-md border px-4 text-lg font-semibold text-white dark:from-white dark:to-slate-900/10 transition-colors hover:bg-muted/80 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            Settings
          </Link>
          <Link
            href="#"
            className="inline-flex h-9 items-center justify-center rounded-md border px-4 text-lg font-semibold text-white dark:from-white dark:to-slate-900/10 transition-colors hover:bg-muted/80 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            Help
          </Link>
        </nav>
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
          <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium">
              <Link
                href="#"
                className="flex items-center gap-2 text-lg font-semibold"
              >
                <Package2 className="h-6 w-6" />
                <span className="sr-only">Acme Inc</span>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Dashboard
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Orders
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Products
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Customers
              </Link>
              <Link href="#" className="hover:text-foreground">
                Settings
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <form className="ml-auto flex-1 sm:flex-initial">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search products..."
                className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
              />
            </div>
          </form>
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
        </div>
      </header>
      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
        <div className="mx-auto grid w-full max-w-6xl gap-2">
          <h1 className="text-3xl font-semibold">Settings</h1>
        </div>
        <div className="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
          <nav className="grid gap-4 text-sm text-muted-foreground">
            <button onClick={() => setActiveSection("general")} className={`nav-link font-semibold ${activeSection === "general" ? "text-primary" : ""}`}>
              General
            </button>
            <button onClick={() => setActiveSection("interview-settings")} className={`nav-link font-semibold ${activeSection === "interview-settings" ? "text-primary" : ""}`}>
              Interview Settings
            </button>
            <button onClick={() => setActiveSection("notifications")} className={`nav-link font-semibold ${activeSection === "notifications" ? "text-primary" : ""}`}>
              Notifications
            </button>
            <button onClick={() => setActiveSection("appearance")} className={`nav-link font-semibold ${activeSection === "appearance" ? "text-primary" : ""}`}>
              Appearance
            </button>
            <button onClick={() => setActiveSection("support")} className={`nav-link font-semibold ${activeSection === "support" ? "text-primary" : ""}`}>
              Support
            </button>
            <button onClick={() => setActiveSection("advanced")} className={`nav-link font-semibold ${activeSection === "advanced" ? "text-primary" : ""}`}>
              Advanced
            </button>
          </nav>
          <div className="grid gap-6">
            {activeSection === "general" && (
              <Card>
                <CardHeader>
                  <CardTitle>General</CardTitle>
                  <CardDescription>Update your profile information.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="flex flex-col gap-4">
                    <Input placeholder="Name" />
                    <Input type="email" placeholder="Email" />
                    <Button>Change Password</Button>
                  </form>
                </CardContent>
                <CardFooter className="border-t px-6 py-4">
                  <Button>Save</Button>
                </CardFooter>
              </Card>
            )}
            {activeSection === "interview-settings" && (
              <Card>
                <CardHeader>
                  <CardTitle>Interview Settings</CardTitle>
                  <CardDescription>Customize your interview experience.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="flex flex-col gap-4">
                    <label htmlFor="interviewMode">Interview Mode</label>
                    <select id="interviewMode">
                      <option value="mock">Mock Interviews</option>
                      <option value="job">Job-specific Interviews</option>
                    </select>
                    <label htmlFor="difficulty">Question Difficulty</label>
                    <select id="difficulty">
                      <option value="easy">Easy</option>
                      <option value="medium">Medium</option>
                      <option value="hard">Hard</option>
                    </select>
                    <label htmlFor="duration">Interview Duration</label>
                    <select id="duration">
                      <option value="15">15 mins</option>
                      <option value="30">30 mins</option>
                      <option value="60">60 mins</option>
                    </select>
                  </form>
                </CardContent>
                <CardFooter className="border-t px-6 py-4">
                  <Button>Save</Button>
                </CardFooter>
              </Card>
            )}
            {activeSection === "notifications" && (
              <Card>
                <CardHeader>
                  <CardTitle>Notifications</CardTitle>
                  <CardDescription>Manage your notification preferences.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="flex flex-col gap-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="emailNotifications" defaultChecked />
                      <label htmlFor="emailNotifications">Email Notifications</label>
                    </div>
                  </form>
                </CardContent>
                <CardFooter className="border-t px-6 py-4">
                  <Button>Save</Button>
                </CardFooter>
              </Card>
            )}
            {activeSection === "appearance" && (
              <Card>
                <CardHeader>
                  <CardTitle>Appearance</CardTitle>
                  <CardDescription>Customize the appearance of the application.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="flex flex-col gap-4">
                    <label htmlFor="theme">Theme</label>
                    <select id="theme">
                      <option value="light">Light Mode</option>
                      <option value="dark">Dark Mode</option>
                    </select>
                  </form>
                </CardContent>
                <CardFooter className="border-t px-6 py-4">
                  <Button>Save</Button>
                </CardFooter>
              </Card>
            )}
            {activeSection === "support" && (
              <Card>
                <CardHeader>
                  <CardTitle>Support</CardTitle>
                  <CardDescription>Get help and support for your application.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="flex flex-col gap-4">
                    <Link href="#">FAQs</Link>
                    <Link href="#">Contact Support</Link>
                  </form>
                </CardContent>
              </Card>
            )}
            {activeSection === "advanced" && (
              <Card>
                <CardHeader>
                  <CardTitle>Advanced</CardTitle>
                  <CardDescription>Advanced settings for your application.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="flex flex-col gap-4">
                    <Button>Export Data</Button>
                    <Button>Delete Account</Button>
                  </form>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Settings;
