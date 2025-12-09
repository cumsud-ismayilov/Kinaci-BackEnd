import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";

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
  const [darkMode, setDarkMode] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  // Dark mode state localStorage-dan oxu (refresh sonrası qalıcı olsun)
  useEffect(() => {
    const savedTheme = localStorage.getItem("admin-dark-mode");
    if (savedTheme === "true") setDarkMode(true);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("admin_token");
    navigate("/admin/login");
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("admin-dark-mode", !darkMode); // seçimi yadda saxla
  };

  return (
    <div className={`flex min-h-screen ${darkMode ? "dark bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}>
      {/* DESKTOP SIDEBAR */}
      <aside className="hidden lg:flex flex-col w-64 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 shadow-md">
        <div className="p-6 text-xl font-bold border-b">Admin Panel</div>

        <nav className="p-4 space-y-2 flex-1">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium
                ${
                  pathname === item.path
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                }
              `}
            >
              <span>{item.icon}</span>
              {item.title}
            </Link>
          ))}
        </nav>

        {/* Logout + Dark Mode Toggle */}
        <div className="p-4 border-t flex gap-2">
          <Button variant="destructive" className="flex-1" onClick={handleLogout}>
            Logout
          </Button>
          <Button variant="secondary" className="flex-1" onClick={toggleDarkMode}>
            {darkMode ? <Sun className="w-4 h-4 mr-2" /> : <Moon className="w-4 h-4 mr-2" />}
            {darkMode ? "Light" : "Dark"}
          </Button>
        </div>
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

          <nav className="p-4 space-y-2 flex-1">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium
                  ${
                    pathname === item.path
                      ? "bg-blue-600 text-white"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                  }
                `}
              >
                <span>{item.icon}</span>
                {item.title}
              </Link>
            ))}
          </nav>

          {/* Logout + Dark Mode Toggle */}
          <div className="p-4 border-t flex gap-2">
            <Button
              variant="destructive"
              className="flex-1"
              onClick={() => {
                handleLogout();
                setOpen(false);
              }}
            >
              Logout
            </Button>
            <Button
              variant="secondary"
              className="flex-1"
              onClick={() => {
                toggleDarkMode();
                setOpen(false);
              }}
            >
              {darkMode ? <Sun className="w-4 h-4 mr-2" /> : <Moon className="w-4 h-4 mr-2" />}
              {darkMode ? "Light" : "Dark"}
            </Button>
          </div>
        </SheetContent>
      </Sheet>

      {/* CONTENT */}
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
}
