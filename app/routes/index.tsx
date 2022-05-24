import { HeroSection } from "~/components/sections/Hero-Section"
import { FeaturedSection } from "~/components/sections/Featured-Section"
import { Spacer } from "~/components/Spacer"

export default function Index() {
  return (
    <>
      <HeroSection
        title='Boston Smith'
        subtitle='Full Stack Web Developer'
        description="I'm a full stack web developer who has a passion for solving
        business problems with code. Let's start scrolling and learn more
        about me."
      />

      <main>
        <FeaturedSection />
        <Spacer size='lg' className='bg-slate-400' />
      </main>
    </>
  )
}
