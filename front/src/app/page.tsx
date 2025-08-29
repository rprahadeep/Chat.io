import Navbar from '@/components/base/Navbar';
import HeroSection from '@/components/base/HeroSection';
import FeatureSection from '@/components/base/FeatureSection';
import Footer from '@/components/base/Footer';
import { getServerSession } from 'next-auth';
import { authOptions, CustomSession } from './api/auth/[...nextauth]/options';

export default async function Home() {
  const session: CustomSession | null = await getServerSession(authOptions);
  return (
    <div className="min-h-screen flex flex-col ">
      {/* Header */}
      <Navbar user={session?.user} />
      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <FeatureSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
