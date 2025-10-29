import { useState } from "react";
import { X } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

const galleryImages = [
  {
    src: "/lovable-uploads/1a2b3c4d-hurda-party-1.jpg",
    alt: "hurda party Solapur - guests enjoying roasted hurda",
    title: "Traditional Hurda Roasting"
  },
  {
    src: "/lovable-uploads/2e3f4g5h-hurda-party-2.jpg",
    alt: "family hurda party picnic - families having fun outdoors",
    title: "Family Hurda Party Fun"
  },
  {
    src: "/lovable-uploads/3i4j5k6l-hurda-party-3.jpg",
    alt: "corporate hurda party event - team building activities",
    title: "Corporate Team Building"
  },
  {
    src: "/lovable-uploads/4m5n6o7p-hurda-party-4.jpg",
    alt: "hurda party games - traditional village games",
    title: "Traditional Games"
  },
  {
    src: "/lovable-uploads/5q6r7s8t-hurda-party-5.jpg",
    alt: "hurda party food - authentic Maharashtra cuisine",
    title: "Authentic Hurda Feast"
  },
  {
    src: "/lovable-uploads/6u7v8w9x-hurda-party-6.jpg",
    alt: "hurda party Solapur - rural farm setting",
    title: "Scenic Farm Setting"
  }
];

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section className="py-20 bg-background">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Hurda Party Gallery
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Browse photos from past hurda party events at Picnic Point, Solapur
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group"
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <p className="text-white font-semibold text-center px-4">
                  {image.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl">
            <DialogTitle className="sr-only">Image Gallery Lightbox</DialogTitle>
            {selectedImage !== null && (
              <div className="relative">
                <img
                  src={galleryImages[selectedImage].src}
                  alt={galleryImages[selectedImage].alt}
                  className="w-full h-auto rounded-lg"
                />
                <p className="text-center mt-4 font-semibold">
                  {galleryImages[selectedImage].title}
                </p>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default ImageGallery;
