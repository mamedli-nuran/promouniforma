import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, Phone, Instagram, ChevronDown, 
  CheckCircle, Factory, ShieldCheck, Clock, 
  MessageCircle, Mail, MapPin 
} from 'lucide-react';

const phoneNumber = "994552580559";
const displayPhone = "055 258 0559";

const generateWhatsAppLink = (text) => {
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
};

const categoriesData = [
  {
    id: "korporativ",
    title: "Korporativ və Ofis Geyimləri",
    description: "Biznes mühitində peşəkar görünüş üçün yüksək keyfiyyətli ofis geyimləri.",
    items: ["Kişi və Qadın Kostyumları", "Ofis Köynəkləri və Bluzlar", "Korporativ Jiletlər", "Aksessuarlar"],
    image: "https://images.pexels.com/photos/776615/pexels-photo-776615.jpeg?auto=compress&cs=tinysrgb&w=800",
    badges: ["Gabardin", "Pambıq", "Viskon"]
  },
  {
    id: "promosiya",
    title: "Promosiya və Gündəlik Korporativ Geyimlər",
    description: "Tədbirlər və gündəlik istifadə üçün rahat və şıq geyimlər.",
    items: ["Polo Tişörtlər", "Basic Tişörtlər", "Hudi və Svitşörtlər", "Kepka və Papaqlar"],
    image: "/promosiya-image.jpg",
    badges: ["Pique Lakost", "100% Pambıq"]
  },
  {
    id: "isci",
    title: "İşçi və Sənaye Uniformaları",
    description: "Ağır iş şəraiti üçün dözümlü və təhlükəsizlik standartlarına uyğun uniformalar.",
    items: ["İşçi Kombinezonları", "İşçi Kostyumları (Gödəkçə + Şalvar)", "Signal / Reflektorlu Geyimlər", "Qış İş Gödəkçələri"],
    image: "/isci-image.jpg",
    badges: ["Ripstop", "Suya Dözümlü"]
  },
  {
    id: "horeca",
    title: "HoReCa və Xidmət Sektoru",
    description: "Restoran, otel və xidmət sektoru işçiləri üçün xüsusi dizayn edilmiş geyimlər.",
    items: ["Aşpaz Geyimləri", "Ofisiant və Barmen Uniformaları", "Otel və Reseptşn", "Təmizlik və Xadimə Dəstləri"],
    image: "/horeca-image.jpg",
    badges: ["Ləkə Götürməyən", "Nəfəs Alan"]
  },
  {
    id: "mektebli",
    title: "Məktəbli və Təhsil Uniformaları",
    description: "Məktəblilər üçün standartlara cavab verən, rahat və dözümlü uniformalar.",
    items: ["Məktəbli Polo və Sviterlər", "Məktəbli Kostyumları"],
    image: "/mektebli-image.jpg",
    badges: ["Anti-allergik", "Pambıq"]
  },
  {
    id: "brendinq",
    title: "Xüsusi Brendinq və Tekstil Xidmətlərimiz",
    description: "Geyimlərinizə xüsusi loqo və dizaynların fərqli üsullarla tətbiqi.",
    items: ["Loqo Naxış (Embroidery)", "Silk / Seriqrafiya Çapı", "DTF və Termotransfer", "Fərdi Biçim və Lekal"],
    image: "/brendinq-image.jpg",
    badges: ["Yüksək Keyfiyyət", "Davamlı"]
  }
];

