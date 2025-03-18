
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Image as ImageIcon, User, Settings, Building } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-neutral-100 font-ubuntu">
      <header className="bg-white shadow-sm px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <img
              src="/lovable-uploads/1b675f1d-e2ee-416f-b09e-739f4eb57e91.png"
              alt="FIND Tax Solutions"
              className="h-10"
            />
          </div>
          <nav className="hidden md:flex items-center space-x-1">
            <Button variant="ghost" className="text-text-secondary">Dashboard</Button>
            <Button variant="ghost" className="text-text-secondary">Services</Button>
            <Button variant="ghost" className="text-text-secondary">About Us</Button>
            <Button variant="ghost" className="text-text-secondary">Contact</Button>
          </nav>
          <div>
            <Button 
              className="bg-primary hover:bg-primary/90"
              onClick={() => navigate("/my-account")}
            >
              Admin Portal
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fadeIn">
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
              Welcome to FIND Tax Solutions Admin
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Manage your account, upload product images, and access administrative features
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-slideIn">
            <Card className="card-shadow card-hover">
              <CardContent className="p-6">
                <div className="mb-4 h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <User size={24} className="text-primary" />
                </div>
                <h2 className="text-xl font-bold mb-2">My Account</h2>
                <p className="text-text-secondary mb-4">
                  Update your profile information, security settings, and preferences
                </p>
                <Button 
                  variant="outline" 
                  className="flex items-center" 
                  onClick={() => navigate("/my-account")}
                >
                  Manage Profile
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </CardContent>
            </Card>

            <Card className="card-shadow card-hover">
              <CardContent className="p-6">
                <div className="mb-4 h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center">
                  <ImageIcon size={24} className="text-secondary" />
                </div>
                <h2 className="text-xl font-bold mb-2">Product Images</h2>
                <p className="text-text-secondary mb-4">
                  Upload and manage images for your products to display in vendor details
                </p>
                <Button 
                  variant="outline" 
                  className="flex items-center" 
                  onClick={() => navigate("/my-account?tab=images")}
                >
                  Upload Images
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </CardContent>
            </Card>

            <Card className="card-shadow card-hover">
              <CardContent className="p-6">
                <div className="mb-4 h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center">
                  <Settings size={24} className="text-text-primary" />
                </div>
                <h2 className="text-xl font-bold mb-2">Settings</h2>
                <p className="text-text-secondary mb-4">
                  Configure application settings, notifications, and system preferences
                </p>
                <Button 
                  variant="outline" 
                  className="flex items-center" 
                  onClick={() => navigate("/settings")}
                >
                  Manage Settings
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </CardContent>
            </Card>

            <Card className="card-shadow card-hover">
              <CardContent className="p-6">
                <div className="mb-4 h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                  <Building size={24} className="text-green-600" />
                </div>
                <h2 className="text-xl font-bold mb-2">Company</h2>
                <p className="text-text-secondary mb-4">
                  Manage your company information, logo, and business details
                </p>
                <Button 
                  variant="outline" 
                  className="flex items-center" 
                  onClick={() => navigate("/my-account?tab=company")}
                >
                  Manage Company
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <footer className="bg-white border-t border-neutral-200 py-6 px-6">
        <div className="max-w-7xl mx-auto text-center text-text-secondary text-sm">
          &copy; {new Date().getFullYear()} FIND Tax Solutions. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Index;
