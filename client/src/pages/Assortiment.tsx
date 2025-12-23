import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Package } from "lucide-react";
import { motion } from "framer-motion";
import golfkartonImage from "@assets/generated_images/Corrugated_cardboard_boxes_product_shot_79b35c24.png";
import agfImage from "@assets/generated_images/AGF_produce_packaging_boxes_d26a7d11.png";
import industrialImage from "@assets/generated_images/Industrial_shipping_packaging_solutions_b1f1633a.png";

export default function Assortiment() {
  const categories = [
    {
      title: "Golfkarton Dozen",
      image: golfkartonImage,
      description: "Hoogwaardige golfkarton dozen in diverse formaten en kwaliteiten.",
      products: [
        "Verzenddozen in standaard formaten",
        "Amerikaanse vouwdozen",
        "Sluitdozen met automatische bodem",
        "Kartonnen trays en displays",
      ],
    },
    {
      title: "AGF Verpakkingen",
      image: agfImage,
      description: "Gespecialiseerde verpakkingen voor groente en fruit.",
      products: [
        "Groente- en fruitkratten",
        "AGF dozen met ventilatie",
        "Presentatieverpakkingen",
        "Beschermende inlays",
      ],
    },
    {
      title: "Industriële Verpakkingen",
      image: industrialImage,
      description: "Stevige verpakkingsoplossingen voor industriële toepassingen.",
      products: [
        "Zware kwaliteit dozen",
        "Palletverpakkingen",
        "Exportverpakkingen",
        "Maatwerk industriële oplossingen",
      ],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-card border-b">
        <div className="container mx-auto max-w-7xl px-4 py-8 md:py-16">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground mb-3 md:mb-4" data-testid="breadcrumb-assortiment">
              <Link href="/" className="hover:text-foreground transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-foreground">Assortiment</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 md:mb-4" data-testid="text-page-title">
              Ons Assortiment
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
              Ontdek onze uitgebreide collectie verpakkingsmaterialen. Van standaard verzenddozen 
              tot gespecialiseerde AGF verpakkingen en industriële oplossingen.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="space-y-8 md:space-y-16">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden border" data-testid={`card-category-${index}`}>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                      <div className="aspect-[3/2] sm:aspect-[4/3] lg:aspect-auto lg:h-full overflow-hidden">
                        <motion.img 
                          src={category.image} 
                          alt={category.title}
                          className="w-full h-full object-cover"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>
                    </div>
                    <CardContent className={`p-4 md:p-8 lg:p-12 flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                      <div className="inline-flex items-center gap-2 text-primary mb-3 md:mb-4">
                        <Package className="h-4 w-4 md:h-5 md:w-5" />
                        <span className="text-xs md:text-sm font-medium">Productcategorie</span>
                      </div>
                      <h2 className="text-lg md:text-2xl lg:text-3xl font-semibold mb-3 md:mb-4">{category.title}</h2>
                      <p className="text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed mb-4 md:mb-6">
                        {category.description}
                      </p>
                      <ul className="space-y-3 mb-8">
                        {category.products.map((product, pIndex) => (
                          <motion.li 
                            key={pIndex} 
                            className="flex items-start gap-3" 
                            data-testid={`text-product-${index}-${pIndex}`}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: pIndex * 0.1 }}
                            viewport={{ once: true }}
                          >
                            <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-base">{product}</span>
                          </motion.li>
                        ))}
                      </ul>
                      <div>
                        <Link href="/contact">
                          <Button variant="default" data-testid={`button-category-contact-${index}`}>
                            Vraag Informatie Aan
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24 bg-card">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-3 md:mb-4" data-testid="text-custom-title">
              Op Zoek Naar Maatwerk?
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed mb-6 md:mb-8">
              Wij leveren ook verpakkingen op maat, volledig afgestemd op uw specifieke 
              producten en wensen. Neem contact met ons op voor de mogelijkheden.
            </p>
            <Link href="/contact">
              <Button size="sm" sm:size-md md:size-lg variant="default" data-testid="button-custom-contact">
                Bespreek Maatwerk Oplossing
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
