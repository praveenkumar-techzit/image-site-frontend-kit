import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { MapPin, Phone } from 'lucide-react';
import friesImage from '@/assets/fries.jpg';
import drinkImage from '@/assets/drink.jpg';

const Reservation = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Reservation submitted:', formData);
    // Handle form submission here
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Reservation Form */}
          <div>
            <div className="mb-8">
              <div className="inline-block bg-burger-gold text-burger-dark px-4 py-2 rounded-full text-sm font-bold tracking-wide mb-4">
                📅 RESERVATION
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-burger-dark mb-6">
                BOOK YOUR TABLE
              </h2>
              <p className="text-lg text-muted-foreground">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            <Card className="shadow-xl border-0">
              <CardHeader>
                <CardTitle className="text-center text-burger-dark">Make a Reservation</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Your Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Enter your phone"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="date">Date</Label>
                      <Input
                        id="date"
                        name="date"
                        type="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="time">Time</Label>
                      <Input
                        id="time"
                        name="time"
                        type="time"
                        value={formData.time}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="guests">Guests</Label>
                      <select
                        id="guests"
                        name="guests"
                        value={formData.guests}
                        onChange={handleInputChange}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        required
                      >
                        <option value="">Select guests</option>
                        <option value="1">1 Guest</option>
                        <option value="2">2 Guests</option>
                        <option value="3">3 Guests</option>
                        <option value="4">4 Guests</option>
                        <option value="5">5+ Guests</option>
                      </select>
                    </div>
                  </div>

                  <Button type="submit" variant="burger" className="w-full" size="lg">
                    FIND A TABLE
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Images and Contact Info */}
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative group">
                <img
                  src={friesImage}
                  alt="Golden Fries"
                  className="w-full h-48 object-cover rounded-xl shadow-lg group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative group">
                <img
                  src={drinkImage}
                  alt="Refreshing Drink"
                  className="w-full h-48 object-cover rounded-xl shadow-lg group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            <Card className="bg-burger-dark text-white border-0">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-burger-gold">Contact Information</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-burger-gold" />
                    <span>123 Burger Street, Food City, FC 12345</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-burger-gold" />
                    <span>+1 (234) 567-890</span>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-burger-gold/20">
                  <h4 className="font-bold text-burger-gold mb-2">Opening Hours:</h4>
                  <div className="text-sm space-y-1">
                    <div className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span>11:00 AM - 10:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday - Sunday:</span>
                      <span>10:00 AM - 11:00 PM</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;