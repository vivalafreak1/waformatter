import ConverterForm from "../components/ConverterForm";
import IntroSection from "../components/IntroSection";

export default function HomePage() {
  return (
    <div className="max-w-screen-xl mx-auto px-6 py-12">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Column 1 */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
          <IntroSection />
        </div>

        {/* Column 2 */}
        <div className="flex-1 flex justify-center">
          <ConverterForm />
        </div>
      </div>
    </div>
  );
}
