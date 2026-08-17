import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import PageSEO from '../components/PageSEO';

const team = [
  {
    name: 'Matt Ryan',
    title: 'Owner / Master Tech',
    photo: '/New photos/Matt_Ryan_1.jpeg',
    altPhoto: '/New photos/Matt_Ryan_2.jpeg',
    bio: `Graduate of WyoTech, over 20 years in the automotive industry, Diagnostic Expertise, classic car repair specialist, welder, fabricator, expertise in root-cause failure analysis, Experience repairing all makes and model vehicles, experience from small engines to CAT 3500 Series Engines, possess a rare combination of old-school mechanical fundamentals and modern technical adaptability.

FUN FACT: Matt engages in short-course dirt track endurance races and has traveled internationally to Australia to race! He hosts The SO-LO 275 Race at the Ark-La-Tex Speedway every March!`,
  },
  {
    name: 'Tracey Cundieff',
    title: 'Service Manager',
    photo: '/New photos/Tracey_Cundieff_1.jpeg',
    altPhoto: '/New photos/Tracey_Cundieff_1.jpeg',
    bio: `Over 20 years of operational and management leadership to modernize shop workflow, Customer communications and service experience.

FUN FACT: Tracey has a spoiled pet Opossum that likes to eat grapes and applesauce!`,
  },
  {
    name: 'Mike Sheeks',
    title: 'Master Tech',
    photo: '/New photos/Mike_Sheeks_1.jpeg',
    altPhoto: '/New photos/Mike_Sheeks_2.jpeg',
    bio: `A 35 year track record of excellence in automotive environments, comprehensive understanding of automotive evolution, experience in all makes and models with a deep understanding of vehicle component wear patterns and preventative maintenance, Expertise in diagnostic logic and complex system overhauls.

FUN FACT: Mike has a hobby of building lifted 4x4 trucks for trail riding and offroad fun!`,
  },
  {
    name: 'Collin Harris',
    title: 'Master Tech',
    photo: '/New photos/Collin_Harris_1.jpeg',
    altPhoto: '/New photos/Collin_Harris_2.jpeg',
    bio: `Over 18 years of experience, ASE Master Certified with Advanced Level Specialist L1 Certificate, 10 years experience at a Toyota Dealership, 8 years of teaching Automotive Tech School at a local college, thorough diagnostics experience and a proactive commitment to continuous learning over his career.

FUN FACT: Collin has multiple guitars and plays frequently! He’s also an avid reader!`,
  },
  {
    name: 'Dawn Branch',
    title: 'Office Administrator',
    photo: '/New photos/Dawn_Branch_1.jpeg',
    altPhoto: '/New photos/Dawn_Branch_1.jpeg',
    bio: `Over 20 years of bookkeeping experience, 10 years of it in an automotive setting. Over 30 years of experience in customer service and communications.

FUN FACT: Dawn has a Turtle, 2 ferrets, 2 Dogs, and 5 Cats. She loves to cook on the grill and she also loves puzzles!`,
  },
];

export default function TeamPage() {
  return (
    <div className="bg-brand-black min-h-screen text-white">
      <PageSEO
        title="Meet the Team | Southern Longview Automotive"
        description="Meet the ASE-certified technicians and staff at Southern Longview Automotive, bringing decades of combined experience to every repair in Longview, TX."
        path="/team"
      />

      {/* Banner Hero */}
      <section className="relative h-[40vh] min-h-[300px] w-full border-b border-brand-red/30 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/80 to-transparent z-10" />
        <img
          src="/New photos/Team_1.jpeg"
          alt="Southern Longview Auto Team"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        <div className="relative z-20 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center pt-24 md:pt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-[1px] bg-brand-red" />
              <span className="text-brand-red font-mono text-sm tracking-widest uppercase">The Crew</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tighter uppercase mb-2">
              Meet the<br />Team.
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-4xl mx-auto px-6 pt-20 pb-4 text-center">
        <motion.p
          className="text-white/60 text-lg md:text-xl leading-relaxed font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Behind every great repair is a team of dedicated professionals who genuinely care about your vehicle — and, frankly, about doing things the right way. Meet the people keeping Longview on the road.
        </motion.p>
      </section>

      {/* Team Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="flex flex-col gap-24">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              className={`grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-start ${
                i % 2 === 1 ? 'lg:[direction:rtl]' : ''
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              {/* Photo */}
              <div className={`lg:col-span-2 ${i % 2 === 1 ? 'lg:[direction:ltr]' : ''}`}>
                <div className="relative group overflow-hidden border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.6)]">
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-brand-red/0 group-hover:bg-brand-red/15 transition-colors duration-500 z-10 mix-blend-overlay" />
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full aspect-[3/4] object-cover object-top transform group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Name badge on image */}
                  <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-brand-yellow font-mono text-xs tracking-widest uppercase mb-1">{member.title}</p>
                    <h3 className="text-2xl font-display font-bold tracking-tight text-white">{member.name}</h3>
                  </div>
                </div>
              </div>

              {/* Bio */}
              <div className={`lg:col-span-3 flex flex-col justify-center ${i % 2 === 1 ? 'lg:[direction:ltr]' : ''}`}>
                {/* Desktop name header (visible only on lg+) */}
                <div className="hidden lg:block mb-6">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-8 h-[1px] bg-brand-red" />
                    <span className="text-brand-red font-mono text-xs tracking-widest uppercase">{member.title}</span>
                  </div>
                  <h2 className="text-4xl font-display font-bold tracking-tight text-white">{member.name}</h2>
                </div>

                {/* Decorative rule */}
                <div className="w-16 h-[2px] bg-brand-yellow mb-6 hidden lg:block" />

                <p className="text-white/70 text-base md:text-lg leading-relaxed font-medium whitespace-pre-line">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team Photo CTA Band */}
      <section className="relative border-t border-white/10 overflow-hidden">
        <img
          src="/New photos/Team_2.jpeg"
          alt="The full Southern Longview Auto team"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/90" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 py-24 md:py-36 text-center flex flex-col items-center">
          <div className="flex items-center gap-4 mb-6 justify-center">
            <div className="w-8 h-[1px] bg-brand-yellow" />
            <span className="text-brand-yellow font-mono text-xs tracking-widest uppercase">One Team. One Standard.</span>
            <div className="w-8 h-[1px] bg-brand-yellow" />
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter uppercase text-white mb-6">
            Ready to Meet Us<br />in Person?
          </h2>
          <p className="text-white/60 text-lg mb-10 max-w-2xl leading-relaxed">
            Stop by the shop, give us a call, or schedule a visit online. We promise the team is just as great in person — and slightly less quotable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="bg-brand-yellow text-black px-8 py-4 font-semibold tracking-wide hover:bg-brand-red hover:text-white hover:outline hover:outline-2 hover:outline-offset-4 hover:outline-brand-red transition-all duration-300 text-center"
            >
              Book an Appointment
            </Link>
            <a
              href="tel:9036534901"
              className="border border-white/30 text-white px-8 py-4 font-semibold tracking-wide hover:bg-brand-red hover:text-white hover:outline hover:outline-2 hover:outline-offset-4 hover:outline-brand-red transition-all duration-300 text-center"
            >
              Call (903) 653-4901
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
