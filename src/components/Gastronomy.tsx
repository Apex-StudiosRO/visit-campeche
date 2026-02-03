import React from "react";
import { Utensils, Flame, Leaf, Star, Fish, Drumstick, Shell, Soup, Egg, Cookie, UtensilsCrossed } from "lucide-react";

interface DishCardProps {
  name: string;
  description: string;
  Icon: React.ComponentType<{ className?: string }>;
  tags: string[];
  featured?: boolean;
}

const DishCard: React.FC<DishCardProps> = ({ name, description, Icon, tags, featured }) => (
  <div
    className={`relative overflow-hidden rounded-lg p-6 md:p-8 transition-all duration-300 hover:scale-[1.02] ${
      featured
        ? "bg-secondary text-secondary-foreground col-span-1 md:col-span-2"
        : "bg-surface border border-border/50 hover:border-secondary/30 hover:shadow-lg"
    }`}
  >
    {featured && (
      <div className="absolute top-4 right-4 bg-white/20 rounded-sm p-2">
        <Star className="w-5 h-5" />
      </div>
    )}
    <div className="w-12 h-12 bg-white/10 rounded-sm flex items-center justify-center mb-4">
      <Icon className={`w-6 h-6 ${featured ? "" : "text-secondary"}`} />
    </div>
    <h3 className={`font-heading text-2xl mb-3 ${featured ? "" : "text-foreground"}`}>
      {name}
    </h3>
    <p className={`leading-relaxed mb-4 ${featured ? "text-secondary-foreground/90" : "text-muted-foreground"}`}>
      {description}
    </p>
    <div className="flex flex-wrap gap-2">
      {tags.map((tag, index) => (
        <span
          key={index}
          className={`px-3 py-1 rounded-sm text-xs font-medium ${
            featured ? "bg-white/20" : "bg-muted text-muted-foreground"
          }`}
        >
          {tag}
        </span>
      ))}
    </div>
  </div>
);

