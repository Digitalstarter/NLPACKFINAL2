import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Award, Users, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import facilityImage from "@assets/generated_images/Packaging_manufacturing_facility_0a44dbc3.png";
import warehouseImage from "@assets/generated_images/Industrial_warehouse_with_packaging_materials_f84777f2.png";

export default function OverOns() {
  const values = [
    {
      icon: Target,
      title: "Klantgericht",
      description: "Uw wensen en tevredenheid staan bij ons altijd centraal. Wij denken graag met u mee.",
    },
    {
      icon: Award,
      title: "Kwaliteit",
      description: "Hoogwaardige producten en betrouwbare service vormen de basis van ons bedrijf.",
    },
    {
      icon: Users,
      title: "Samenwerking",
      description: "Een langdurige partnerschap met onze klanten is waar wij naar streven.",
    },
    {
      icon: TrendingUp,
      title: "Innovatie",
      description: "Wij blijven ons ontwikkelen met de nieuwste technieken en oplossingen.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-card border-b">
        <div className="container mx-auto max-w-7xl px-4 py-8 md:py-16">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground mb-3 md:mb-4" data-testid="breadcrumb-over-ons">
              <Link href="/" className="hover:text-foreground transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-foreground">Over Ons</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 md:mb-4" data-testid="text-page-title">
              Over NL Pack
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
              Uw betrouwbare partner voor verpakkingsmaterialen
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-center mb-10 md:mb-16">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 md:mb-6" data-testid="text-intro-title">
                Specialist in Verpakkingsoplossingen
              </h2>
              <div className="space-y-3 md:space-y-4 text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                <p>
                  NL Pack is een toonaangevende leverancier van verpakkingsmaterialen in Nederland. 
                  Met jarenlange ervaring in de verpakkingsindustrie bieden wij een breed assortiment 
                  aan hoogwaardige producten en diensten.
                </p>
                <p>
                  Ons bedrijf onderscheidt zich door een combinatie van snelle levering, ruime voorraad 
                  en persoonlijke service. Of u nu op zoek bent naar standaard verzenddozen of 
                  gespecialiseerde maatwerk oplossingen, wij denken graag met u mee.
                </p>
                <p>
                  Met een moderne faciliteit en ervaren medewerkers zijn wij in staat om aan alle 
                  verpakkingsbehoeften te voldoen. Van kleine ondernemers tot grote industriële bedrijven, 
                  iedereen is bij ons aan het juiste adres.
                </p>
              </div>
            </div>
            <div>
              <img 
                src={facilityImage} 
                alt="NL Pack Faciliteit"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>

          <div className="mb-10 md:mb-16">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-3 md:mb-4" data-testid="text-values-title">
                Onze Kernwaarden
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                Deze principes sturen ons dagelijks handelen
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="border hover-elevate bg-gradient-to-br from-sky-50 to-blue-50 hover:from-blue-100 hover:to-cyan-100" data-testid={`card-value-${index}`}>
                    <CardContent className="p-4 md:p-6">
                      <div className="mb-3 md:mb-4 inline-flex p-2 md:p-3 rounded-lg bg-primary/10">
                        <value.icon className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                      </div>
                      <h3 className="text-lg md:text-xl font-semibold mb-2">{value.title}</h3>
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-center">
            <div className="lg:order-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 md:mb-6" data-testid="text-capabilities-title">
                Onze Mogelijkheden
              </h2>
              <div className="space-y-3 md:space-y-4 text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                <p>
                  Met een ruime voorraad en moderne productie faciliteiten kunnen wij snel schakelen 
                  en inspelen op uw behoeften. Onze opslagcapaciteit stelt ons in staat om altijd 
                  voldoende voorraad te hebben voor directe levering.
                </p>
                <p>
                  Daarnaast beschikken wij over geavanceerde drukapparatuur voor het bedrukken van 
                  verpakkingen in uw huisstijl. Van kleine oplages tot grote volumes, alles is mogelijk.
                </p>
                <p>
                  Ons ervaren team staat klaar om u te adviseren over de beste verpakkingsoplossing 
                  voor uw specifieke situatie. Samen maken wij het verschil.
                </p>
              </div>
            </div>
            <div className="lg:order-1">
              <img 
                src={warehouseImage} 
                alt="NL Pack Magazijn"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24 bg-card">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-3 md:mb-4" data-testid="text-cta-title">
              Wilt u Meer Weten?
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed mb-6 md:mb-8">
              Neem gerust contact met ons op. Wij vertellen u graag meer over onze producten, 
              diensten en hoe wij u kunnen helpen.
            </p>
            <Link href="/contact">
              <Button size="sm" sm:size-md md:size-lg variant="default" data-testid="button-cta-contact">
                Neem Contact Op
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