const heroImages = [
  "https://images.pexels.com/photos/3738087/pexels-photo-3738087.jpeg?auto=compress&cs=tinysrgb&w=1920",
  "https://images.pexels.com/photos/7319324/pexels-photo-7319324.jpeg?auto=compress&cs=tinysrgb&w=1920",
  "https://images.pexels.com/photos/461035/pexels-photo-461035.jpeg?auto=compress&cs=tinysrgb&w=1920"
];

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-brand-gray text-brand-navy font-sans">
      {/* Header */}
      <header 
        className={`fixed w-full z-40 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md py-2' : 'bg-white/90 backdrop-blur-sm py-4'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 lg:px-8 flex justify-between items-center">
          {/* Logo */}
          <div className="flex flex-col cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <span className="text-2xl font-bold tracking-tight text-brand-navy">
              Promo Uniforma
            </span>
            <span className="text-xs text-gray-500 font-medium tracking-wide">
              İstehsalat & Korporativ Geyim
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <div className="relative group">
              <button 
                onClick={() => scrollToSection('kataloq')}
                className="flex items-center gap-1 font-medium hover:text-brand-amber transition-colors py-2"
              >
                ETDİYİMİZ İŞLƏR <ChevronDown size={16} className="group-hover:rotate-180 transition-transform duration-300" />
              </button>
              
              {/* Dropdown Menu */}
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top translate-y-2 group-hover:translate-y-0 z-50">
                <div className="py-2">
                  {categoriesData.map((cat, idx) => (
                    <button
                      key={idx}
                      onClick={() => scrollToSection(cat.id)}
                      className="block w-full text-left px-4 py-2 text-sm hover:bg-brand-gray hover:text-brand-amber transition-colors"
                    >
                      {cat.title}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <button 
              onClick={() => scrollToSection('haqqimizda')}
              className="font-medium hover:text-brand-amber transition-colors py-2"
            >
              HAQQIMIZDA
            </button>
          </nav>

          {/* Desktop Right */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-4 text-sm font-medium">
              <a href={`https://wa.me/${phoneNumber}`} className="flex items-center gap-2 hover:text-brand-amber transition-colors">
                <Phone size={18} className="text-brand-amber" />
                <span>{displayPhone}</span>
              </a>
              <a href="https://www.instagram.com/promo_uniforma/" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-brand-amber transition-colors">
                <Instagram size={18} className="text-brand-amber" />
                <span>promo_uniforma</span>
              </a>
            </div>
            
            <a 
              href={`tel:+${phoneNumber}`}
              className="bg-brand-navy text-white px-5 py-2.5 rounded-full font-medium hover:bg-opacity-90 transition-all hover:shadow-lg active:scale-95"
            >
              Zəng Et
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-brand-navy"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-white border-t overflow-hidden"
            >
              <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
                <button onClick={() => scrollToSection('kataloq')} className="text-left font-medium py-2 border-b">
                  ETDİYİMİZ İŞLƏR
                </button>
                <div className="flex flex-col pl-4 gap-3 text-sm text-gray-600">
                  {categoriesData.map((cat, idx) => (
                    <button key={idx} onClick={() => scrollToSection(cat.id)} className="text-left">
                      {cat.title}
                    </button>
                  ))}
                </div>
                <button onClick={() => scrollToSection('haqqimizda')} className="text-left font-medium py-2 border-b">
                  HAQQIMIZDA
                </button>
                <div className="flex flex-col gap-3 py-2">
                  <a href={`https://wa.me/${phoneNumber}`} className="flex items-center gap-2 font-medium">
                    <Phone size={18} className="text-brand-amber" /> {displayPhone}
                  </a>
                  <a href="https://www.instagram.com/promo_uniforma/" className="flex items-center gap-2 font-medium">
                    <Instagram size={18} className="text-brand-amber" /> promo_uniforma
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center pt-20 overflow-hidden">
        {/* Background Slider */}
        <AnimatePresence mode="wait">
          <motion.img
            key={currentHeroIndex}
            src={heroImages[currentHeroIndex]}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 w-full h-full object-cover z-0"
            alt="Hero Background"
          />
        </AnimatePresence>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-brand-navy/60 z-10"></div>

        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-20 text-white">
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              İdeyanızdan İstehsalata Qədər Korporativ Tərəfdaşınız
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl">
              5 illik təcrübə və öz istehsalat xəttimizlə, biznesinizin ehtiyaclarına tam cavab verən yüksək keyfiyyətli Promo və Tekstil həlləri təqdim edirik.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href={generateWhatsAppLink("Salam, fərdi korporativ geyim sifarişi ilə bağlı məlumat almaq istəyirəm.")}
                target="_blank"
                rel="noreferrer"
                className="bg-brand-amber text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-amber-600 transition-colors shadow-lg hover:shadow-xl active:scale-95 flex items-center gap-2"
              >
                Fərdi Sifariş Et <MessageCircle size={20} />
              </a>
              <button 
                onClick={() => scrollToSection('kataloq')}
                className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/30 transition-colors border border-white/30"
              >
                İşlərimizə Bax
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="kataloq" className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-navy">Etdiyimiz İşlər</h2>
            <div className="w-24 h-1 bg-brand-amber mx-auto rounded-full"></div>
            <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
              Hər bir sahənin tələblərinə uyğun, fərdi dizayn və yüksək keyfiyyətli materiallarla hazırlanmış məhsullarımız.
            </p>
          </div>

          <div className="space-y-24">
            {categoriesData.map((category, index) => (
              <div id={category.id} key={category.id} className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-10 items-center scroll-mt-24`}>
                
                {/* Image */}
                <motion.div 
                  initial={{ opacity: 0, x: index % 2 !== 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className="w-full lg:w-1/2 relative group"
                >
                  <div className="overflow-hidden rounded-2xl shadow-xl">
                    <img 
                      src={category.image} 
                      alt={category.title} 
                      className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    {category.badges.map((badge, idx) => (
                      <span key={idx} className="bg-white/90 backdrop-blur-sm text-brand-navy text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                        {badge}
                      </span>
                    ))}
                  </div>
                </motion.div>

                {/* Content */}
                <motion.div 
                  initial={{ opacity: 0, x: index % 2 !== 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className="w-full lg:w-1/2"
                >
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">{category.title}</h3>
                  <p className="text-gray-600 mb-6 text-lg">{category.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-gray-700 font-medium">
                        <CheckCircle className="text-brand-emerald shrink-0" size={20} />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-4">
                    <a 
                      href={generateWhatsAppLink(`Salam, ${category.title} sifarişi üçün məlumat almaq istəyirəm.`)}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-brand-navy text-white px-6 py-3 rounded-xl font-medium hover:bg-opacity-90 transition-all hover:shadow-lg active:scale-95 flex items-center gap-2"
                    >
                      <MessageCircle size={18} /> Fərdi Sifariş
                    </a>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="haqqimizda" className="py-20 bg-brand-gray scroll-mt-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-navy">Haqqımızda</h2>
            <div className="w-24 h-1 bg-brand-amber mx-auto rounded-full"></div>
          </div>

          <div className="max-w-4xl mx-auto text-center mb-16">
            <p className="text-lg text-gray-700 leading-relaxed">
              <strong>Promo Uniforma Tekstil</strong> olaraq 5 ildir ki, Azərbaycan bazarında korporativ geyim və tekstil məhsullarının istehsalı ilə məşğuluq. Öz istehsalat xəttimiz sayəsində hər bir sifarişə xüsusi yanaşır, müştərilərimizin istəklərinə uyğun fərdi lekal və biçimlər tətbiq edirik. İstehsalatda yalnız sertifikatlı və dözümlü parçalardan (Ripstop, Gabardin, Pique Lakost, 100% Pambıq) istifadə edirik. Həmçinin müasir avadanlıqlarımızla istənilən növ loqo vurulmasını (Naxış, Çap, DTF) təmin edirik.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              { icon: <Factory size={32}/>, title: "Öz İstehsalat Xəttimiz", desc: "Sifarişlərin tam nəzarətimiz altında və yüksək keyfiyyətlə hazırlanması." },
              { icon: <ShieldCheck size={32}/>, title: "Davamlı Parçalar", desc: "İş şəraitinə uyğun, uzunömürlü və sertifikatlı materiallar." },
              { icon: <CheckCircle size={32}/>, title: "Müasir Brendinq", desc: "Naxış, Seriqrafiya və DTF çap texnologiyaları ilə qüsursuz loqolar." },
              { icon: <Clock size={32}/>, title: "Dəqiq Təhvilat", desc: "Sifarişlərin razılaşdırılmış vaxtda, gecikməsiz təhvil verilməsi." }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all text-center"
              >
                <div className="text-brand-emerald mb-4 flex justify-center">{feature.icon}</div>
                <h4 className="font-bold text-lg mb-2">{feature.title}</h4>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-md border-l-4 border-brand-amber">
              <h4 className="text-2xl font-bold mb-4">Missiyamız</h4>
              <p className="text-gray-700">Müştərilərimizin korporativ imicini ən yüksək səviyyədə təmsil edən, eyni zamanda işçilərin rahatlığını və təhlükəsizliyini təmin edən qüsursuz geyim həlləri yaratmaq.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-md border-l-4 border-brand-emerald">
              <h4 className="text-2xl font-bold mb-4">Vizyonumuz</h4>
              <p className="text-gray-700">Bölgədə korporativ tekstil və istehsalat sahəsində ən etibarlı, innovativ və lider tərəfdaş olmaq.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Action Button */}
      <motion.a
        href={generateWhatsAppLink("Salam, xidmətlərinizlə bağlı ətraflı məlumat almaq istəyirəm.")}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_4px_14px_0_rgba(37,211,102,0.39)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.23)] hover:scale-110 transition-all duration-300 group flex items-center justify-center"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        <span className="absolute -top-10 right-0 bg-gray-900 text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Bizə yazın
          <div className="absolute -bottom-1 right-5 w-2 h-2 bg-gray-900 transform rotate-45"></div>
        </span>
        <MessageCircle size={28} className="animate-pulse" />
      </motion.a>

      {/* Footer */}
      <footer className="bg-brand-navy text-white pt-16 pb-8">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
            
            {/* Brand */}
            <div>
              <div className="mb-4">
                <span className="text-2xl font-bold tracking-tight text-white">
                  Promo Uniforma
                </span>
                <p className="text-sm text-gray-400 mt-1">İstehsalat & Korporativ Geyim</p>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
                İdeyanızdan istehsalata qədər - biznesiniz üçün Promo və Tekstil həlləri.
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-bold text-lg mb-6 border-b border-gray-700 pb-2 inline-block">Sürətli Keçidlər</h4>
              <ul className="space-y-3">
                {categoriesData.slice(0, 4).map((cat, idx) => (
                  <li key={idx}>
                    <button 
                      onClick={() => scrollToSection(cat.id)}
                      className="text-gray-400 hover:text-brand-amber transition-colors text-sm text-left"
                    >
                      {cat.title}
                    </button>
                  </li>
                ))}
                <li>
                  <button onClick={() => scrollToSection('haqqimizda')} className="text-gray-400 hover:text-brand-amber transition-colors text-sm">Haqqımızda</button>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold text-lg mb-6 border-b border-gray-700 pb-2 inline-block">Əlaqə</h4>
              <ul className="space-y-4">
                <li>
                  <a href={`https://wa.me/${phoneNumber}`} className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                    <Phone size={18} className="text-brand-amber" /> {displayPhone}
                  </a>
                </li>
                <li>
                  <a href="mailto:promo.uniforma@gmail.com" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                    <Mail size={18} className="text-brand-amber" /> promo.uniforma@gmail.com
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/promo_uniforma/" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                    <Instagram size={18} className="text-brand-amber" /> promo_uniforma
                  </a>
                </li>
                <li className="flex items-start gap-3 text-gray-400">
                  <MapPin size={18} className="text-brand-amber shrink-0 mt-1" />
                  <span>Bakı, Azərbaycan</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Promo Uniforma Tekstil. Bütün hüquqlar qorunur.
            </p>
            <div className="text-gray-500 text-sm flex gap-4">
              <span className="hover:text-white cursor-pointer transition-colors">Məxfilik Siyasəti</span>
              <span className="hover:text-white cursor-pointer transition-colors">Şərtlər və Qaydalar</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
