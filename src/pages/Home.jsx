import Hero from "../sections/Hero";
import Welcome from "../sections/Welcome";
import Statistics from "../sections/Statistics";
import CoreValues from "../sections/CoreValues";
import WhyChooseUs from "../sections/WhyChooseUs";
import Academics from "../sections/Academics";
import Facilities from "../sections/Facilities";
import StudentLife from "../sections/StudentLife";
import Testimonials from "../sections/Testimonials";
import AdmissionsCTA from "../sections/AdmissionsCTA";
export default function Home() {
  return (
    <>
      <Hero />
      <Welcome />
      <Statistics />
      <CoreValues />
      <WhyChooseUs />
      <Academics />
      <Facilities />
      <StudentLife />
      <Testimonials />
      <AdmissionsCTA />
    </>
  );
}