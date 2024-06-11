import Chart from "../../components/chart/Chart"
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo"
import "./home.css"
import { userData } from "../../tempData"
import Widgets1 from "../../components/widgets1/Widgets1"
import Widgets2 from "../../components/widgets2/Widgets2"


export default function Home() {
  return (
    <div className="home">
        <FeaturedInfo/>
        <Chart data={userData} title="Sales Analytics" dataKey="Active User"/>
        <div className="homeWidgets">
          <Widgets1/>
          <Widgets2/>
        </div>
    </div>
  )
}
