import { Outlet, Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import { useState } from "react";

// SHADCN UI
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";

const menuItems = [
  { title: "Dashboard", path: "/admin", icon: "📊" },
  { title: "Users", path: "/admin/users", icon: "👤" },
  { title: "Properties", path: "/admin/properties", icon: "🏘️" },
  { title: "Contacts", path: "/admin/contacts", icon: "✉️" },
  { title: "Comments", path: "/admin/comments", icon: "💬" },
  { title: "Inquiries", path: "/admin/inquiries", icon: "❓" },
];

export default function AdminLayout() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* DESKTOP SIDEBAR */}
      <aside className="hidden lg:block w-64 bg-white shadow-md">
        <div className="p-6 text-xl font-bold border-b">Admin Panel</div>

        <nav className="p-4 space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium 
                ${
                  pathname === item.path
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 hover:bg-gray-200"
                }
              `}
            >
              <span>{item.icon}</span>
              {item.title}
            </Link>
          ))}
        </nav>
      </aside>

      {/* MOBILE SIDEBAR */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button className="m-4 lg:hidden">
            <Menu className="w-5 h-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64 p-0">
          <SheetHeader>
            <SheetTitle className="p-4 border-b text-xl">Admin Panel</SheetTitle>
          </SheetHeader>

          <nav className="p-4 space-y-2">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium 
                  ${
                    pathname === item.path
                      ? "bg-blue-600 text-white"
                      : "text-gray-700 hover:bg-gray-200"
                  }
                `}
              >
                <span>{item.icon}</span>
                {item.title}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>

      {/* CONTENT */}
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
}
