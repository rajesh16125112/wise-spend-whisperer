import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { 
  LayoutDashboard, 
  Receipt, 
  Target, 
  TrendingUp, 
  Settings, 
  Menu,
  Bot,
  Bell
} from "lucide-react";

const navigation = [
  {
    name: "Dashboard",
    href: "/",
    icon: LayoutDashboard,
  },
  {
    name: "Expenses",
    href: "/expenses",
    icon: Receipt,
  },
  {
    name: "Goals",
    href: "/goals",
    icon: Target,
  },
  {
    name: "Analytics",
    href: "/analytics",
    icon: TrendingUp,
  },
  {
    name: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

const Navigation = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const NavContent = () => (
    <div className="space-y-2">
      {navigation.map((item) => {
        const isActive = location.pathname === item.href;
        const Icon = item.icon;
        
        return (
          <Link
            key={item.name}
            to={item.href}
            onClick={() => setIsOpen(false)}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
              isActive
                ? "bg-gradient-to-r from-primary to-primary-light text-primary-foreground shadow-md"
                : "text-muted-foreground hover:text-foreground hover:bg-muted"
            }`}
          >
            <Icon className="w-5 h-5" />
            {item.name}
          </Link>
        );
      })}
    </div>
  );

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex md:flex-col md:w-64 md:border-r md:border-border md:bg-card md:p-6">
        <div className="mb-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-primary to-primary-light flex items-center justify-center">
              <Bot className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h1 className="font-bold text-lg">FinanceAI</h1>
              <p className="text-xs text-muted-foreground">Smart Financial Tool</p>
            </div>
          </div>
        </div>
        <NavContent />
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <div className="flex items-center justify-between p-4 border-b border-border bg-card">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-primary to-primary-light flex items-center justify-center">
              <Bot className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h1 className="font-bold text-lg">FinanceAI</h1>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <Bell className="w-5 h-5" />
            </Button>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-64 p-6">
                <div className="mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-primary to-primary-light flex items-center justify-center">
                      <Bot className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h1 className="font-bold text-lg">FinanceAI</h1>
                      <p className="text-xs text-muted-foreground">Smart Financial Tool</p>
                    </div>
                  </div>
                </div>
                <NavContent />
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;