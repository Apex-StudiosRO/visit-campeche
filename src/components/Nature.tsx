import React from "react";
import DomeGallery from "./DomeGallery";
import { Sun, Fish, TreePine, Bird, Waves, Compass } from "lucide-react";
import campeche1 from "../assets/campeche1.webp";
import campeche2 from "../assets/campeche2.webp";
import campeche3 from "../assets/campeche3.jpg";
import campeche4 from "../assets/campeche4.jpg";
import campeche5 from "../assets/campeche5.jpg";
import campeche6 from "../assets/campeche6.jpg";
import campeche7 from "../assets/campeche7.jpg";
import campeche8 from "../assets/campeche8.jpg";



const natureImages = [
  {
    src: campeche1,
    alt: "Pristine Caribbean beach"
  },
  {
    src: campeche2,
    alt: "Tropical sunset"
  },
  {
    src: campeche3,
    alt: "Crystal clear waters"
  },
  {
    src: campeche4,
    alt: "Mangrove forest"
  },
  {
    src: campeche5,
    alt: "Sea turtle"
  },
  {
    src: campeche6,
    alt: "Flamingos in the wild"
  },
  {
    src: campeche7,
    alt: "Beach sunset paradise"
  },
  {
    src: campeche8,
    alt: "Tropical lagoon"
  }
];

const Nature: React.FC = () => {
  return (
    <section id="nature" className="py-24 bg-accent/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center mb-12">
          <span className="inline-block mb-4 rounded-sm bg-accent/20 px-4 py-1.5 text-sm font-medium text-accent-foreground">
            Natural Paradise
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-foreground mb-6">
            Nature & <span className="text-accent">Beaches</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Discover pristine beaches, stunning sunsets over the Gulf of Mexico, 
            and protected biosphere reserves home to incredible wildlife.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-surface rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border border-border/30">
            <div className="w-12 h-12 bg-accent/20 rounded-sm flex items-center justify-center mb-4">
              <Sun className="w-6 h-6 text-accent" />
            </div>
            <h3 className="font-heading text-xl text-foreground mb-2">Golden Sunsets</h3>
            <p className="text-muted-foreground text-sm">
              Watch the sun paint the sky in brilliant oranges and pinks as it 
              dips below the Gulf of Mexico's horizon from the Malecón.
            </p>
          </div>

          <div className="bg-surface rounded-none p-6 shadow-md hover:shadow-lg transition-shadow border border-border/30">
            <div className="w-12 h-12 bg-accent/20 rounded-sm flex items-center justify-center mb-4">
              <Fish className="w-6 h-6 text-accent" />
            </div>
            <h3 className="font-heading text-xl text-foreground mb-2">Marine Life</h3>
            <p className="text-muted-foreground text-sm">
              Snorkel or dive to discover vibrant coral reefs, tropical fish, 
              and sea turtles in the warm Caribbean waters.
            </p>
          </div>

          <div className="bg-surface rounded-none p-6 shadow-md hover:shadow-lg transition-shadow border border-border/30">
            <div className="w-12 h-12 bg-accent/20 rounded-sm flex items-center justify-center mb-4">
              <TreePine className="w-6 h-6 text-accent" />
            </div>
            <h3 className="font-heading text-xl text-foreground mb-2">Biosphere Reserves</h3>
            <p className="text-muted-foreground text-sm">
              Explore the Calakmul Biosphere Reserve, one of Mexico's largest 
              protected areas with dense jungle and ancient ruins.
            </p>
          </div>

          <div className="bg-surface rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border border-border/30">
            <div className="w-12 h-12 bg-accent/20 rounded-sm flex items-center justify-center mb-4">
              <Bird className="w-6 h-6 text-accent" />
            </div>
            <h3 className="font-heading text-xl text-foreground mb-2">Flamingo Sanctuaries</h3>
            <p className="text-muted-foreground text-sm">
              Visit Celestún and Ría Lagartos to witness thousands of pink 
              flamingos in their natural mangrove habitats.
            </p>
          </div>
        </div>

        <div className="relative rounded-lg overflow-hidden bg-muted/30 border border-border/30">
          <div className="absolute top-6 left-6 z-10">
            <span className="bg-surface/90 backdrop-blur-sm px-4 py-2 rounded-sm text-sm font-medium text-foreground shadow-lg flex items-center gap-2">
              <Compass className="w-4 h-4" /> Drag to explore our gallery
            </span>
          </div>
          <div className="h-[600px] md:h-[700px]">
            <DomeGallery
              images={natureImages}
              fit={0.7}
              minRadius={500}
              maxVerticalRotationDeg={8}
              segments={30}
              dragDampening={1.5}
              grayscale={false}
              overlayBlurColor="rgba(0, 0, 0, 0)"
              imageBorderRadius="16px"
              openedImageBorderRadius="20px"
              openedImageWidth="500px"
              openedImageHeight="400px"
            />
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="bg-primary/5 rounded-3xl p-8 border border-primary/10">
            <div className="flex items-center gap-3 mb-4">
              <Waves className="w-6 h-6 text-primary" />
              <h3 className="font-heading text-2xl text-foreground">Must-Visit Beaches</h3>
            </div>
            <ul className="space-y-3">
              {[
                "Playa Bonita - Perfect for families with calm, shallow waters",
                "Seybaplaya - A fishing village beach with authentic local vibes",
                "Champotón - Known for its beautiful estuary and fresh seafood",
                "Sabancuy - A hidden gem with pristine, uncrowded shores"
              ].map((beach, index) => (
                <li key={index} className="flex items-start gap-3 text-muted-foreground">
                  <span className="text-primary mt-1">•</span>
                  {beach}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-accent/5 rounded-3xl p-8 border border-accent/10">
            <div className="flex items-center gap-3 mb-4">
              <TreePine className="w-6 h-6 text-accent" />
              <h3 className="font-heading text-2xl text-foreground">Eco-Adventures</h3>
            </div>
            <ul className="space-y-3">
              {[
                "Kayak through mangrove channels at Los Petenes",
                "Spot jaguars and howler monkeys at Calakmul",
                "Night tours to see bioluminescent plankton",
                "Bird watching with over 450 species to discover"
              ].map((adventure, index) => (
                <li key={index} className="flex items-start gap-3 text-muted-foreground">
                  <span className="text-accent mt-1">•</span>
                  {adventure}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nature;
