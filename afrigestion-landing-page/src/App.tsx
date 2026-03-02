import { motion } from "motion/react";
import { 
  ShieldCheck, 
  WifiOff, 
  TrendingUp, 
  CheckCircle2, 
  Mail, 
  Phone, 
  MessageCircle,
  ArrowRight,
  BarChart3,
  Users
} from "lucide-react";

export default function App() {
  const whatsappNumber = "243896034805";
  const investorMessage = encodeURIComponent("Bonjour Oscar, je suis intéressé par une prise de participation dans AfriGestion");
  const generalMessage = encodeURIComponent("Bonjour Oscar, je souhaite discuter d'un investissement dans AfriGestion");

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-navy/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-emerald rounded-lg flex items-center justify-center text-white font-bold text-xl">
              A
            </div>
            <span className="text-2xl font-bold text-navy tracking-tight">AfriGestion</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#solutions" className="hover:text-emerald transition-colors">Solutions</a>
            <a href="#investisseurs" className="hover:text-emerald transition-colors">Investisseurs</a>
            <a href="#contact" className="hover:text-emerald transition-colors">Contact</a>
            <button className="bg-navy text-white px-6 py-2.5 rounded-full hover:bg-navy/90 transition-all shadow-md">
              Démo Gratuite
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 bg-gradient-to-b from-navy/5 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 bg-emerald/10 text-emerald rounded-full text-sm font-semibold mb-6">
                Solution Fintech RDC
              </span>
              <h1 className="text-4xl lg:text-6xl font-extrabold text-navy leading-tight mb-6">
                AfriGestion : Sécurisez votre commerce en RDC
              </h1>
              <p className="text-lg lg:text-xl text-navy/70 mb-10 leading-relaxed">
                Le logiciel de caisse et de stock 100% hors-ligne qui gère le taux de change USD/CDF en un clic.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-emerald text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-emerald/90 transition-all shadow-lg shadow-emerald/20 flex items-center justify-center gap-2">
                  Demander une démo gratuite <ArrowRight size={20} />
                </button>
                <a 
                  href="#investisseurs"
                  className="bg-white border-2 border-navy/10 text-navy px-8 py-4 rounded-xl font-bold text-lg hover:bg-navy/5 transition-all text-center"
                >
                  Espace Investisseurs
                </a>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-navy rounded-2xl shadow-2xl p-4 aspect-video flex items-center justify-center overflow-hidden border-8 border-navy/10">
                <img 
                  src="https://picsum.photos/seed/dashboard/800/450" 
                  alt="Interface AfriGestion" 
                  className="rounded-lg opacity-80"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-emerald rounded-full flex items-center justify-center text-white shadow-xl animate-pulse">
                    <BarChart3 size={40} />
                  </div>
                </div>
              </div>
              {/* Floating badges */}
              <div className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-xl border border-navy/5 hidden sm:block">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald/10 rounded-full flex items-center justify-center text-emerald">
                    <TrendingUp size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-navy/50 font-bold uppercase tracking-wider">Taux de change</p>
                    <p className="text-sm font-bold text-navy">Mise à jour instantanée</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problems Solved Section */}
      <section id="solutions" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-4">Pourquoi choisir AfriGestion ?</h2>
            <p className="text-navy/60 max-w-2xl mx-auto">Nous résolvons les défis quotidiens des commerçants congolais avec une technologie adaptée au terrain.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <TrendingUp className="text-emerald" size={32} />,
                title: "Fin des erreurs de taux",
                desc: "Convertissez vos prix instantanément entre USD et CDF selon le taux du jour, sans calculatrice."
              },
              {
                icon: <ShieldCheck className="text-emerald" size={32} />,
                title: "Contrôle des vols",
                desc: "Suivez chaque transaction et chaque mouvement de stock en temps réel. Sécurisez vos revenus."
              },
              {
                icon: <WifiOff className="text-emerald" size={32} />,
                title: "Gestion sans internet",
                desc: "Logiciel 100% hors-ligne. Travaillez sans interruption, peu importe la qualité de la connexion."
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="p-8 rounded-2xl bg-navy/5 border border-navy/5 hover:border-emerald/30 transition-all"
              >
                <div className="mb-6">{item.icon}</div>
                <h3 className="text-xl font-bold text-navy mb-4">{item.title}</h3>
                <p className="text-navy/70 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Investor Section */}
      <section id="investisseurs" className="py-24 bg-navy text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-emerald/5 -skew-x-12 transform translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-emerald font-bold uppercase tracking-widest text-sm mb-4 block">Devenez Partenaire de notre Croissance</span>
              <h2 className="text-3xl lg:text-5xl font-bold mb-8 leading-tight">
                Investissez dans la Transition Numérique de la RDC.
              </h2>
              <p className="text-white/80 text-lg mb-8 leading-relaxed">
                AfriGestion répond à un besoin critique de milliers de commerçants à Kinshasa et partout au pays. Nous ouvrons notre capital pour accélérer notre déploiement avant le 10 mars.
              </p>
              <div className="space-y-4 mb-10">
                {[
                  "Un produit déjà fonctionnel (V1.0).",
                  "Un marché de niche sans dépendance à Internet.",
                  "Une rentabilité rapide basée sur un modèle de vente directe."
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-emerald" size={20} />
                    <span className="text-white/90">{item}</span>
                  </div>
                ))}
              </div>
              <p className="bg-white/10 p-4 rounded-lg border-l-4 border-emerald mb-8 italic">
                "Opportunité d'investissement : Participez à l'expansion de la solution numérique leader pour les PME en RDC. Contactez le fondateur directement."
              </p>
              <a 
                href={`https://wa.me/${whatsappNumber}?text=${investorMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-emerald text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-emerald/90 transition-all shadow-lg shadow-emerald/20"
              >
                <MessageCircle size={24} /> Discuter sur WhatsApp avec le Fondateur
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                  <Users className="text-emerald mb-4" size={32} />
                  <h4 className="font-bold text-xl mb-1">Marché</h4>
                  <p className="text-sm text-white/60">Milliers de PME en RDC</p>
                </div>
                <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                  <TrendingUp className="text-emerald mb-4" size={32} />
                  <h4 className="font-bold text-xl mb-1">Croissance</h4>
                  <p className="text-sm text-white/60">Déploiement accéléré</p>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                  <ShieldCheck className="text-emerald mb-4" size={32} />
                  <h4 className="font-bold text-xl mb-1">Sécurité</h4>
                  <p className="text-sm text-white/60">Zéro dépendance cloud</p>
                </div>
                <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                  <BarChart3 className="text-emerald mb-4" size={32} />
                  <h4 className="font-bold text-xl mb-1">V1.0</h4>
                  <p className="text-sm text-white/60">Prêt à l'emploi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-navy rounded-3xl p-8 lg:p-16 text-white text-center relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald/10 rounded-full -translate-x-1/2 translate-y-1/2 blur-3xl"></div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-8 relative z-10">Prêt à transformer votre commerce ?</h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 lg:gap-16 relative z-10">
              <div className="flex flex-col items-center gap-3">
                <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center text-emerald mb-2">
                  <Mail size={28} />
                </div>
                <p className="text-white/60 text-sm uppercase font-bold tracking-widest">Email</p>
                <a href="mailto:oscarmazunda48@gmail.com" className="text-xl font-bold hover:text-emerald transition-colors">oscarmazunda48@gmail.com</a>
              </div>
              <div className="w-px h-20 bg-white/10 hidden md:block"></div>
              <div className="flex flex-col items-center gap-3">
                <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center text-emerald mb-2">
                  <Phone size={28} />
                </div>
                <p className="text-white/60 text-sm uppercase font-bold tracking-widest">Téléphone</p>
                <a href="tel:+243896034805" className="text-xl font-bold hover:text-emerald transition-colors">+243 896034805</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-navy/5 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-emerald rounded flex items-center justify-center text-white font-bold">A</div>
            <span className="text-xl font-bold text-navy">AfriGestion</span>
          </div>
          <p className="text-navy/40 text-sm">© {new Date().getFullYear()} AfriGestion. Tous droits réservés.</p>
          <div className="flex gap-6 text-sm font-medium text-navy/60">
            <a href="#" className="hover:text-emerald">Confidentialité</a>
            <a href="#" className="hover:text-emerald">Conditions</a>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <motion.a
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href={`https://wa.me/${whatsappNumber}?text=${generalMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center group"
        title="Discuter sur WhatsApp"
      >
        <MessageCircle size={32} />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-3 transition-all duration-500 ease-in-out whitespace-nowrap font-bold">
          Discuter avec Oscar
        </span>
      </motion.a>
    </div>
  );
}
