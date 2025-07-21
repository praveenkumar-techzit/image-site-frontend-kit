import { Button } from '@/components/ui/button';
import heroBurger from '@/assets/hero-burger.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-burger-gold/20 via-background to-accent/10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-block bg-burger-red text-white px-4 py-2 rounded-full text-sm font-bold tracking-wide mb-6">
              🔥 LIMITED TIME OFFER
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-black text-burger-dark mb-6 leading-tight">
              IT'S A GOOD TIME FOR THE
              <span className="block text-transparent bg-gradient-to-r from-burger-red to-accent bg-clip-text">
                GREAT TASTE OF
              </span>
              <span className="block text-6xl lg:text-8xl">BURGERS</span>
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="order" size="lg" className="text-lg px-8 py-4 h-auto">
                ORDER NOW
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 h-auto">
                BOOK A TABLE
              </Button>
            </div>

            {/* Promotional Circle */}
            <div className="mt-12 lg:mt-16">
              <div className="inline-flex items-center justify-center w-32 h-32 bg-burger-red rounded-full text-white transform rotate-12 shadow-xl">
                <div className="text-center">
                  <div className="text-3xl font-black">$5</div>
                  <div className="text-xs font-bold tracking-wider">ONLY</div>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative">
              <img
                src={heroBurger}
                alt="Delicious Burger"
                className="w-full max-w-lg mx-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-burger-gold rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent rounded-full opacity-15 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 text-6xl animate-bounce delay-500">🍟</div>
      <div className="absolute bottom-20 right-10 text-4xl animate-bounce delay-1000">🥤</div>
    </section>
  );
};

export default Hero;