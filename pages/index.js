import Header from "../components/Header/Header"
import LatestCampaigns from "../components/LatestCampaigns/LatestCampaigns"
import ImpactFeature from "../components/Impact/ImpactFeature"
import ImpactCollab from "../components/Impact/ImpactCollab"
import Showcase from '../components/Showcase/Showcase'
import Counter from "../components/Counter/Counter"
import NftBlock from '../components/Nft_Block/NftBlock'
import Folder from '../components/Folder/Folder'
import Footer from '../components/Footer/Footer'

function index() {
  return (
    <>
      <Header />
      {/* <LatestCampaigns /> */}
      <ImpactFeature />
      <Showcase />
      <ImpactCollab />
      <Counter />
      <NftBlock />
      <Folder />
      <Footer />
    </>
  )
}

export default index