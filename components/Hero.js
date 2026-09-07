import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="bg-gradient-to-br from-green-500/10 via-gray-900 to-gray-800 rounded-lg p-8 mb-12 border border-green-500/20">
      <div className="max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Tervetuloa OpistoHelpiin!
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Tarjoa pieniä tehtäviä, ansaitse rahaa ja tutustu opistoyhteisöön. 💚
        </p>
        <div className="flex flex-wrap gap-4">
          <Link href="/tasks" className="btn-primary flex items-center gap-2">
            Selaa tehtäviä <ArrowRight size={20} />
          </Link>
          <Link href="/apartments" className="btn-secondary">
            Katso asuntolat
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;