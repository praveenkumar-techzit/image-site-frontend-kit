import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Menu from '@/components/Menu';
import Story from '@/components/Story';
import Reservation from '@/components/Reservation';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Menu />
      <Story />
      <Reservation />
      <Footer />
    </div>
  );
};

export default Index;
