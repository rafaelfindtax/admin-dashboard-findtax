
import React from "react";
import { cn } from "@/lib/utils";
import { 
  Home, 
  User, 
  Image, 
  Settings, 
  LogOut, 
  Package, 
  FileText, 
  Users, 
  HelpCircle 
} from "lucide-react";
import { NavLink } from "react-router-dom";

interface SidebarProps {
  className?: string;
}

const SidebarItem = ({ icon, label, to, active = false }: { 
  icon: React.ReactNode, 
  label: string, 
  to: string,
  active?: boolean
}) => {
  return (
    <NavLink 
      to={to} 
      className={({ isActive }) => 
        cn("flex items-center space-x-3 px-4 py-3 rounded-md transition-colors", 
          isActive ? "bg-secondary text-white" : "hover:bg-neutral-100 text-text-secondary"
        )
      }
    >
      {icon}
      <span className="font-medium">{label}</span>
    </NavLink>
  );
};

const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  return (
    <div className={cn("bg-white h-full shadow-sm w-64 flex flex-col py-6", className)}>
      <div className="px-4 mb-6">
        <h2 className="text-lg font-bold text-text-primary">Admin Portal</h2>
      </div>
      
      <div className="flex-1 px-2 space-y-1">
        <SidebarItem icon={<Home size={20} />} label="Dashboard" to="/" />
        <SidebarItem icon={<User size={20} />} label="My Account" to="/my-account" />
        <SidebarItem icon={<Image size={20} />} label="Product Images" to="/my-account/images" />
        <SidebarItem icon={<Package size={20} />} label="Products" to="/products" />
        <SidebarItem icon={<FileText size={20} />} label="Documents" to="/documents" />
        <SidebarItem icon={<Users size={20} />} label="Users" to="/users" />
        <SidebarItem icon={<Settings size={20} />} label="Settings" to="/settings" />
        <SidebarItem icon={<HelpCircle size={20} />} label="Help" to="/help" />
      </div>
      
      <div className="px-2 mt-auto">
        <button className="flex items-center space-x-3 px-4 py-3 rounded-md w-full hover:bg-neutral-100 text-text-secondary transition-colors">
          <LogOut size={20} />
          <span className="font-medium">Log Out</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
