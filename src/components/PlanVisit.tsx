import React from "react";
import { Calendar, MapPin, Plane, Sun, CloudRain, Thermometer, Clock, CreditCard, Languages, Plug, Landmark, TreePine, Castle, Sunset, Sparkles } from "lucide-react";

const PlanVisit: React.FC = () => {
  return (
    <section id="plan" className="py-24 bg-primary/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center mb-16">
          <span className="inline-block mb-4 rounded-sm bg-primary/20 px-4 py-1.5 text-sm font-medium text-primary">
            Start Your Adventure
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-foreground mb-6">
            Plan Your <span className="text-primary">Visit</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Everything you need to know to make your trip to Campeche unforgettable. 
            From the best time to visit to essential travel tips.
          </p>
        </div>

        <div className="bg-surface rounded-lg p-8 md:p-10 shadow-lg border border-border/30 mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-primary/20 rounded-sm flex items-center justify-center">
              <Calendar className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-heading text-2xl text-foreground">Best Time to Visit</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-accent/5 rounded-lg p-6 border border-accent/10">
              <div className="flex items-center gap-2 mb-3">
                <Sun className="w-5 h-5 text-accent" />
                <span className="font-semibold text-foreground">Dry Season</span>
              </div>
              <p className="text-sm text-muted-foreground mb-2">November - April</p>
              <p className="text-muted-foreground">
                Perfect weather with minimal rain. Ideal for exploring the historic 
                center and beaches. Book ahead for Carnival (February).
              </p>
              <span className="inline-block mt-3 text-xs bg-accent/10 text-accent-foreground px-3 py-1 rounded-sm">
                Highly Recommended
              </span>
            </div>

            <div className="bg-highlight/5 rounded-none p-6 border border-highlight/10">
              <div className="flex items-center gap-2 mb-3">
                <Thermometer className="w-5 h-5 text-highlight-foreground" />
                <span className="font-semibold text-foreground">Hot Season</span>
              </div>
              <p className="text-sm text-muted-foreground mb-2">May - June</p>
              <p className="text-muted-foreground">
                Warm and humid but fewer tourists. Great deals on hotels. 
                Perfect for budget travelers who don't mind the heat.
              </p>
              <span className="inline-block mt-3 text-xs bg-highlight/20 text-highlight-foreground px-3 py-1 rounded-sm">
                Budget Friendly
              </span>
            </div>

            <div className="bg-primary/5 rounded-lg p-6 border border-primary/10">
              <div className="flex items-center gap-2 mb-3">
                <CloudRain className="w-5 h-5 text-primary" />
                <span className="font-semibold text-foreground">Rainy Season</span>
              </div>
              <p className="text-sm text-muted-foreground mb-2">July - October</p>
              <p className="text-muted-foreground">
                Afternoon showers are common but mornings are usually clear. 
                Lush green landscapes and the famous Hanal Pixán festival.
              </p>
              <span className="inline-block mt-3 text-xs bg-primary/10 text-primary px-3 py-1 rounded-sm">
                Cultural Events
              </span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-surface rounded-lg p-8 shadow-lg border border-border/30">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-secondary/20 rounded-sm flex items-center justify-center">
                <Plane className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-heading text-2xl text-foreground">Getting There</h3>
            </div>
            <div className="space-y-4">
              <div className="border-l-4 border-secondary pl-4">
                <h4 className="font-semibold text-foreground">By Air</h4>
                <p className="text-muted-foreground text-sm">
                  Fly into Campeche International Airport (CPE) with connections from 
                  Mexico City. Alternatively, fly to Mérida and drive 2.5 hours south.
                </p>
              </div>
              <div className="border-l-4 border-secondary/60 pl-4">
                <h4 className="font-semibold text-foreground">By Bus</h4>
                <p className="text-muted-foreground text-sm">
                  ADO buses connect Campeche to major cities. The ADO GL service 
                  offers comfort seats for longer journeys from Cancún or Mexico City.
                </p>
              </div>
              <div className="border-l-4 border-secondary/40 pl-4">
                <h4 className="font-semibold text-foreground">By Car</h4>
                <p className="text-muted-foreground text-sm">
                  Well-maintained highways connect Campeche to Mérida (Highway 180) 
                  and Villahermosa (Highway 186). Car rental recommended for exploring.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-surface rounded-none p-8 shadow-lg border border-border/30">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-accent/20 rounded-sm flex items-center justify-center">
                <MapPin className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-heading text-2xl text-foreground">Must-See Attractions</h3>
            </div>
            <div className="space-y-3">
              {[
                { name: "Historic Walled City", time: "Half day", Icon: Landmark },
                { name: "Edzná Archaeological Site", time: "Half day", Icon: Landmark },
                { name: "Calakmul Biosphere Reserve", time: "Full day", Icon: TreePine },
                { name: "Fort San Miguel & Museum", time: "2-3 hours", Icon: Castle },
                { name: "Malecón at Sunset", time: "1-2 hours", Icon: Sunset },
                { name: "Puerta de Tierra Light Show", time: "1 hour", Icon: Sparkles },
              ].map((attraction, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between bg-muted/30 rounded-sm px-4 py-3"
                >
                  <div className="flex items-center gap-3">
                    <attraction.Icon className="w-5 h-5 text-accent" />
                    <span className="font-medium text-foreground">{attraction.name}</span>
                  </div>
                  <span className="text-xs text-muted-foreground bg-surface px-3 py-1 rounded-sm">
                    {attraction.time}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-primary/5 rounded-lg p-6 border border-primary/10">
            <Clock className="w-8 h-8 text-primary mb-4" />
            <h4 className="font-heading text-lg text-foreground mb-2">Time Zone</h4>
            <p className="text-muted-foreground text-sm">
              Central Time (CT). Same as Mexico City and Chicago.
            </p>
          </div>

          <div className="bg-secondary/5 rounded-none p-6 border border-secondary/10">
            <CreditCard className="w-8 h-8 text-secondary mb-4" />
            <h4 className="font-heading text-lg text-foreground mb-2">Currency</h4>
            <p className="text-muted-foreground text-sm">
              Mexican Peso (MXN). Cards accepted in most places, bring cash for markets.
            </p>
          </div>

          <div className="bg-accent/5 rounded-none p-6 border border-accent/10">
            <Languages className="w-8 h-8 text-accent mb-4" />
            <h4 className="font-heading text-lg text-foreground mb-2">Language</h4>
            <p className="text-muted-foreground text-sm">
              Spanish is primary. Some English in tourist areas. Mayan spoken in villages.
            </p>
          </div>

          <div className="bg-highlight/5 rounded-lg p-6 border border-highlight/10">
            <Plug className="w-8 h-8 text-highlight-foreground mb-4" />
            <h4 className="font-heading text-lg text-foreground mb-2">Power</h4>
            <p className="text-muted-foreground text-sm">
              Type A/B plugs (same as US/Canada). 127V. No adapter needed for US travelers.
            </p>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-lg bg-primary p-10 md:p-16 text-center">
          <div className="relative z-10">
            <h3 className="font-heading text-3xl md:text-4xl text-primary-foreground mb-4">
              Ready to Discover Campeche?
            </h3>
            <p className="text-primary-foreground/90 text-lg max-w-2xl mx-auto mb-8">
              Pack your bags and prepare for an unforgettable journey through history, 
              culture, and natural beauty. Campeche is waiting to share its secrets with you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-surface text-foreground px-8 py-4 rounded-sm font-semibold hover:bg-surface/90 transition-colors shadow-lg">
                Start Planning Now
              </button>
              <button className="bg-white/20 text-primary-foreground px-8 py-4 rounded-sm font-semibold hover:bg-white/30 transition-colors border border-white/30">
                Download Travel Guide
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="font-heading text-2xl text-foreground mb-6 text-center">
            Suggested Itineraries
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-surface rounded-lg p-6 shadow-md border border-border/30">
              <span className="inline-block bg-primary/20 text-primary px-3 py-1 rounded-sm text-sm font-medium mb-4">
                Weekend Escape
              </span>
              <h4 className="font-heading text-xl text-foreground mb-3">2-3 Days</h4>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>• Explore the historic walled city</li>
                <li>• Visit Fort San Miguel museum</li>
                <li>• Sunset at the Malecón</li>
                <li>• Day trip to Edzná ruins</li>
                <li>• Try local cuisine and markets</li>
              </ul>
            </div>

            <div className="bg-surface rounded-none p-6 shadow-md border border-border/30">
              <span className="inline-block bg-secondary/20 text-secondary px-3 py-1 rounded-sm text-sm font-medium mb-4">
                Cultural Deep Dive
              </span>
              <h4 className="font-heading text-xl text-foreground mb-3">5-7 Days</h4>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>• Complete walled city exploration</li>
                <li>• All 8 baluartes (bulwarks)</li>
                <li>• Edzná and Becal hat village</li>
                <li>• Cooking class with local chef</li>
                <li>• Nearby cenotes and beaches</li>
                <li>• Evening cultural shows</li>
              </ul>
            </div>

            <div className="bg-surface rounded-lg p-6 shadow-md border border-border/30">
              <span className="inline-block bg-accent/20 text-accent px-3 py-1 rounded-sm text-sm font-medium mb-4">
                Adventure Seeker
              </span>
              <h4 className="font-heading text-xl text-foreground mb-3">10+ Days</h4>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>• Full Campeche experience</li>
                <li>• 2-day Calakmul expedition</li>
                <li>• Kayaking in Los Petenes</li>
                <li>• Flamingo tour at Celestún</li>
                <li>• Beach hopping along the coast</li>
                <li>• Connect to Mérida or Palenque</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlanVisit;
