import { Card, CardContent } from '@/components/ui/card';
import { Clock, Users, Award, Heart } from 'lucide-react';

const Story = () => {
  const stats = [
    {
      icon: Clock,
      number: "25+",
      label: "Years of Experience",
      description: "Serving quality burgers since 1999"
    },
    {
      icon: Users,
      number: "1M+",
      label: "Happy Customers",
      description: "Satisfied customers worldwide"
    },
    {
      icon: Award,
      number: "50+",
      label: "Awards Won",
      description: "Recognition for excellence"
    },
    {
      icon: Heart,
      number: "100%",
      label: "Made with Love",
      description: "Every burger crafted with care"
    }
  ];

  return (
    <section id="story" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Story Content */}
          <div>
            <div className="inline-block bg-burger-gold text-burger-dark px-4 py-2 rounded-full text-sm font-bold tracking-wide mb-4">
              🏆 OUR STORY
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-burger-dark mb-6">
              WE HAVE BEEN SERVING
              <span className="block text-burger-red">DELICIOUS BURGERS</span>
              SINCE 1999
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque 
                laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.
              </p>
            </div>
          </div>

          {/* Image/Visual Content */}
          <div className="relative">
            <div className="bg-gradient-to-br from-burger-gold/20 to-accent/20 rounded-2xl p-8 text-center">
              <div className="text-8xl mb-4">🍔</div>
              <h3 className="text-2xl font-bold text-burger-dark mb-2">Quality Ingredients</h3>
              <p className="text-muted-foreground">
                We use only the freshest, highest quality ingredients in every burger we make.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
              <CardContent className="p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-burger-gold to-accent rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-burger-dark" />
                </div>
                <div className="text-3xl font-black text-burger-dark mb-2">{stat.number}</div>
                <div className="font-bold text-burger-dark mb-1">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-burger-red to-accent rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-3xl lg:text-4xl font-black mb-4">
              TASTE THE DIFFERENCE
            </h3>
            <p className="text-lg opacity-90 max-w-2xl mx-auto mb-6">
              Experience the perfect blend of flavors that has made us a favorite for over two decades. 
              Come and discover why our burgers are simply irresistible.
            </p>
            <div className="text-6xl mb-4">🌟</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;