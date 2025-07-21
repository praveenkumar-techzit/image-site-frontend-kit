import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import burger1 from '@/assets/burger1.jpg';
import burger2 from '@/assets/burger2.jpg';
import burger3 from '@/assets/burger3.jpg';

const Menu = () => {
  const menuItems = [
    {
      id: 1,
      name: "Classic Beef Burger",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
      price: "$8.50",
      image: burger1,
    },
    {
      id: 2,
      name: "Chicken Deluxe",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
      price: "$9.25",
      image: burger2,
    },
    {
      id: 3,
      name: "Double Cheese Burger",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
      price: "$11.75",
      image: burger3,
    },
  ];

  return (
    <section id="menu" className="py-20 bg-burger-cream/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-burger-gold text-burger-dark px-4 py-2 rounded-full text-sm font-bold tracking-wide mb-4">
            🍔 ALWAYS TASTY BURGER
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-burger-dark mb-6">
            CHOOSE & ENJOY
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
          </p>
        </div>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {menuItems.map((item) => (
            <Card 
              key={item.id} 
              className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-background overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-burger-red text-white px-3 py-1 rounded-full text-sm font-bold">
                  {item.price}
                </div>
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-burger-dark mb-3">
                  {item.name}
                </h3>
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                  {item.description}
                </p>
                <Button variant="burger" className="w-full">
                  ORDER NOW
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Section */}
        <div className="bg-gradient-to-r from-burger-dark to-burger-brown rounded-2xl p-8 lg:p-12 text-center text-white">
          <h3 className="text-3xl lg:text-4xl font-black mb-4">
            DISCOVER
          </h3>
          <h2 className="text-4xl lg:text-6xl font-black text-burger-gold mb-6">
            UPCOMING EVENTS
          </h2>
          <p className="text-lg opacity-90 max-w-3xl mx-auto mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
          </p>
          <div className="flex justify-center">
            <Button variant="order" size="lg" className="px-8">
              LEARN MORE
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;