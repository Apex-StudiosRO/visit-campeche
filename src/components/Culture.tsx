import React from "react";
import Folder from "./Folder";
import { Music, Palette, Calendar, Heart, PartyPopper, Skull, Drama, Shirt, Fan, Brush, Languages } from "lucide-react";
import { GiDrum, GiSaxophone , GiGuitar, GiPaintBrush, GiSewingString } from "react-icons/gi";
import { BiMask } from "react-icons/bi";

const Culture: React.FC = () => {
  return (
    <section id="culture" className="py-24 bg-muted/20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center mb-16">
          <span className="inline-block mb-4 rounded-sm bg-highlight/30 px-4 py-1.5 text-sm font-medium text-highlight-foreground">
            Living Traditions
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-foreground mb-6">
            Culture & <span className="text-secondary">Traditions</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Experience the vibrant soul of Campeche through its colorful festivals, 
            traditional music, folk dances, and the warm hospitality of its people.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="flex flex-col items-center text-center">
            <div className="mb-6">
              <Folder
                color="#E85D04"
                size={2}
                items={[
                  <div key="1" className="p-2 text-xs text-center">
                    <BiMask className="w-6 h-6 mx-auto text-secondary" />
                    <p className="mt-1 font-medium">Carnival</p>
                  </div>,
                  <div key="2" className="p-2 text-xs text-center">
                    <Skull className="w-6 h-6 mx-auto text-secondary" />
                    <p className="mt-1 font-medium">Día de Muertos</p>
                  </div>,
                  <div key="3" className="p-2 text-xs text-center">
                    <PartyPopper className="w-6 h-6 mx-auto text-secondary" />
                    <p className="mt-1 font-medium">Feria</p>
                  </div>
                ]}
              />
            </div>
            <h3 className="font-heading text-xl text-foreground mb-2">Festivals</h3>
            <p className="text-muted-foreground text-sm">
              From the colorful Carnival to the mystical Day of the Dead celebrations
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="mb-6">
              <Folder
                color="#9D4EDD"
                size={2}
                items={[
                  <div key="1" className="p-2 text-xs text-center">
                    <GiSaxophone className="w-6 h-6 mx-auto text-primary" />
                    <p className="mt-1 font-medium">Jarana</p>
                  </div>,
                  <div key="2" className="p-2 text-xs text-center">
                    <GiDrum className="w-6 h-6 mx-auto text-primary" />
                    <p className="mt-1 font-medium">Tunkul</p>
                  </div>,
                  <div key="3" className="p-2 text-xs text-center">
                    <GiGuitar className="w-6 h-6 mx-auto text-primary" />
                    <p className="mt-1 font-medium">Trova</p>
                  </div>
                ]}
              />
            </div>
            <h3 className="font-heading text-xl text-foreground mb-2">Music</h3>
            <p className="text-muted-foreground text-sm">
              Traditional jarana rhythms and romantic trova serenades fill the plazas
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="mb-6">
              <Folder
                color="#06D6A0"
                size={2}
                items={[
                  <div key="1" className="p-2 text-xs text-center">
                    <Drama className="w-6 h-6 mx-auto text-accent" />
                    <p className="mt-1 font-medium">Jarabe</p>
                  </div>,
                  <div key="2" className="p-2 text-xs text-center">
                    <Shirt className="w-6 h-6 mx-auto text-accent" />
                    <p className="mt-1 font-medium">Mestiza</p>
                  </div>,
                  <div key="3" className="p-2 text-xs text-center">
                    <Fan className="w-6 h-6 mx-auto text-accent" />
                    <p className="mt-1 font-medium">Flamenco</p>
                  </div>
                ]}
              />
            </div>
            <h3 className="font-heading text-xl text-foreground mb-2">Dance</h3>
            <p className="text-muted-foreground text-sm">
              Witness the elegant mestiza dancers in their embroidered hipiles
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="mb-6">
              <Folder
                color="#118AB2"
                size={2}
                items={[
                  <div key="1" className="p-2 text-xs text-center">
                    <GiPaintBrush className="w-6 h-6 mx-auto text-primary" />
                    <p className="mt-1 font-medium">Pottery</p>
                  </div>,
                  <div key="2" className="p-2 text-xs text-center">
                    <GiSewingString className="w-6 h-6 mx-auto text-primary" />
                    <p className="mt-1 font-medium">Textiles</p>
                  </div>,
                  <div key="3" className="p-2 text-xs text-center">
                    <Brush className="w-6 h-6 mx-auto text-primary" />
                    <p className="mt-1 font-medium">Jipi Japa</p>
                  </div>
                ]}
              />
            </div>
            <h3 className="font-heading text-xl text-foreground mb-2">Artisanía</h3>
            <p className="text-muted-foreground text-sm">
              Handwoven Panama hats and intricate embroidery showcase local skill
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div className="relative overflow-hidden rounded-lg bg-secondary p-8 md:p-10 text-secondary-foreground">
            <div className="relative z-10">
              <Calendar className="w-12 h-12 mb-6 opacity-90" />
              <h3 className="font-heading text-3xl mb-4">Carnival of Campeche</h3>
              <p className="text-secondary-foreground/90 leading-relaxed mb-6">
                One of Mexico's oldest and most spectacular carnivals! Every February, 
                the streets come alive with elaborate floats, dazzling costumes, comparsas 
                (dance troupes), and the infectious rhythm of Caribbean music. The 
                celebration dates back to the 16th century, making it a tradition nearly 
                500 years old.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-white/20 px-3 py-1 rounded-sm text-sm">Comparsas</span>
                <span className="bg-white/20 px-3 py-1 rounded-sm text-sm">Floats</span>
                <span className="bg-white/20 px-3 py-1 rounded-sm text-sm">Dancing</span>
                <span className="bg-white/20 px-3 py-1 rounded-sm text-sm">Music</span>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-none bg-primary p-8 md:p-10 text-primary-foreground">
            <div className="relative z-10">
              <Heart className="w-12 h-12 mb-6 opacity-90" />
              <h3 className="font-heading text-3xl mb-4">Hanal Pixán</h3>
              <p className="text-primary-foreground/90 leading-relaxed mb-6">
                The Mayan version of Day of the Dead, "Hanal Pixán" means "Food of Souls." 
                Families create beautiful altars with marigolds, candles, and their ancestors' 
                favorite foods. The unique Mucbipollo (a large tamale cooked underground) 
                is prepared specially for this sacred occasion. It's a beautiful blend of 
                Mayan and Catholic traditions.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-white/20 px-3 py-1 rounded-sm text-sm">Altars</span>
                <span className="bg-white/20 px-3 py-1 rounded-sm text-sm">Candles</span>
                <span className="bg-white/20 px-3 py-1 rounded-sm text-sm">Mucbipollo</span>
                <span className="bg-white/20 px-3 py-1 rounded-sm text-sm">Family</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-surface rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow border border-border/30">
            <Music className="w-10 h-10 text-secondary mx-auto mb-4" />
            <h4 className="font-heading text-lg text-foreground mb-2">Plaza Serenades</h4>
            <p className="text-muted-foreground text-sm">
              Every evening, musicians gather in the main plaza to play romantic trova music
            </p>
          </div>

          <div className="bg-surface rounded-none p-6 text-center shadow-md hover:shadow-lg transition-shadow border border-border/30">
            <Palette className="w-10 h-10 text-secondary mx-auto mb-4" />
            <h4 className="font-heading text-lg text-foreground mb-2">Colorful Streets</h4>
            <p className="text-muted-foreground text-sm">
              The historic center's buildings are painted in vibrant yellows, blues, and pinks
            </p>
          </div>

          <div className="bg-surface rounded-none p-6 text-center shadow-md hover:shadow-lg transition-shadow border border-border/30">
            <Shirt className="w-10 h-10 text-secondary mx-auto mb-4" />
            <h4 className="font-heading text-lg text-foreground mb-2">Traditional Dress</h4>
            <p className="text-muted-foreground text-sm">
              The terno campechano features intricate floral embroidery on white fabric
            </p>
          </div>

          <div className="bg-surface rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow border border-border/30">
            <Languages className="w-10 h-10 text-secondary mx-auto mb-4" />
            <h4 className="font-heading text-lg text-foreground mb-2">Mayan Language</h4>
            <p className="text-muted-foreground text-sm">
              Over 80,000 people still speak Yucatec Maya as their first language
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Culture;
