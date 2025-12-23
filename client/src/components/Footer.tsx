import { Link } from "wouter";
import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="border-t border-blue-200 bg-gradient-to-b from-sky-50 to-blue-50 mt-auto">
      <div className="container mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-sm text-blue-800/80 leading-relaxed">
              Uw betrouwbare partner voor hoogwaardige verpakkingsmaterialen. 
              Specialist in golfkarton, dozen en maatwerk oplossingen.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold text-lg mb-4 text-blue-900">Snelle Links</h3>
            <nav className="flex flex-col gap-2">
              <Link 
                href="/assortiment"
                className="text-sm text-blue-700 hover:text-blue-900 hover:font-semibold transition-colors" 
                data-testid="link-footer-assortiment"
              >
                Assortiment
              </Link>
              <Link 
                href="/diensten"
                className="text-sm text-blue-700 hover:text-blue-900 hover:font-semibold transition-colors" 
                data-testid="link-footer-diensten"
              >
                Diensten
              </Link>
              <Link 
                href="/over-ons"
                className="text-sm text-blue-700 hover:text-blue-900 hover:font-semibold transition-colors" 
                data-testid="link-footer-over-ons"
              >
                Over Ons
              </Link>
            </nav>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold text-lg mb-4 text-blue-900">Contact</h3>
            <div className="flex flex-col gap-3">
              <a 
                href="mailto:info@nlpack.nl" 
                className="flex items-center gap-2 text-sm text-blue-700 hover:text-blue-900 transition-colors"
                data-testid="link-footer-email"
              >
                <Mail className="h-4 w-4 flex-shrink-0" />
                info@nlpack.nl
              </a>
              <div className="flex items-center gap-2 text-sm text-blue-700" data-testid="text-footer-phone">
                <Phone className="h-4 w-4 flex-shrink-0" />
                +31 6 39 19 08 34
              </div>
              <div className="flex items-start gap-2 text-sm text-blue-700" data-testid="text-footer-address">
                <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" />
                <span>Rotterdam, Nederland</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 pt-8 border-t border-blue-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-blue-700" data-testid="text-copyright">
              © 2025 NL Pack. Alle rechten voorbehouden. Website door{' '}
              <a 
                href="https://digitalstarter.nl" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition-colors underline font-semibold"
              >
                digitalstarter.nl
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
