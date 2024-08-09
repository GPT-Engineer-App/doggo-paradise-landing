import { useState } from 'react';
import { Paw, Heart, Users, Award } from 'lucide-react';

const DogBreed = ({ name, description, imageUrl }) => (
  <div className="bg-white rounded-lg shadow-md p-6">
    <img src={imageUrl} alt={name} className="w-full h-48 object-cover rounded-md mb-4" />
    <h3 className="text-xl font-semibold mb-2">{name}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Index = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter signup logic here
    console.log('Signed up with email:', email);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Welcome to DogLover's Paradise</h1>
          <p className="text-xl mb-8">Discover the joy and companionship that dogs bring to our lives.</p>
          <a href="#learn-more" className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-100 transition duration-300">
            Learn More
          </a>
        </div>
      </section>

      {/* Key Information Section */}
      <section className="py-16" id="learn-more">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Dogs are Amazing</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Paw className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-2">Loyal Companions</h3>
              <p className="text-gray-600">Dogs are known for their unwavering loyalty and affection.</p>
            </div>
            <div className="text-center">
              <Heart className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-2">Emotional Support</h3>
              <p className="text-gray-600">They provide comfort and reduce stress and anxiety.</p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-2">Social Catalysts</h3>
              <p className="text-gray-600">Dogs help us connect with others and make new friends.</p>
            </div>
            <div className="text-center">
              <Award className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-2">Trainable</h3>
              <p className="text-gray-600">From basic commands to complex tasks, dogs are highly trainable.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Dog Breeds Section */}
      <section className="bg-gray-200 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Popular Dog Breeds</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <DogBreed
              name="Labrador Retriever"
              description="Friendly, outgoing, and high-spirited companions who have more than enough affection to go around."
              imageUrl="https://images.unsplash.com/photo-1605897472359-85e4b94d685d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
            />
            <DogBreed
              name="German Shepherd"
              description="Intelligent, capable, and loving dogs that excel at most anything they're trained to do."
              imageUrl="https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
            />
            <DogBreed
              name="Golden Retriever"
              description="Intelligent, friendly, and devoted dogs that are both great family companions and talented working dogs."
              imageUrl="https://images.unsplash.com/photo-1633722715463-d30f4f325e24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
            />
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Stay Updated</h2>
          <p className="text-center mb-8">Sign up for our newsletter to receive the latest dog care tips and news.</p>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-grow px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded-r-md hover:bg-blue-700 transition duration-300"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Index;
