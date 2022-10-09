import logo from "./logo.svg";
import "./App.css";
import Card from "./Card";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
function App() {
 var carditems = [
   {
    name:"FREE",
    price:0,
    features:[
      {
        name:"Single User",
        enable:true,
      },
      {
        name:"5GB Storage",
        enable:true,
      },
      {
        name:"Unlimited Public Projects",
        enable:true,
      },
      {
        name:"Community Access",
        enable:true,
      },
      {
        mute:"Unlimited Private Projects",
        enable:false,
      },
      {
        mute:"Dedicated Phone Support",
        enable:false,
      },
      {
        mute:"Free Subdomain",
        enable:false,
      },
      {
        mute:"Monthly Status Reports",
        enable:false,
      },
    ]
   },
   {
    name:"PLUS",
    price:9,
    features:[
      {
        name:"5 Users",
        enable:true,
      },
      {
        name:"50GB Storage",
        enable:true,
      },
      {
        name:"Unlimited Public Projects",
        enable:true,
      },
      {
        name:"Community Access",
        enable:true,
      },
      {
        name:"Unlimited Private Projects",
        enable:true,
        
      },
      {
        name:"Dedicated Phone Support",
        enable:true,
      },
      {
        name:"Free Subdomain",
        enable:true,

      },
      {
        mute:"Monthly Status Reports",
        enable:false,
      },
    ]
   },
   {
    name:"PRO",
    price:49,
    features:[
      {
        name:"Single User",
        enable:true,
      },
      {
        name:"5GB Storage",
        enable:true,
      },
      {
        name:"Unlimited Public Projects",
        enable:true,
      },
      {
        name:"Community Access",
        enable:true,
      },
      {
        name:"Unlimited Private Projects",
        enable:true,
      },
      {
        name:"Dedicated Phone Support",
        enable:true,
      },
      {
        name:"Free Subdomain",
        enable:true,
      },
      {
        name:"Monthly Status Reports",
        enable:true,
      },
    ]
   }

 ]
  return (
    <section className="pricing py-5">
      <div className="container">
        <div className="row">
         {
          carditems.map((v) =>{
            return  <Card plan={v}></Card>
          })

         }
         
         
        </div>
      </div>
    </section>
  );
}

export default App;
