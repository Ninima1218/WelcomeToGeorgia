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
      className={`py-16 ${isLast ? "" : "border-b border-gray-200"}`}
    >
      <div className="container mx-auto px-6">
        <div className={`flex flex-col ${reversed ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-12`}>
          {/* Content */}
          <div className="md:w-1/2">
            <h3 className="font-serif font-bold text-3xl mb-4 text-primary">{title}</h3>
            <div className="space-y-4 text-gray-700 mb-8">
              {description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            <Link href={buttonLink}>
              <span className="inline-block bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 cursor-pointer">
                {buttonText}
              </span>
            </Link>
          </div>
          
          {/* Image area */}
          <div className="md:w-1/2">
            {hasImage ? (
              <div className="aspect-w-16 aspect-h-10 rounded-xl overflow-hidden shadow-lg">
                <img 
                  src={image} 
                  alt={imageAlt} 
                  className="object-cover w-full h-full"
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
