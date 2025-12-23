import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-card border-b">
        <div className="container mx-auto max-w-7xl px-4 py-8 md:py-16">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground mb-3 md:mb-4" data-testid="breadcrumb-contact">
              <Link href="/" className="hover:text-foreground transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-foreground">Contact</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 md:mb-4" data-testid="text-page-title">
              Neem Contact Met Ons Op
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
              Vragen over onze producten of diensten? Neem gerust contact met ons op via email of telefoon.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10 md:mb-16">
              <motion.h2 
                className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-3 md:mb-4" 
                data-testid="text-contact-title"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Contactgegevens
              </motion.h2>
              <motion.p 
                className="text-sm sm:text-base md:text-lg text-muted-foreground"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Bereik ons via een van de onderstaande kanalen
              </motion.p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-10 md:mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="border hover-elevate h-full bg-gradient-to-br from-sky-50 to-blue-50 hover:from-blue-100 hover:to-cyan-100">
                  <CardContent className="p-4 md:p-8">
                    <div className="flex flex-col items-center text-center">
                      <div className="p-3 md:p-4 rounded-lg bg-primary/10 mb-3 md:mb-4">
                        <Mail className="h-6 w-6 md:h-8 md:w-8 text-primary" />
                      </div>
                      <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3" data-testid="text-email-title">Email</h3>
                      <a 
                        href="mailto:info@nlpack.nl" 
                        className="text-primary font-medium hover:underline transition-colors text-sm md:text-base"
                        data-testid="link-email"
                      >
                        info@nlpack.nl
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="border hover-elevate h-full bg-gradient-to-br from-sky-50 to-blue-50 hover:from-blue-100 hover:to-cyan-100">
                  <CardContent className="p-4 md:p-8">
                    <div className="flex flex-col items-center text-center">
                      <div className="p-3 md:p-4 rounded-lg bg-primary/10 mb-3 md:mb-4">
                        <Phone className="h-6 w-6 md:h-8 md:w-8 text-primary" />
                      </div>
                      <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3" data-testid="text-phone-title">Telefoon</h3>
                      <a 
                        href="tel:+31639190834" 
                        className="text-primary font-medium hover:underline transition-colors text-sm md:text-base"
                        data-testid="link-phone"
                      >
                        +31 6 39 19 08 34
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="border hover-elevate h-full bg-gradient-to-br from-sky-50 to-blue-50 hover:from-blue-100 hover:to-cyan-100">
                  <CardContent className="p-4 md:p-8">
                    <div className="flex flex-col items-center text-center">
                      <div className="p-3 md:p-4 rounded-lg bg-primary/10 mb-3 md:mb-4">
                        <MapPin className="h-6 w-6 md:h-8 md:w-8 text-primary" />
                      </div>
                      <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3" data-testid="text-location-title">Locatie</h3>
                      <p className="text-muted-foreground text-sm md:text-base" data-testid="text-address">
                        Rotterdam<br />
                        Nederland
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="border bg-gradient-to-r from-blue-50 to-cyan-50 p-4 md:p-12">
                <CardContent className="text-center">
                  <MessageCircle className="h-8 md:h-12 w-8 md:w-12 text-primary mx-auto mb-3 md:mb-4" />
                  <h3 className="text-lg md:text-2xl font-semibold mb-3 md:mb-4">Neem Contact Op Voor Maatwerk Verpakkingen</h3>
                  <p className="text-sm md:text-base lg:text-lg text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto">
                    Heeft u interesse in maatwerk verpakkingsoplossingen? Stuur ons een email met uw specifieke vereisten 
                    en wij nemen contact met u op om de mogelijkheden te bespreken.
                  </p>
                  <a href="mailto:info@nlpack.nl">
                    <Button size="sm" sm:size-md md:size-lg variant="default" className="text-sm md:text-base">
                      Stuur Email
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24 bg-card">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-3 md:mb-4" data-testid="text-faq-title">
              Veelgestelde Vragen
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4 md:space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="border hover-elevate">
                <CardContent className="p-4 md:p-6">
                  <h3 className="font-semibold text-base md:text-lg mb-2">Wat is de minimale bestelhoeveelheid?</h3>
                  <p className="text-sm md:text-base text-muted-foreground">
                    Wij hebben geen minimale bestelhoeveelheid. Of u nu 10 dozen of 10.000 dozen nodig heeft, 
                    wij leveren graag.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="border hover-elevate">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Hoe snel kan ik mijn bestelling ontvangen?</h3>
                  <p className="text-muted-foreground">
                    Artikelen die op voorraad zijn kunnen binnen 24-48 uur geleverd worden. 
                    Voor maatwerk oplossingen hangt de levertijd af van de specificaties.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="border hover-elevate">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Leveren jullie ook maatwerk verpakkingen?</h3>
                  <p className="text-muted-foreground">
                    Ja, wij zijn gespecialiseerd in maatwerk oplossingen. Neem contact met ons op 
                    om de mogelijkheden te bespreken.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="border hover-elevate">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Kunnen verpakkingen bedrukt worden?</h3>
                  <p className="text-muted-foreground">
                    Absoluut! Wij bieden professionele bedrukking in meerdere kleuren. 
                    Bekijk onze diensten pagina voor meer informatie.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
