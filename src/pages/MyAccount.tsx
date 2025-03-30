
import React from "react";
import Layout from "@/components/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Image as ImageIcon, CreditCard, Lock, Building, Package } from "lucide-react";
import ImageUploader from "@/components/ImageUploader";
import ProductRegistration from "@/components/ProductRegistration";
import CompanyProfileForm from "@/components/CompanyProfileForm";

const MyAccount = () => {
  return (
    <Layout>
      <div className="animate-fadeIn">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-text-primary">Minha Conta</h1>
          <p className="text-text-secondary mt-1">
            Gerencie seu perfil, imagens e configurações da conta
          </p>
        </div>

        <Tabs defaultValue="images" className="space-y-6">
          <TabsList className="bg-neutral-100 p-1 rounded-lg">
            <TabsTrigger value="profile" className="flex items-center space-x-2 data-[state=active]:bg-white data-[state=active]:text-primary">
              <User size={16} />
              <span>Perfil</span>
            </TabsTrigger>
            <TabsTrigger value="images" className="flex items-center space-x-2 data-[state=active]:bg-white data-[state=active]:text-primary">
              <ImageIcon size={16} />
              <span>Imagens de Produtos</span>
            </TabsTrigger>
            <TabsTrigger value="products" className="flex items-center space-x-2 data-[state=active]:bg-white data-[state=active]:text-primary">
              <Package size={16} />
              <span>Produtos</span>
            </TabsTrigger>
            <TabsTrigger value="company" className="flex items-center space-x-2 data-[state=active]:bg-white data-[state=active]:text-primary">
              <Building size={16} />
              <span>Empresa</span>
            </TabsTrigger>
            <TabsTrigger value="billing" className="flex items-center space-x-2 data-[state=active]:bg-white data-[state=active]:text-primary">
              <CreditCard size={16} />
              <span>Faturamento</span>
            </TabsTrigger>
            <TabsTrigger value="security" className="flex items-center space-x-2 data-[state=active]:bg-white data-[state=active]:text-primary">
              <Lock size={16} />
              <span>Segurança</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="profile" className="animate-slideIn">
            <Card>
              <CardHeader>
                <CardTitle>Informações do Perfil</CardTitle>
                <CardDescription>Atualize seus dados pessoais aqui</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Conteúdo do perfil aqui</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="images" className="animate-slideIn">
            <Card>
              <CardHeader>
                <CardTitle>Imagens de Produtos</CardTitle>
                <CardDescription>Faça upload de imagens dos seus produtos para exibir nos detalhes do fornecedor</CardDescription>
              </CardHeader>
              <CardContent>
                <ProductImagesTab />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="products" className="animate-slideIn">
            <Card>
              <CardHeader>
                <CardTitle>Cadastro de Produtos</CardTitle>
                <CardDescription>Cadastre e gerencie seus produtos</CardDescription>
              </CardHeader>
              <CardContent>
                <ProductRegistration />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="company" className="animate-slideIn">
            <Card>
              <CardHeader>
                <CardTitle>Informações da Empresa</CardTitle>
                <CardDescription>Gerencie os detalhes da sua empresa</CardDescription>
              </CardHeader>
              <CardContent>
                <CompanyProfileForm />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="billing" className="animate-slideIn">
            <Card>
              <CardHeader>
                <CardTitle>Informações de Faturamento</CardTitle>
                <CardDescription>Gerencie seus métodos de pagamento e histórico de faturamento</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Conteúdo de faturamento aqui</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="security" className="animate-slideIn">
            <Card>
              <CardHeader>
                <CardTitle>Configurações de Segurança</CardTitle>
                <CardDescription>Gerencie sua senha e preferências de segurança</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Conteúdo de segurança aqui</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

const ProductImagesTab = () => {
  return (
    <div className="space-y-6">
      <div className="bg-blue-50 border border-primary/20 rounded-lg p-4 text-text-primary">
        <div className="flex items-start">
          <div className="mr-3 mt-1 text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
          </div>
          <div>
            <h4 className="font-semibold text-primary">Diretrizes para Imagens</h4>
            <ul className="list-disc list-inside text-sm text-text-secondary mt-2 space-y-1">
              <li>As imagens devem ser de alta qualidade (mín. 1000px de largura)</li>
              <li>Use formato PNG ou JPG/JPEG</li>
              <li>Tamanho máximo do arquivo: 5MB por imagem</li>
              <li>Proporção preferida: 1:1 (quadrada) ou 4:3</li>
              <li>Garanta que o produto esteja claramente visível e bem iluminado</li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <p className="text-text-secondary mb-4">
          Faça upload de imagens que mostrem seus produtos. Essas imagens serão exibidas no seu perfil de fornecedor e nas páginas de detalhes do produto.
        </p>
        <div>
          <ImageUploader />
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
