
import React from "react";
import { User, Settings, Bell } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <header className={cn("bg-white shadow-sm px-6 py-4 flex justify-between items-center", className)}>
      <div className="flex items-center">
        <img 
          src="/lovable-uploads/1b675f1d-e2ee-416f-b09e-739f4eb57e91.png" 
          alt="FIND Tax Solutions" 
          className="h-10 mr-2"
        />
      </div>
      <div className="flex items-center space-x-4">
        <button className="p-2 rounded-full hover:bg-neutral-100 transition-colors">
          <Bell size={20} className="text-text-secondary" />
        </button>
        <button className="p-2 rounded-full hover:bg-neutral-100 transition-colors">
          <Settings size={20} className="text-text-secondary" />
        </button>
        <div className="flex items-center space-x-2">
          <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white">
            <User size={20} />
          </div>
          <span className="font-medium hidden md:block">Admin User</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
