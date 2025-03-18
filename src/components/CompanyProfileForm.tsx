
import React, { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";
import ImageUploader from "./ImageUploader";
import { Building, Globe, FileText } from "lucide-react";

const vendorTypes = [
  { value: "course", label: "Curso" },
  { value: "consulting", label: "Consultoria" },
  { value: "erp", label: "ERP" },
  { value: "event", label: "Evento" },
  { value: "fiscal_tech", label: "Tecnologia Fiscal" },
];

const companyFormSchema = z.object({
  name: z.string().min(2, {
    message: "O nome da empresa deve ter pelo menos 2 caracteres",
  }),
  description: z.string().min(10, {
    message: "A descrição deve ter pelo menos 10 caracteres",
  }).max(500, {
    message: "A descrição não pode ter mais de 500 caracteres",
  }),
  website: z.string().url({
    message: "Por favor, insira uma URL válida",
  }),
  vendorType: z.string({
    required_error: "Por favor, selecione um tipo de fornecedor",
  }),
});

type CompanyFormValues = z.infer<typeof companyFormSchema>;

// Mock company data - in a real app, this would come from an API
const defaultValues: Partial<CompanyFormValues> = {
  name: "Minha Empresa",
  description: "Descrição da empresa...",
  website: "https://minhaempresa.com.br",
  vendorType: "fiscal_tech",
};

const CompanyProfileForm = () => {
  const [logo, setLogo] = useState<File[]>([]);
  
  const form = useForm<CompanyFormValues>({
    resolver: zodResolver(companyFormSchema),
    defaultValues,
  });

  function onSubmit(data: CompanyFormValues) {
    // In a real application, this would upload the logo and save the company data
    console.log("Company data submitted:", data);
    console.log("Logo:", logo);
    
    toast.success("Informações da empresa atualizadas com sucesso!");
  }

  return (
    <div className="space-y-8">
      <div className="space-y-6">
        <div>
          <h3 className="text-base font-medium mb-2 flex items-center gap-2">
            <Building size={16} /> Logo da Empresa
          </h3>
          <p className="text-sm text-text-secondary mb-4">
            Faça upload de um logo para sua empresa. Este logo será exibido no seu perfil e listagens.
          </p>
          <div className="max-w-md">
            <ImageUploader 
              onImagesSelected={(files) => setLogo(files)}
            />
          </div>
          <p className="text-xs text-text-secondary mt-2">
            Recomendado: imagem quadrada com pelo menos 200x200 pixels.
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2">
                    <Building size={16} /> Nome da Empresa
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Nome da sua empresa" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2">
                    <FileText size={16} /> Descrição
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Descreva sua empresa em poucas palavras"
                      className="min-h-[120px]"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Uma breve descrição da sua empresa e dos serviços oferecidos.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="website"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2">
                    <Globe size={16} /> Website
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="https://seuwebsite.com.br" {...field} />
                  </FormControl>
                  <FormDescription>
                    O website oficial da sua empresa.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="vendorType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tipo de Fornecedor</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione o tipo de fornecedor" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {vendorTypes.map((type) => (
                        <SelectItem key={type.value} value={type.value}>
                          {type.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormDescription>
                    Categoria principal de atuação da sua empresa.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-end">
              <Button type="submit">Salvar Alterações</Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default CompanyProfileForm;
