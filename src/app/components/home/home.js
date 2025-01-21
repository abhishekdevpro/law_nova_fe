import HomeBanner from "./homebanner";
import Course from "./course";
import Testimonials from "./testimonial";
import Partner from "./partner";
export default function Home() {
  return (
    <div className="">
      <HomeBanner />
      <Course />
      <Testimonials />
      <Partner />
    </div>
  );
}
