const GeorgianAlphabet = () => {
  // Georgian alphabet characters
  const alphabetChars = [
    'ა', 'ბ', 'გ', 'დ', 'ე', 'ვ', 'ზ', 'თ', 'ი', 'კ', 
    'ლ', 'მ', 'ნ', 'ო', 'პ', 'ჟ', 'რ', 'ს', 'ტ', 'უ', 
    'ფ', 'ქ', 'ღ', 'ყ', 'შ', 'ჩ', 'ც', 'ძ', 'წ', 'ჭ', 
    'ხ', 'ჯ', 'ჰ'
  ];

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
      <h3 className="font-montserrat font-bold text-2xl mb-4 text-secondary">Georgian Alphabet</h3>
      <p className="mb-4">The unique Georgian alphabet, one of the world's 14 alphabets:</p>
      <div className="bg-white p-4 rounded border border-gray-200 overflow-x-auto">
        <div className="grid grid-cols-5 sm:grid-cols-7 md:grid-cols-5 lg:grid-cols-7 gap-2 font-georgian text-center">
          {alphabetChars.map((char, index) => (
            <div key={index} className="p-2 border border-gray-200 rounded">
              {char}
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-center">
          The Georgian alphabet consists of 33 unique characters and is one of the oldest writing systems in the world.
        </p>
      </div>
    </div>
  );
};

export default GeorgianAlphabet;
