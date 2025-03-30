
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
        <h2 className="text-lg font-bold text-text-primary">Portal Admin</h2>
      </div>
      
      <div className="flex-1 px-2 space-y-1">
        <SidebarItem icon={<Home size={20} />} label="Painel" to="/" />
        <SidebarItem icon={<User size={20} />} label="Minha Conta" to="/my-account" />
        <SidebarItem icon={<Image size={20} />} label="Imagens de Produtos" to="/my-account/images" />
        <SidebarItem icon={<Package size={20} />} label="Produtos" to="/products" />
        <SidebarItem icon={<FileText size={20} />} label="Documentos" to="/documents" />
        <SidebarItem icon={<Users size={20} />} label="Usuários" to="/users" />
        <SidebarItem icon={<Settings size={20} />} label="Configurações" to="/settings" />
        <SidebarItem icon={<HelpCircle size={20} />} label="Ajuda" to="/help" />
      </div>
      
      <div className="px-2 mt-auto">
        <button className="flex items-center space-x-3 px-4 py-3 rounded-md w-full hover:bg-neutral-100 text-text-secondary transition-colors">
          <LogOut size={20} />
          <span className="font-medium">Sair</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