const Gastronomy: React.FC = () => {
  const dishes: DishCardProps[] = [
    {
      name: "Pan de Cazón",
      description:
        "Campeche's signature dish! Layers of crispy tortillas, shredded dogfish shark, black beans, and a rich tomato-habanero sauce. This iconic dish represents the perfect fusion of Mayan and Spanish culinary traditions, showcasing the region's abundant seafood.",
      Icon: Fish,
      tags: ["Signature Dish", "Seafood", "Traditional"],
      featured: true,
    },
    {
      name: "Cochinita Pibil",
      description:
        "Slow-roasted pork marinated in achiote and sour orange, traditionally cooked underground in banana leaves. The meat becomes incredibly tender and flavorful.",
      Icon: Drumstick,
      tags: ["Pork", "Slow-cooked", "Mayan"],
    },
    {
      name: "Camarones al Coco",
      description:
        "Succulent Gulf shrimp coated in coconut, served with a tropical fruit salsa. A perfect blend of coastal flavors and Caribbean influence.",
      Icon: Shell,
      tags: ["Seafood", "Tropical", "Sweet"],
    },
    {
      name: "Mucbipollo",
      description:
        "A giant tamale prepared for Day of the Dead, filled with chicken or pork and wrapped in banana leaves. Cooked underground for authentic smoky flavor.",
      Icon: UtensilsCrossed,
      tags: ["Seasonal", "Traditional", "Festive"],
    },
    {
      name: "Papadzules",
      description:
        "Tortillas dipped in pumpkin seed sauce, filled with hard-boiled eggs, and topped with tomato sauce. An ancient Mayan recipe still beloved today.",
      Icon: Egg,
      tags: ["Vegetarian", "Mayan", "Ancient"],
    },
    {
      name: "Chocolomo",
      description:
        "A hearty beef soup with organ meats, flavored with epazote and served with radishes, cilantro, and fresh tortillas. Perfect comfort food.",
      Icon: Soup,
      tags: ["Soup", "Beef", "Hearty"],
    },
    {
      name: "Ceviche Campechano",
      description:
        "Fresh seafood cured in lime juice with octopus, shrimp, and fish. Mixed with tomato, onion, cilantro, and a kick of habanero.",
      Icon: Fish,
      tags: ["Seafood", "Fresh", "Citrus"],
    },
  ];

  return (
    <section id="gastronomy" className="py-24 bg-surface">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center mb-16">
          <span className="inline-block mb-4 rounded-sm bg-secondary/20 px-4 py-1.5 text-sm font-medium text-secondary">
            Flavors of the Gulf
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-foreground mb-6">
            Local <span className="text-secondary">Gastronomy</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Savor the unique flavors where Mayan traditions meet Spanish colonial 
            influence, with fresh seafood from the Gulf of Mexico taking center stage.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 mb-16">
          <div className="bg-primary/10 rounded-lg p-6 text-center border border-primary/20">
            <Utensils className="w-10 h-10 text-primary mx-auto mb-4" />
            <h3 className="font-heading text-lg text-foreground mb-2">Fresh Seafood</h3>
            <p className="text-muted-foreground text-sm">
              Daily catches from the Gulf include shrimp, octopus, grouper, and the famous dogfish shark
            </p>
          </div>

          <div className="bg-secondary/10 rounded-none p-6 text-center border border-secondary/20">
            <Flame className="w-10 h-10 text-secondary mx-auto mb-4" />
            <h3 className="font-heading text-lg text-foreground mb-2">Mayan Techniques</h3>
            <p className="text-muted-foreground text-sm">
              Ancient cooking methods like pib (underground oven) create unforgettable flavors
            </p>
          </div>

          <div className="bg-accent/10 rounded-lg p-6 text-center border border-accent/20">
            <Leaf className="w-10 h-10 text-accent mx-auto mb-4" />
            <h3 className="font-heading text-lg text-foreground mb-2">Local Ingredients</h3>
            <p className="text-muted-foreground text-sm">
              Achiote, habanero, sour orange, and pumpkin seeds are staples of Campechano cuisine
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {dishes.map((dish, index) => (
            <DishCard key={index} {...dish} />
          ))}
        </div>

        <div className="bg-muted/30 rounded-lg p-8 md:p-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <UtensilsCrossed className="w-6 h-6 text-secondary" />
            <h3 className="font-heading text-2xl text-foreground">Where to Eat Like a Local</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-heading text-lg text-foreground mb-3">Morning</h4>
              <p className="text-muted-foreground">
                Start your day at the local market with <strong>tamales colados</strong> 
                (strained tamales) and a cup of hot chocolate. The Mercado Principal 
                opens early and offers the most authentic breakfast experience.
              </p>
            </div>
            <div>
              <h4 className="font-heading text-lg text-foreground mb-3">Lunch</h4>
              <p className="text-muted-foreground">
                Visit a traditional <strong>cocina económica</strong> for the daily 
                set menu. These family-run restaurants offer home-cooked meals at 
                incredible prices, often including soup, main course, and agua fresca.
              </p>
            </div>
            <div>
              <h4 className="font-heading text-lg text-foreground mb-3">Afternoon</h4>
              <p className="text-muted-foreground">
                Cool off with a <strong>marquesita</strong> – a crispy rolled wafer 
                filled with Edam cheese and your choice of cajeta, Nutella, or jam. 
                Find vendors along the Malecón and in the main plaza.
              </p>
            </div>
            <div>
              <h4 className="font-heading text-lg text-foreground mb-3">Evening</h4>
              <p className="text-muted-foreground">
                Enjoy fresh <strong>ceviche</strong> at a waterfront restaurant while 
                watching the sunset. Don't miss trying <strong>cocktél de camarón</strong> 
                (shrimp cocktail) with extra habanero!
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h4 className="font-heading text-xl text-foreground mb-6">Don't Miss These Drinks</h4>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: "Horchata" },
              { name: "Jamaica" },
              { name: "Xtabentún" },
              { name: "Agua de Chaya" },
              { name: "Pozol" },
            ].map((drink, index) => (
              <div
                key={index}
                className="bg-surface rounded-sm px-6 py-4 shadow-md border border-border/30 hover:border-secondary/30 transition-colors flex items-center gap-2"
              >
                <Cookie className="w-5 h-5 text-secondary" />
                <span className="font-medium text-foreground">{drink.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gastronomy;
