import Header from "../components/Hero/Hero"
import ImpactFeature from "../components/Impact/ImpactFeature"
import ImpactCollab from "../components/Impact/ImpactCollab"
import Showcase from '../components/Showcase/Showcase'
import Counter from "../components/Counter/Counter"
import NftBlock from '../components/Nft_Block/NftBlock'
import Folder from '../components/Folder/Folder'
import Footer from '../components/Footer/Footer'
import CampaignSlider from "../components/LatestCampaigns/CampaignSlider"
import NftGalleryCards from "../components/NftGalleryCards/NftGalleryCards"
import Table from '../components/Table/Table'

function index() {
  return (
    <>
      <Header />
      <CampaignSlider />
      <ImpactFeature />
      <NftGalleryCards />
      <ImpactCollab />
      <Showcase />
      <Counter />
      <NftBlock />
      <Folder />
      <Footer />
    </>
  )
}

export default index