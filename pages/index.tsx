import { BannerTopSlide } from '@@/components/Home/BannnerTop/BannerTopSlide'
import { ExclusiveProducts } from '@@/components/Home/ExclusiveProducts'
import { FlashSale } from '@@/components/Home/FlashSale'
import { MainLayout } from '@@/layouts/MainLayout'
import { ReactElement } from 'react'
import { NextPageWithLayout } from './_app'
import { BannerContent } from '@@/components/Home/BannerContent'
import { TopVideoCourse } from '@@/components/Home/TopVideoCourse/TopVideoCourse'
import { PopularSearch } from '@@/components/Home/PopularSearch/PopularSearch'
import { OtherProduct } from '@@/components/Home/OtherProducts/OtherProduct'
import { LeadingProvider } from '@@/components/Home/LeadingProvider'
import { SearchTrend } from '@@/components/Home/SearchTrend'
import { News } from '@@/components/Home/News'
import { TopSellingProduct } from '@@/components/Home/TopSellingProduct'
import { CatergoriesBanner } from '@@/components/Home/CatergoriesBanner'
import { Help } from '@@/components/Home/Help'

const Home: NextPageWithLayout = (): JSX.Element => {
  return (
    <div>
      <BannerTopSlide />
      <BannerContent />
      <LeadingProvider />
      <FlashSale />
      <BannerContent />
      <ExclusiveProducts />
      <TopVideoCourse />
      <SearchTrend />
      <News />
      <BannerContent />
      <TopSellingProduct />
      <PopularSearch />
      <BannerContent />
      <OtherProduct />
      <CatergoriesBanner />
      <Help />
    </div>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>
}
export default Home
