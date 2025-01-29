import Banner from './components/Banner/Banner';
import Companies from './components/Companies/Companies';
import Tabs from './components/Courses/Courses';
import Mentor from './components/Mentor/Mentor';
import Founder from './components/Founder/Founder';
import Students from './components/Students/Students';
import Newsletter from './components/Newsletter/Newsletter';

export default function Home() {
  return (
    <main>
      <Banner />
      <Companies />
      <Tabs />
      <Mentor />
      <Founder />
      <Students />
      <Newsletter />
    </main>
  )
}
