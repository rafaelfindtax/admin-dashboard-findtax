
import React from "react";
import Layout from "@/components/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Image as ImageIcon, CreditCard, Lock, Building, Package } from "lucide-react";
import ImageUploader from "@/components/ImageUploader";
import ProductRegistration from "@/components/ProductRegistration";

const MyAccount = () => {
  return (
    <Layout>
      <div className="animate-fadeIn">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-text-primary">My Account</h1>
          <p className="text-text-secondary mt-1">
            Manage your profile, images, and account settings
          </p>
        </div>

        <Tabs defaultValue="images" className="space-y-6">
          <TabsList className="bg-neutral-100 p-1 rounded-lg">
            <TabsTrigger value="profile" className="flex items-center space-x-2 data-[state=active]:bg-white data-[state=active]:text-primary">
              <User size={16} />
              <span>Profile</span>
            </TabsTrigger>
            <TabsTrigger value="images" className="flex items-center space-x-2 data-[state=active]:bg-white data-[state=active]:text-primary">
              <ImageIcon size={16} />
              <span>Product Images</span>
            </TabsTrigger>
            <TabsTrigger value="products" className="flex items-center space-x-2 data-[state=active]:bg-white data-[state=active]:text-primary">
              <Package size={16} />
              <span>Products</span>
            </TabsTrigger>
            <TabsTrigger value="company" className="flex items-center space-x-2 data-[state=active]:bg-white data-[state=active]:text-primary">
              <Building size={16} />
              <span>Company</span>
            </TabsTrigger>
            <TabsTrigger value="billing" className="flex items-center space-x-2 data-[state=active]:bg-white data-[state=active]:text-primary">
              <CreditCard size={16} />
              <span>Billing</span>
            </TabsTrigger>
            <TabsTrigger value="security" className="flex items-center space-x-2 data-[state=active]:bg-white data-[state=active]:text-primary">
              <Lock size={16} />
              <span>Security</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="profile" className="animate-slideIn">
            <Card>
              <CardHeader>
                <CardTitle>Profile Information</CardTitle>
                <CardDescription>Update your personal details here</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Profile content goes here</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="images" className="animate-slideIn">
            <Card>
              <CardHeader>
                <CardTitle>Product Images</CardTitle>
                <CardDescription>Upload images of your products to display in vendor details</CardDescription>
              </CardHeader>
              <CardContent>
                <ProductImagesTab />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="products" className="animate-slideIn">
            <Card>
              <CardHeader>
                <CardTitle>Product Registration</CardTitle>
                <CardDescription>Register and manage your products</CardDescription>
              </CardHeader>
              <CardContent>
                <ProductRegistration />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="company" className="animate-slideIn">
            <Card>
              <CardHeader>
                <CardTitle>Company Information</CardTitle>
                <CardDescription>Manage your company details</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Company content goes here</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="billing" className="animate-slideIn">
            <Card>
              <CardHeader>
                <CardTitle>Billing Information</CardTitle>
                <CardDescription>Manage your payment methods and billing history</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Billing content goes here</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="security" className="animate-slideIn">
            <Card>
              <CardHeader>
                <CardTitle>Security Settings</CardTitle>
                <CardDescription>Manage your password and security preferences</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Security content goes here</p>
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
            <h4 className="font-semibold text-primary">Image Guidelines</h4>
            <ul className="list-disc list-inside text-sm text-text-secondary mt-2 space-y-1">
              <li>Images should be high quality (min. 1000px width)</li>
              <li>Use PNG or JPG/JPEG format</li>
              <li>Maximum file size: 5MB per image</li>
              <li>Preferred aspect ratio: 1:1 (square) or 4:3</li>
              <li>Ensure product is clearly visible and well-lit</li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <p className="text-text-secondary mb-4">
          Upload images that showcase your products. These images will be displayed on your vendor profile and product details pages.
        </p>
        <div>
          <ImageUploader />
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
