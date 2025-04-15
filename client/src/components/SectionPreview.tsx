import { Link } from "wouter";

interface SectionPreviewProps {
  id: string;
  title: string;
  description: string[];
  buttonText: string;
  buttonLink: string;
  imageIcon: string;
  imageAlt: string;
  reversed?: boolean;
  isLast?: boolean;
  image?: string;
}

const SectionPreview = ({
  id,
  title,
  description,
  buttonText,
  buttonLink,
  imageIcon,
  imageAlt,
  reversed = false,
  isLast = false,
  image,
}: SectionPreviewProps) => {
  const hasImage = !!image;

  return (
    <div 
      id={id} 
      className={`py-12 md:py-16 ${isLast ? "" : "border-b border-gray-200"}`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className={`flex flex-col ${reversed ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-8 md:gap-12`}>
          {/* Content */}
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <h3 className="font-serif font-bold text-2xl md:text-3xl mb-4 text-primary">{title}</h3>
            <div className="space-y-4 text-gray-700 mb-6 md:mb-8">
              {description.map((paragraph, index) => (
                <p key={index} className="text-sm md:text-base">{paragraph}</p>
              ))}
            </div>
            <Link href={buttonLink}>
              <span className="inline-block bg-primary hover:bg-primary/90 text-white px-5 py-2 md:px-6 md:py-3 rounded-lg font-medium transition-colors duration-200 cursor-pointer text-sm md:text-base">
                {buttonText}
              </span>
            </Link>
          </div>
          
          {/* Image area */}
          <div className="w-full lg:w-1/2">
            {hasImage ? (
              <div className="aspect-w-16 aspect-h-10 rounded-xl overflow-hidden shadow-lg">
                <img 
                  src={image} 
                  alt={imageAlt} 
                  className="object-cover w-full h-full"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
            ) : (
              <div className="aspect-w-16 aspect-h-10 bg-gray-200 rounded-xl overflow-hidden flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <span className="material-icons text-5xl mb-3">{imageIcon}</span>
                  <p>{imageAlt}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionPreview;
