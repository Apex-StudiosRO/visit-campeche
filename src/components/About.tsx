import React from "react";
import { Building2, Award, Waves } from "lucide-react";

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center mb-16">
          <span className="inline-block mb-4 rounded-sm bg-primary/20 px-4 py-1.5 text-sm font-medium text-primary">
            Welcome to Paradise
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-foreground mb-6">
            About <span className="text-primary">Campeche</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            A UNESCO World Heritage city where centuries of history meet 
            the tranquil waters of the Gulf of Mexico.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="overflow-hidden rounded-none h-48 bg-muted">
                  <img
                    src="https://images.unsplash.com/photo-1518638150340-f706e86654de?w=600"
                    alt="Colorful colonial street in Campeche"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="overflow-hidden rounded-2xl h-64 bg-muted">
                  <img
                    src="https://images.unsplash.com/photo-1547995886-6dc09384c6e6?w=600"
                    alt="Ancient Mayan pyramid"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="overflow-hidden rounded-2xl h-64 bg-muted">
                  <img
                    src="https://images.unsplash.com/photo-1552074284-5e88ef1aef18?w=600"
                    alt="Colonial architecture with arches"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="overflow-hidden rounded-none h-48 bg-muted">
                  <img
                    src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600"
                    alt="Beautiful beach sunset"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-secondary text-secondary-foreground px-6 py-4 rounded-lg shadow-xl">
              <div className="flex items-center gap-3">
                <Award className="w-8 h-8" />
                <div>
                  <p className="font-heading text-2xl font-bold">1999</p>
                  <p className="text-sm opacity-90">UNESCO Heritage</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:pl-8">
            <h3 className="font-heading text-3xl text-foreground mb-6">
              Where History Comes Alive in Every Colorful Corner
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Nestled along the shimmering Gulf of Mexico, Campeche is a treasure 
                trove of colonial splendor and ancient Mayan heritage. This enchanting 
                city, with its pastel-colored buildings and fortified walls, tells the 
                story of a resilient community that has preserved its identity through 
                centuries of transformation.
              </p>
              <p>
                The historic center, recognized by UNESCO in 1999, is one of the best-preserved 
                colonial cities in the Americas. Walk through streets painted in vibrant 
                yellows, pinks, and blues, where every façade hides stories of Spanish 
                conquistadors, Caribbean pirates, and Mayan ancestors.
              </p>
              <p>
                Beyond the walls, the state of Campeche offers pristine beaches with 
                calm, warm waters, dense jungles hiding magnificent archaeological sites, 
                and a culinary tradition that blends indigenous flavors with coastal bounty.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-border">
              <div className="text-center">
                <p className="font-heading text-3xl text-primary font-bold">1540</p>
                <p className="text-sm text-muted-foreground">Founded</p>
              </div>
              <div className="text-center">
                <p className="font-heading text-3xl text-secondary font-bold">8</p>
                <p className="text-sm text-muted-foreground">Baluartes</p>
              </div>
              <div className="text-center">
                <p className="font-heading text-3xl text-accent font-bold">2.5km</p>
                <p className="text-sm text-muted-foreground">City Walls</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="group bg-surface rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-border/50 hover:border-primary/30">
            <div className="w-14 h-14 bg-primary/10 rounded-sm flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
              <Building2 className="w-7 h-7 text-primary" />
            </div>
            <h4 className="font-heading text-xl text-foreground mb-3">
              Colonial Architecture
            </h4>
            <p className="text-muted-foreground">
              Wander through perfectly preserved 16th-century streets, where Spanish 
              colonial architecture blends with tropical charm. Each building tells a 
              story of the city's vibrant past.
            </p>
          </div>

          <div className="group bg-surface rounded-none p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-border/50 hover:border-secondary/30">
            <div className="w-14 h-14 bg-secondary/10 rounded-sm flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors">
              <Award className="w-7 h-7 text-secondary" />
            </div>
            <h4 className="font-heading text-xl text-foreground mb-3">
              UNESCO World Heritage
            </h4>
            <p className="text-muted-foreground">
              Recognized for its exceptional military architecture and urban design, 
              Campeche's fortified town is a testament to how colonial cities were 
              designed and defended in the New World.
            </p>
          </div>

          <div className="group bg-surface rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-border/50 hover:border-accent/30">
            <div className="w-14 h-14 bg-accent/10 rounded-sm flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
              <Waves className="w-7 h-7 text-accent" />
            </div>
            <h4 className="font-heading text-xl text-foreground mb-3">
              Coastal Atmosphere
            </h4>
            <p className="text-muted-foreground">
              Feel the gentle Gulf breeze as you stroll along the Malecón at sunset. 
              The peaceful coastal atmosphere offers a refreshing contrast to the 
              busier tourist destinations nearby.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
