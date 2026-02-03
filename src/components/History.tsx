import React from "react";
import { Castle, Anchor, Compass, Landmark, Ship, Skull, Trophy } from "lucide-react";

const History: React.FC = () => {
  return (
    <section id="history" className="py-24 bg-surface">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center mb-16">
          <span className="inline-block mb-4 rounded-sm bg-secondary/20 px-4 py-1.5 text-sm font-medium text-secondary">
            A Journey Through Time
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-foreground mb-6">
            History & <span className="text-secondary">Heritage</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            From ancient Mayan civilizations to Spanish colonial fortifications, 
            Campeche's rich history is written in every stone of its magnificent walls.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="group relative bg-surface rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-border/50 hover:border-secondary/30">
            <div className="absolute -top-6 left-8">
              <div className="w-12 h-12 bg-secondary rounded-sm flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Compass className="w-6 h-6 text-secondary-foreground" />
              </div>
            </div>
            <div className="pt-8">
              <span className="text-sm font-semibold text-secondary">Pre-Hispanic Era</span>
              <h3 className="font-heading text-2xl text-foreground mt-2 mb-4">
                Ancient Mayan Roots
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Long before the Spanish arrived, the Maya people called this land "Ah-Kim-Pech," 
                meaning "Place of Snakes and Ticks." The region was home to thriving Mayan 
                city-states, with Edzná and Calakmul standing as magnificent testimonies to 
                their advanced civilization. These ancient cities featured towering pyramids, 
                intricate carvings, and sophisticated water management systems that still 
                amaze archaeologists today.
              </p>
            </div>
          </div>

          <div className="group relative bg-surface rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-border/50 hover:border-secondary/30">
            <div className="absolute -top-6 left-8">
              <div className="w-12 h-12 bg-secondary rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Anchor className="w-6 h-6 text-secondary-foreground" />
              </div>
            </div>
            <div className="pt-8">
              <span className="text-sm font-semibold text-secondary">Colonial Period</span>
              <h3 className="font-heading text-2xl text-foreground mt-2 mb-4">
                Pirates & Privateers
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                During the 16th and 17th centuries, Campeche became one of the most important 
                ports in the New World, attracting the attention of notorious pirates like 
                Francis Drake, John Hawkins, and the feared "Lorencillo." The city suffered 
                devastating raids, leading to the construction of its famous fortified walls. 
                Today, you can walk these historic battlements and imagine the lookouts 
                scanning the horizon for approaching pirate ships.
              </p>
            </div>
          </div>

          <div className="group relative bg-surface rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-border/50 hover:border-secondary/30">
            <div className="absolute -top-6 left-8">
              <div className="w-12 h-12 bg-secondary rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Castle className="w-6 h-6 text-secondary-foreground" />
              </div>
            </div>
            <div className="pt-8">
              <span className="text-sm font-semibold text-secondary">UNESCO Heritage</span>
              <h3 className="font-heading text-2xl text-foreground mt-2 mb-4">
                The Walled City
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                The hexagonal fortification system, completed in 1704, made Campeche one of 
                the best-defended cities in the Americas. Eight baluartes (bulwarks) 
                connected by thick walls protected the city from sea attacks. In 1999, UNESCO 
                declared the Historic Fortified Town of Campeche a World Heritage Site, 
                recognizing its exceptional example of Spanish military architecture in the 
                Caribbean. The colorful colonial buildings within the walls create a 
                picturesque backdrop for exploration.
              </p>
            </div>
          </div>
        </div>
        <div className="relative bg-secondary/10 rounded-lg p-10 md:p-14">
          <div className="absolute top-6 left-8 text-secondary/20 text-8xl font-serif">"</div>
          <blockquote className="relative z-10 text-center">
            <p className="font-heading text-2xl md:text-3xl text-foreground italic leading-relaxed max-w-4xl mx-auto">
              Walking through Campeche's streets is like stepping into a living museum, 
              where every colorful façade tells a story of resilience, culture, and the 
              unbreakable spirit of its people.
            </p>
            <footer className="mt-6 text-muted-foreground">
              — A sentiment shared by visitors for centuries
            </footer>
          </blockquote>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { year: "300 BC", event: "Mayan settlements established", Icon: Landmark },
            { year: "1540", event: "Spanish city founded", Icon: Ship },
            { year: "1685", event: "Great pirate attack by Lorencillo", Icon: Skull },
            { year: "1999", event: "UNESCO World Heritage designation", Icon: Trophy },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-surface/50 backdrop-blur-sm rounded-sm p-6 text-center border border-border/30 hover:border-secondary/30 transition-colors"
            >
              <div className="w-12 h-12 bg-secondary/10 rounded-sm flex items-center justify-center mx-auto mb-4">
                <item.Icon className="w-6 h-6 text-secondary" />
              </div>
              <span className="block text-secondary font-bold text-xl mb-2">{item.year}</span>
              <span className="text-muted-foreground text-sm">{item.event}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default History;
