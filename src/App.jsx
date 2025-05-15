
import { useState } from 'react';
import logo from './assets/logo.png';
import heroImg from './assets/hero.png';
import servicesImg from './assets/services.png';
import loc1 from './assets/location1.png';
import loc2 from './assets/location2.png';
import loc3 from './assets/location3.png';

const clinics = [
  {
    name: 'Pawsville',
    desc: 'Located at the heart of VetClinic Poznan, our clinic at 123 Pet Care Lane offers a warm and welcoming environment for you and your pet. With convenient access and ample parking, we’ve designed our space to be as comfortable and stress-free as possible. Drop by and let our dedicated team provide your furry friend with top-notch care right in the heart of the community.',
    image: loc1,
  },
  {
    name: 'Barktown',
    desc: 'Find us at 456 Furry Friend Road in vibrant Wroclaw town, where our clinic stands ready to deliver outstanding veterinary services. Our prime location is easily accessible with plenty of parking, making your visit smooth and hassle-free. Experience compassionate care and expert treatment in a facility designed with your pet’s well-being in mind.',
    image: loc2,
  },
  {
    name: 'Meow City',
    desc: 'Situated at 789 Whisker Way, our clinic in Gdansk City is the perfect spot for your pet’s health needs. Our central location ensures easy access and a friendly atmosphere, with ample parking to make your visit convenient. Come see us and discover how our dedicated team can make a difference in your pet’s life with exceptional care and personalized service.',
    image: loc3,
  },
];

const faqs = [
  {
    question: 'What is VetClinic Poznan?',
    answer: 'VetClinic Poznań is a modern veterinary clinic based in Poznań, Poland. We provide expert care for pets, including medical consultations, diagnostics, surgeries, vaccinations, and emergency support. Our team of experienced veterinarians is committed to compassionate and professional pet healthcare.',
  },
  {
    question: 'What is Pawcare?',
    answer: 'Pawcare is an online platform that helps pet owners easily book appointments with trusted veterinary clinics. It allows you to compare services, check availability, and manage your pet’s care—all in one place. Pawcare partners with clinics like VetClinic Poznań to simplify access to quality veterinary care.',
  },
  {
    question: 'How can I book consultation?',
    answer: 'You can book a consultation by clicking the "Book Now" button next to any clinic or by visiting the Consultation section. Select your preferred clinic, date, and time — and confirm your appointment in just a few clicks.',
  },
];

export default function App() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section - Fullscreen */}
      <section className="relative h-screen w-full bg-cover bg-center" style={{ backgroundImage: `url(${heroImg})` }}>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30 z-0" />

        {/* Floating Header */}
        <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-[90%] max-w-5xl bg-white rounded-full shadow-lg flex items-center justify-between px-6 py-3 z-20">
          <div className="flex items-center gap-2">
            <img src={logo} alt="logo" className="w-8 h-8 rounded-full" />
          </div>
          <nav className="hidden md:flex gap-6 text-sm">
            <a className="text-gray-700 hover:text-blue-600 font-medium">Home</a>
            <a className="text-gray-700 hover:text-blue-600 font-medium">Consultation</a>
            <a className="text-blue-600 font-medium">Blog</a>
            <a className="text-gray-700 hover:text-blue-600 font-medium">Contact</a>
          </nav>
          <div className="bg-blue-600 text-white w-8 h-8 flex items-center justify-center rounded-full text-sm font-bold">MA</div>
        </div>

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-24 z-10 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 max-w-xl">Visit us for expert pet care</h1>
          <p className="text-lg mb-6 max-w-md">Where compassion meets excellence!</p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full text-sm font-medium shadow-lg w-fit">
            Visit Blog →
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 px-4 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <img
            src={servicesImg}
            alt="services"
            className="rounded-xl shadow-md w-full md:w-1/2"
          />
          <div>
            <h2 className="text-3xl font-semibold mb-4">Providing best services for your pets</h2>
            <p className="text-gray-700 text-lg">
              At VetClinic Poznan, our in-clinic consultations offer comprehensive care to ensure your pet's health and well-being. Our experienced veterinarians conduct thorough physical examinations, use advanced diagnostic tools, and create personalized treatment plans tailored to your pet’s unique needs.
            </p>
          </div>
        </div>
      </section>

      {/* Clinic Locations */}
      <section id="locations" className="py-12 bg-gray-50 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6 text-center">Clinic Locations</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {clinics.map((clinic, idx) => (
              <div key={idx} className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition">
                <img src={clinic.image} alt={clinic.name} className="h-40 w-full object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">{clinic.name}</h3>
                  <p className="text-gray-600 mb-4">{clinic.desc}</p>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Book Now</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-12 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
  <div key={idx} className="border rounded-lg p-4 flex items-start justify-between">
    <div className="w-full">
      <button
        onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
        className="w-full text-left font-medium text-lg"
      >
        {faq.question}
      </button>
      {openIndex === idx && (
        <p className="mt-2 text-gray-600">{faq.answer}</p>
      )}
    </div>
    <div
      className="ml-4 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-xl font-bold text-black cursor-pointer"
      onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
    >
      {openIndex === idx ? '−' : '+'}
    </div>
  </div>
))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 text-gray-900 pt-12 pb-6 px-6 md:px-24">
  <div className="grid md:grid-cols-3 gap-10 mb-10">
    {/* Left block */}
    <div>
      <h3 className="font-semibold text-lg mb-3">VetClinic Poznan</h3>
      <ul className="space-y-2 text-sm">
        <li><a className="hover:underline">Consultation</a></li>
        <li><a className="hover:underline">About Us</a></li>
        <li><a className="hover:underline">Contact</a></li>
      </ul>
    </div>

    {/* Center block */}
    <div>
      <h3 className="font-semibold text-lg mb-3">Stay Connected</h3>
      <p className="text-sm mb-2">Contact:<br/>hi.vetclinic@vetclinicpoznan.com</p>
      <div className="flex gap-4 mt-2 text-xl">
        <a href="#"><i className="fab fa-facebook"></i></a>
        <a href="#"><i className="fab fa-instagram"></i></a>
      </div>
    </div>

    {/* Right block */}
    <div>
      <h3 className="font-semibold text-lg mb-3">Join as patient of our Clinic!</h3>
      <p className="text-sm mb-4">Our services are wide open for you</p>
      <button className="border border-gray-600 rounded-xl px-6 py-2 text-black hover:bg-gray-100 transition">Booking</button>
    </div>
  </div>

  {/* Bottom row */}
  <div className="border-t pt-4 text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center gap-2">
    <span>© VetClinicPoznan.co</span>
    <span className="hidden md:inline">•</span>
    <a href="#" className="hover:underline">Terms and Privacy Policy</a>
  </div>
</footer>
    </div>
  );
}
