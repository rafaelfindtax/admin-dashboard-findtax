
import React, { useState, useRef } from "react";
import { UploadCloud, X, Image as ImageIcon } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface ImageUploaderProps {
  className?: string;
  onImagesSelected?: (files: File[]) => void;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ className, onImagesSelected }) => {
  const [images, setImages] = useState<{ file: File; preview: string }[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      processFiles(Array.from(files));
    }
  };

  const processFiles = (files: File[]) => {
    const imageFiles = files.filter(file => file.type.startsWith('image/'));
    
    if (imageFiles.length !== files.length) {
      toast.warning("Some files were not images and were ignored.");
    }

    const newImages = imageFiles.map(file => ({
      file,
      preview: URL.createObjectURL(file)
    }));

    setImages(prev => [...prev, ...newImages]);
    
    if (onImagesSelected) {
      onImagesSelected(imageFiles);
    }

    toast.success(`${imageFiles.length} images added successfully.`);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    if (files) {
      processFiles(Array.from(files));
    }
  };

  const removeImage = (index: number) => {
    const newImages = [...images];
    URL.revokeObjectURL(newImages[index].preview);
    newImages.splice(index, 1);
    setImages(newImages);
    toast.info("Image removed");
  };

  return (
    <div className={cn("space-y-4", className)}>
      <div
        className={cn(
          "image-upload-area", 
          isDragging ? "border-primary bg-blue-50" : ""
        )}
        onClick={() => fileInputRef.current?.click()}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept="image/*"
          multiple
          className="hidden"
        />
        <div className="flex flex-col items-center">
          <UploadCloud size={40} className="text-primary mb-3" />
          <p className="text-text-primary font-semibold mb-1">
            Drag and drop image files or click to browse
          </p>
          <p className="text-text-secondary text-sm">
            Supported formats: JPG, PNG, GIF (max 5MB each)
          </p>
        </div>
      </div>

      {images.length > 0 && (
        <div className="mt-8">
          <h3 className="text-text-primary font-semibold mb-4">Uploaded Images ({images.length})</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative bg-white rounded-lg overflow-hidden card-shadow card-hover group"
              >
                <div className="aspect-square w-full relative">
                  <img
                    src={image.preview}
                    alt={`Uploaded ${index + 1}`}
                    className="object-cover w-full h-full"
                  />
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      removeImage(index);
                    }}
                    className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md opacity-70 hover:opacity-100 transition-opacity"
                  >
                    <X size={16} className="text-destructive" />
                  </button>
                </div>
                <div className="p-3">
                  <p className="text-sm font-medium truncate">{image.file.name}</p>
                  <p className="text-xs text-text-secondary">
                    {(image.file.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 flex justify-end space-x-3">
            <Button 
              variant="outline" 
              onClick={() => setImages([])}
            >
              Clear All
            </Button>
            <Button 
              className="bg-primary hover:bg-primary/90"
              onClick={() => toast.success("Images saved successfully!")}
            >
              Save Images
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
