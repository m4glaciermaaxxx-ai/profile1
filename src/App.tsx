import { useState, useEffect } from "react";
import { 
  Sparkles, 
  Menu, 
  X, 
  Heart, 
  User, 
  GraduationCap, 
  Briefcase, 
  Youtube, 
  Sliders, 
  Mail, 
  Check, 
  Copy 
} from "lucide-react";
import BackgroundGlows from "./components/BackgroundGlows";
import HeroSection from "./components/HeroSection";
import EducationSection from "./components/EducationSection";
import ExperienceSection from "./components/ExperienceSection";
import MediaSection from "./components/MediaSection";
import SkillsSection from "./components/SkillsSection";
import EvaluationSection from "./components/EvaluationSection";
import ContactSection from "./components/ContactSection";
import WaterRippleEffect from "./components/WaterRippleEffect";
import { personalInfoData } from "./data";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Monitor screen scroll to add sticky glass blur contrast
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { id: "basics", label: "基本信息", icon: <User className="w-4 h-4" /> },
    { id: "education", label: "教育背景", icon: <GraduationCap className="w-4 h-4" /> },
    { id: "experience", label: "项目经历", icon: <Briefcase className="w-4 h-4" /> },
    { id: "self-media", label: "自媒体经历", icon: <Youtube className="w-4 h-4" /> },
    { id: "skills", label: "技能证书", icon: <Sliders className="w-4 h-4" /> },
    { id: "evaluation", label: "自我评价", icon: <Heart className="w-4 h-4" /> },
  ];

  const handleScrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const copyEmailDirect = () => {
    navigator.clipboard.writeText(personalInfoData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div className="relative min-h-screen text-neutral-900 font-sans antialiasedSelection">
      {/* Dynamic Pastel Animated Background Mesh */}
      <BackgroundGlows />

      {/* Interactive Glassy Water Ripple click tracker */}
      <WaterRippleEffect />

      {/* Floating Glassmorphic Top Nav Header */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "bg-white/30 backdrop-blur-md shadow-xs border-b border-white/30"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
          {/* Professional Brand Logo */}
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2.5 cursor-pointer group"
          >
            <div className="w-9 h-9 rounded-full bg-white/40 backdrop-blur-md border border-white/60 text-[#1B4D53] group-hover:text-[#E37434] font-serif flex items-center justify-center font-light text-base tracking-widest transition-all duration-300 shadow-sm">
              尹
            </div>
            <div className="flex flex-col">
              <span className="font-sans font-semibold text-xs sm:text-xs tracking-widest text-[#1B4D53] uppercase">
                YIN GUANGYUAN
              </span>
              <span className="font-sans text-[8px] tracking-widest text-[#4B9DA9] uppercase font-bold">
                Art & Design Portfolio
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 bg-white/35 backdrop-blur-md border border-white/70 p-1 rounded-full shadow-xs">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleScrollTo(item.id)}
                className="px-4 py-1.5 text-xs font-semibold text-[#1F4D53] hover:text-[#E37434] rounded-full hover:bg-white/45 transition-all duration-200 cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Interactive Action Button */}
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={copyEmailDirect}
              className="px-4 py-2 text-xs font-bold bg-[#1B4D53] hover:bg-[#E37434] text-white rounded-full transition-all duration-300 flex items-center gap-1.5 shadow-sm cursor-pointer border border-[#1B4D53]/20"
            >
              {copiedEmail ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-300" />
                  已复制邮箱
                </>
              ) : (
                <>
                  <Mail className="w-3.5 h-3.5" />
                  联系我 (Copy Email)
                </>
              )}
            </button>
          </div>

          {/* Mobile Menu Toggles */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-white/50 border border-white/60 text-neutral-700 hover:text-neutral-950 active:scale-95 transition-all"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu Overlays */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-zinc-950/20 backdrop-blur-lg flex flex-col justify-start pt-24 px-4">
          <div className="bg-white/85 backdrop-blur-xl border border-white/60 p-6 rounded-3xl shadow-xl flex flex-col space-y-3.5 max-w-sm mx-auto w-full animate-in fade-in slide-in-from-top-5 duration-350">
            <div className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest pb-2 border-b border-neutral-100">
              快速导航 (Menu Overview)
            </div>
            
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleScrollTo(item.id)}
                className="flex items-center gap-3 w-full p-3 rounded-2xl hover:bg-neutral-50/80 text-left text-sm font-semibold text-neutral-700 hover:text-neutral-950 cursor-pointer transition"
              >
                <span className="p-1.5 bg-neutral-100 rounded-lg text-neutral-650">
                  {item.icon}
                </span>
                {item.label}
              </button>
            ))}

            <button
              onClick={copyEmailDirect}
              className="mt-4 flex items-center justify-center gap-1.5 w-full p-4 bg-[#1F4D53] hover:bg-[#E37434] text-white rounded-2xl text-xs font-bold shadow-md cursor-pointer transition-colors duration-300"
            >
              {copiedEmail ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  已复制 869024442@qq.com
                </>
              ) : (
                <>
                  <Mail className="w-4 h-4" />
                  复制邮箱投递简历
                </>
              )}
            </button>
          </div>
        </div>
      )}

      {/* Primary Responsive Container Layout */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Abstract Floating Intro Banner Block */}
        <div className="absolute top-[5%] left-[5%] right-[5%] -z-10 text-[11vw] font-serif font-light text-[#1B4D53]/4 select-none pointer-events-none tracking-tight leading-none italic lowercase text-center">
          curator &amp; researcher
        </div>

        {/* 1. 个人基本信息 */}
        <HeroSection />

        {/* 2. 教育背景 */}
        <EducationSection />

        {/* 3. 工作及项目经历 */}
        <ExperienceSection />

        {/* 4. 自媒体经历 */}
        <MediaSection />

        {/* 5. 个人技能 & 6. 软件技能 */}
        <SkillsSection />

        {/* 7. 自我评价 */}
        <EvaluationSection />

        {/* 8. 简短联系模块 */}
        <ContactSection />
      </main>

      {/* Bottom Footer Section */}
      <footer className="w-full py-10 bg-white/20 backdrop-blur-md border-t border-white/20 text-center">
        <div className="max-w-7xl mx-auto px-4 text-xs tracking-wider text-neutral-400">
          <div className="flex justify-center items-center gap-3 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-300" />
            <span className="font-display font-medium text-neutral-500 uppercase">尹广源 INDIVIDUAL PORTFOLIO Website</span>
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-300" />
          </div>
          <p className="leading-relaxed text-[11px]">
            &copy; {new Date().getFullYear()} Yin Guangyuan. Powered by React, Vite, and glassmorphic designs.
          </p>
        </div>
      </footer>
    </div>
  );
}
