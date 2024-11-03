
// import { useRouter} from "next/navigation"
import Toyyota from "./toyyota-detail/page"
import Hero from "./component/hero"
import FeatureCar from "./component/featurecar"
import Form from "./form/page"
import Thankyou from "./thank-you/page"



export const metadata = {
  title: "Home"
}

export default function Home() {
  // const router = useRouter();
  return (
    <div>
      <Hero/>
       <FeatureCar/>
       <Toyyota/>
       <Form/>
       <Thankyou/>
       {/* <button onClick={()=>router.push("/form")}>Make payment</button> */}
    </div>

        
  )
}