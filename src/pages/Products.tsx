
import React from "react";
import Layout from "@/components/Layout";
import ProductRegistration from "@/components/ProductRegistration";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Package } from "lucide-react";

const Products = () => {
  return (
    <Layout>
      <div className="animate-fadeIn">
        <div className="mb-6 flex items-center gap-3">
          <Package size={28} className="text-primary" />
          <div>
            <h1 className="text-3xl font-bold text-text-primary">Products</h1>
            <p className="text-text-secondary mt-1">
              Register and manage your products
            </p>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Product Registration</CardTitle>
            <CardDescription>Register a new product with all required information</CardDescription>
          </CardHeader>
          <CardContent>
            <ProductRegistration />
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Products;
