
import React from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { User, Mail, Phone, Building, MapPin } from "lucide-react";

const Users = () => {
  return (
    <Layout>
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">User Management</h1>
          <p className="text-text-secondary mt-2">
            View and manage user accounts and profiles
          </p>
        </div>
        
        <Card className="overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Avatar className="h-16 w-16 border-2 border-white mr-4">
                <AvatarImage src="" alt="Admin" />
                <AvatarFallback className="bg-white text-blue-500 text-xl font-bold">A</AvatarFallback>
              </Avatar>
              <div>
                <h2 className="text-white text-2xl font-bold">Administrador</h2>
                <p className="text-white/90">admin@findtaxsolutions.com</p>
              </div>
            </div>
            <Button className="bg-white text-primary hover:bg-white/90">
              Editar Perfil
            </Button>
          </div>
          
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-text-primary">Informações Pessoais</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="mt-1 mr-4 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <User className="h-5 w-5 text-blue-500" />
                    </div>
                    <div>
                      <p className="text-text-secondary mb-1">Nome</p>
                      <p className="font-medium text-text-primary">Administrador</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mt-1 mr-4 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-blue-500" />
                    </div>
                    <div>
                      <p className="text-text-secondary mb-1">Email</p>
                      <p className="font-medium text-text-primary">admin@findtaxsolutions.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mt-1 mr-4 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 text-blue-500" />
                    </div>
                    <div>
                      <p className="text-text-secondary mb-1">Telefone</p>
                      <p className="font-medium text-text-primary">(11) 98765-4321</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4 text-text-primary">Informações da Empresa</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="mt-1 mr-4 h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                      <Building className="h-5 w-5 text-purple-500" />
                    </div>
                    <div>
                      <p className="text-text-secondary mb-1">Empresa</p>
                      <p className="font-medium text-text-primary">Find Tax Solutions</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mt-1 mr-4 h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-purple-500" />
                    </div>
                    <div>
                      <p className="text-text-secondary mb-1">Endereço</p>
                      <p className="font-medium text-text-primary">Av. Paulista, 1000 - São Paulo, SP</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-4">Ações</h3>
          <div className="flex flex-wrap gap-4">
            <Button variant="outline" className="flex items-center">
              <User className="mr-2 h-4 w-4" />
              Alterar Senha
            </Button>
            <Button variant="outline" className="flex items-center">
              <Mail className="mr-2 h-4 w-4" />
              Enviar Email
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Users;
