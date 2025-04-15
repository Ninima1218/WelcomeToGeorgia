import { useLanguage } from "@/contexts/LanguageContext";

const Lessons = () => {
  const { t } = useLanguage();

  // Georgian language examples with translations
  const phrases = [
    { georgian: "გამარჯობა", english: "Hello", pronunciation: "gamarjoba" },
    { georgian: "როგორ ხარ?", english: "How are you?", pronunciation: "rogor khar?" },
    { georgian: "გმადლობთ", english: "Thank you", pronunciation: "gmadlobt" },
    { georgian: "კი", english: "Yes", pronunciation: "ki" },
    { georgian: "არა", english: "No", pronunciation: "ara" },
    { georgian: "ნახვამდის", english: "Goodbye", pronunciation: "nakhvamdis" },
    { georgian: "გაგიმარჯოს", english: "Cheers", pronunciation: "gaumarjos" },
  ];

  // Course features
  const courseFeatures = [
    "Personalized learning approach",
    "Focus on conversational Georgian",
    "Cultural context for better understanding",
    "Flexible schedule - online or in-person",
    "Small group sessions for more attention",
    "Materials tailored to your learning style"
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Hero section */}
          <div className="mb-16 text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              <span className="text-primary">Georgian</span> Language Lessons
            </h1>
            <h2 className="font-georgian text-3xl text-gray-600 mb-6">
              ქართული ენის გაკვეთილები
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Learn one of the world's most unique languages with an experienced teacher
              using an original training program designed for your success.
            </p>
            <div className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Start Your Georgian Journey
            </div>
          </div>

          {/* Language preview */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-center mb-8">Learn Essential Georgian Phrases</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {phrases.map((phrase, index) => (
                <div key={index} className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <h4 className="font-georgian text-2xl mb-1">{phrase.georgian}</h4>
                  <p className="text-gray-700 font-medium">{phrase.english}</p>
                  <p className="text-gray-500 text-sm italic">Pronunciation: {phrase.pronunciation}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Teacher profile */}
          <div className="flex flex-col md:flex-row gap-8 bg-white p-8 rounded-xl shadow-md mb-16">
            <div className="md:w-1/3">
              <div className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-5xl font-georgian">მ</span>
              </div>
            </div>
            <div className="md:w-2/3">
              <h3 className="text-2xl font-semibold mb-3">Meet Your Teacher</h3>
              <p className="text-gray-700 mb-4">
                As a native Georgian speaker with years of teaching experience, I've developed
                an original training program that focuses on practical language skills and
                cultural understanding.
              </p>
              <p className="text-gray-700 mb-4">
                My methodology is tailored to your unique learning style, making Georgian 
                language acquisition accessible and enjoyable regardless of your background.
              </p>
              <div className="border-t border-gray-200 pt-4 mt-4">
                <h4 className="font-medium mb-2">Course Highlights:</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
                  {courseFeatures.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <span className="material-icons text-primary mr-2 text-sm">check_circle</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Call to action */}
          <div className="bg-gray-900 text-white rounded-xl p-8 text-center">
            <h3 className="text-2xl font-semibold mb-3">Ready to Learn Georgian?</h3>
            <p className="mb-6">
              Start your language learning journey with personalized lessons tailored to your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors">
                Request Information
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lessons;