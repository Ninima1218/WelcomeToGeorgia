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
}: SectionPreviewProps) => {
  return (
    <div 
      id={id} 
      className={`${isLast ? "mb-8" : "mb-16 border-b border-gray-200 pb-12"}`}
    >
      <div className={`flex flex-col ${reversed ? "md:flex-row-reverse" : "md:flex-row"} items-center`}>
        <div className={`md:w-1/2 mb-6 md:mb-0 ${reversed ? "md:pl-8" : "md:pr-8"}`}>
          <h3 className="font-montserrat font-bold text-2xl mb-4 text-primary">{title}</h3>
          {description.map((paragraph, index) => (
            <p key={index} className="mb-4">{paragraph}</p>
          ))}
          <Link href={buttonLink}>
            <a className="inline-block bg-secondary text-white font-montserrat font-medium px-5 py-2 rounded-lg hover:bg-opacity-90 transition duration-300">
              {buttonText}
            </a>
          </Link>
        </div>
        <div className="md:w-1/2">
          <div className={`${reversed ? "" : ""} aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center`}>
            <p className="text-center text-gray-600">
              <span className="material-icons text-5xl mb-2">{imageIcon}</span><br />
              {imageAlt}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionPreview;
