
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Image as ImageIcon, User, Settings, Building, Users } from "lucide-react";

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
            <Button variant="ghost" className="text-text-secondary">Painel</Button>
            <Button variant="ghost" className="text-text-secondary">Serviços</Button>
            <Button variant="ghost" className="text-text-secondary">Sobre Nós</Button>
            <Button variant="ghost" className="text-text-secondary">Contato</Button>
          </nav>
          <div>
            <Button 
              className="bg-primary hover:bg-primary/90"
              onClick={() => navigate("/my-account")}
            >
              Portal do Admin
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fadeIn">
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
              Bem-vindo ao FIND Tax Solutions Admin
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Gerencie sua conta, faça upload de imagens de produtos e acesse recursos administrativos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-slideIn">
            <Card className="card-shadow card-hover">
              <CardContent className="p-6">
                <div className="mb-4 h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <User size={24} className="text-primary" />
                </div>
                <h2 className="text-xl font-bold mb-2">Minha Conta</h2>
                <p className="text-text-secondary mb-4">
                  Atualize suas informações de perfil, configurações de segurança e preferências
                </p>
                <Button 
                  variant="outline" 
                  className="flex items-center" 
                  onClick={() => navigate("/my-account")}
                >
                  Gerenciar Perfil
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </CardContent>
            </Card>

            <Card className="card-shadow card-hover">
              <CardContent className="p-6">
                <div className="mb-4 h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center">
                  <ImageIcon size={24} className="text-secondary" />
                </div>
                <h2 className="text-xl font-bold mb-2">Imagens de Produtos</h2>
                <p className="text-text-secondary mb-4">
                  Faça upload e gerencie imagens para seus produtos exibidos nos detalhes do fornecedor
                </p>
                <Button 
                  variant="outline" 
                  className="flex items-center" 
                  onClick={() => navigate("/my-account?tab=images")}
                >
                  Enviar Imagens
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </CardContent>
            </Card>

            <Card className="card-shadow card-hover">
              <CardContent className="p-6">
                <div className="mb-4 h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center">
                  <Settings size={24} className="text-text-primary" />
                </div>
                <h2 className="text-xl font-bold mb-2">Configurações</h2>
                <p className="text-text-secondary mb-4">
                  Configure as configurações do aplicativo, notificações e preferências do sistema
                </p>
                <Button 
                  variant="outline" 
                  className="flex items-center" 
                  onClick={() => navigate("/settings")}
                >
                  Gerenciar Configurações
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </CardContent>
            </Card>

            <Card className="card-shadow card-hover">
              <CardContent className="p-6">
                <div className="mb-4 h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                  <Building size={24} className="text-green-600" />
                </div>
                <h2 className="text-xl font-bold mb-2">Empresa</h2>
                <p className="text-text-secondary mb-4">
                  Gerencie as informações da sua empresa, logotipo e detalhes comerciais
                </p>
                <Button 
                  variant="outline" 
                  className="flex items-center" 
                  onClick={() => navigate("/my-account?tab=company")}
                >
                  Gerenciar Empresa
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </CardContent>
            </Card>

            <Card className="card-shadow card-hover">
              <CardContent className="p-6">
                <div className="mb-4 h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center">
                  <Users size={24} className="text-indigo-600" />
                </div>
                <h2 className="text-xl font-bold mb-2">Usuários</h2>
                <p className="text-text-secondary mb-4">
                  Gerencie perfis de usuários, permissões e informações de contas
                </p>
                <Button 
                  variant="outline" 
                  className="flex items-center" 
                  onClick={() => navigate("/users")}
                >
                  Gerenciar Usuários
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <footer className="bg-white border-t border-neutral-200 py-6 px-6">
        <div className="max-w-7xl mx-auto text-center text-text-secondary text-sm">
          &copy; {new Date().getFullYear()} FIND Tax Solutions. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
};

export default Index;
