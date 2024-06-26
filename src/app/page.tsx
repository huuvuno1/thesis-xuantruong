import { Banner } from '@/components/Banner';
import HomeCategoriesSection from '@/containers/HomeCategoriesSection';
import HomeProductSection from '@/containers/HomeProductSection';
import subBanner from '@/assets/images/subBanner.png';
import styles from './styles.module.css';
import MainLayout from '@/layouts/MainLayout';
import Image from 'next/image';
import HomeCoolProductSection from '@/containers/HomeCoolProductSection';
import HomeSubBanner2 from '@/containers/HomeSubBanner2';
import HomeNewSection from '@/containers/HomeNewSection';
import HomeBannerWarehouse from '@/containers/HomeBannerWarehouse';
import HomeReview from '@/containers/HomeReview';
import HomeBannerDT from '@/containers/HomeBannerDT';
import HomeResponsive from '@/responsive/HomeResponsive';

export default function Home() {
  return (
    <MainLayout>
      <div className={styles.desktopOnly}>
        <Banner />

        <HomeCategoriesSection />

        <HomeProductSection />

        <Image src={subBanner} alt="sub banner" />

        <HomeCoolProductSection />

        <HomeSubBanner2 />

        <HomeNewSection />

        <HomeBannerWarehouse />

        <HomeReview />

        <HomeBannerDT />
      </div>

      <div className={styles.mobileOnly}>
        <HomeResponsive />
      </div>
    </MainLayout>
  );
}
