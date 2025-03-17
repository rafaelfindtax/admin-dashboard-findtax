
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { toast } from "sonner";
import ImageUploader from "./ImageUploader";
import { Tag, Globe, FileText, Package, Building } from "lucide-react";

const productCategories = [
  { value: "tech_fiscal", label: "Tecnologia Fiscal", description: "Softwares e APIs para automação fiscal" },
  { value: "erp", label: "ERP", description: "Sistemas de gestão empresarial" },
  { value: "consulting", label: "Consultoria Contábil", description: "Serviços de assessoria e consultoria contábil" },
  { value: "events", label: "Eventos e Cursos", description: "Cursos e eventos voltados para área fiscal e contábil" }
];

const vendorTypes = [
  { value: "fiscal", label: "Fiscal" },
  { value: "erp", label: "ERP" },
  { value: "consulting", label: "Consultoria" },
  { value: "events", label: "Eventos e Cursos" }
];

const formSchema = z.object({
  name: z.string().min(3, { message: "O nome do produto deve ter pelo menos 3 caracteres" }),
  description: z.string().min(10, { message: "A descrição deve ter pelo menos 10 caracteres" }),
  website: z.string().url({ message: "Por favor, insira uma URL válida" }),
  category: z.string({ required_error: "Por favor, selecione uma categoria" }),
  vendorType: z.string({ required_error: "Por favor, selecione um tipo de fornecedor" })
});

type FormValues = z.infer<typeof formSchema>;

const ProductRegistration = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
      website: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log("Form data:", data);
    toast.success("Produto cadastrado com sucesso!");
    form.reset();
  };

  return (
    <div className="space-y-8">
      <div className="bg-blue-50 border border-primary/20 rounded-lg p-4 text-text-primary">
        <div className="flex items-start">
          <div className="mr-3 mt-1 text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
          </div>
          <div>
            <h4 className="font-semibold text-primary">Cadastro de Produto</h4>
            <p className="text-sm text-text-secondary mt-1">
              Preencha os campos abaixo para cadastrar um novo produto. Todos os campos são obrigatórios.
            </p>
          </div>
        </div>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2">
                    <Package size={16} /> Nome do Produto
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Digite o nome do produto" {...field} />
                  </FormControl>
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
                    <Input placeholder="https://exemplo.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2">
                    <Tag size={16} /> Categoria do Produto
                  </FormLabel>
                  <Select 
                    onValueChange={field.onChange} 
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione uma categoria" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {productCategories.map((category) => (
                        <SelectItem key={category.value} value={category.value}>
                          {category.label} - {category.description}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="vendorType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2">
                    <Building size={16} /> Tipo de Fornecedor
                  </FormLabel>
                  <Select 
                    onValueChange={field.onChange} 
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione um tipo" />
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
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-2">
                  <FileText size={16} /> Descrição do Produto
                </FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Descreva seu produto em detalhes..." 
                    className="min-h-32" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div>
            <h3 className="text-base font-medium mb-2 flex items-center gap-2">
              <ImageIcon size={16} /> Imagens do Produto
            </h3>
            <p className="text-sm text-text-secondary mb-4">
              Faça upload de uma ou mais imagens do seu produto. As imagens serão exibidas 
              na página de detalhes do produto.
            </p>
            <ImageUploader />
          </div>

          <div className="flex justify-end space-x-3">
            <Button type="button" variant="outline" onClick={() => form.reset()}>
              Limpar
            </Button>
            <Button type="submit">Cadastrar Produto</Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ProductRegistration;
