import illustration from "../assets/illustration.png";

export default function IntroSection() {
  return (
    <div className="flex-1 text-center lg:text-left">
      <h1 className="text-3xl font-bold text-[#128C7E] mb-4">
        Convert Your WhatsApp Messages Easily
      </h1>
      <p className="text-gray-700 mb-6">
        Effortlessly create preformatted WhatsApp message links with ease for
        your company products. Just input your phone number and message, and
        you&apos;re ready to go!
      </p>
      <div className="flex items-center justify-center mt-12">
        <img
          src={illustration}
          alt="Illustration"
          className="w-full max-w-sm"
        />
      </div>
    </div>
  );
}
