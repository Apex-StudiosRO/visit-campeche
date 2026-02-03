import React from "react";

const Hero: React.FC = () => {
    return (
        <section className="relative min-h-screen flex items-center w-screen">
            {/* <div className="absolute inset-0 -z-10 bg-cover bg-center">
                <LightRays
                    raysOrigin="top-center"
                    raysColor="#00ffdd"
                    raysSpeed={1}
                    lightSpread={0.5}
                    rayLength={3}
                    followMouse={true}
                    mouseInfluence={0.1}
                    noiseAmount={0}
                    distortion={0}
                    className="custom-rays"
                    pulsating={false}
                    fadeDistance={1}
                    saturation={1}
                />
            </div> */}

            <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
                <div className="max-w-2xl">
                    <span className="inline-block mb-4 rounded-sm bg-highlight/20 px-4 py-1 text-sm font-medium text-highlight-foreground">
                        Mexico’s hidden coastal treasure
                    </span>

                    <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-background-foreground leading-tight">
                        Discover <span className="text-primary">Campeche</span>
                    </h1>

                    <p className="mt-6 text-lg text-muted-foreground font-body">
                        Walk through colorful colonial streets, explore ancient
                        Mayan history, and enjoy peaceful beaches along the Gulf
                        of Mexico.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4">
                        <button className="rounded-sm bg-primary px-6 py-3 text-primary-foreground font-medium hover:opacity-90 transition">
                            Plan your trip
                        </button>

                        <button className="rounded-sm border border-border bg-surface px-6 py-3 text-surface-foreground hover:bg-muted transition">
                            Explore experiences
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
