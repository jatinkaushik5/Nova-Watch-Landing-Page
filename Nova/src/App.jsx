import React from "react";
import Header from "./Components/Header";
import { IoIosArrowForward } from "react-icons/io";
import Watch from "./assets/Watch.jpg";
import Img2 from "./assets/Img2.avif";
import PointCard from "./Components/PointCard";
import Card from "./Components/Card";
import { CiClock1 } from "react-icons/ci";
import { CiStar } from "react-icons/ci";
import { IoWatchOutline } from "react-icons/io5";
import { FaClockRotateLeft } from "react-icons/fa6";
import InfoCard from "./Components/InfoCard";
import ProgressCard from "./Components/ProgressCard";
import I1 from "./assets/I1.avif";
import I2 from "./assets/I2.avif";
import I3 from "./assets/I3.avif";
import I4 from "./assets/I4.avif";
import I5 from "./assets/I5.avif";
import ReviewCard from "./Components/ReviewCard";
import PriceCard from "./Components/PriceCard";
import QuestionCard from "./Components/QuestionCard";

const App = () => {
  return (
    <>
      <Header />
      <main className="  flex flex-col items-center pt-10 gap-4 ">
        <h1 className="text-4xl md:text-6xl lg:text-8xl flex items-center font-bold">
          The Future.
        </h1>
        <h2 className="text-4xl md:text-6xl lg:text-8xl flex items-center font-bold text-blue-500">
          Reimagined.
        </h2>
        <p className="mt-4  text-lg md:text-xl lg:text-2xl w-[85%] md:w-[70%] lg:w-[40%] text-gray-500">
          An AI-powered wearable that doesn't just sit on your wrist — it
          thinks, adapts, and evolves with you. Intelligence you can feel.
        </p>

        <div className="space-x-9 flex mt-10">
          <button className="bg-blue-500 text-white font-semibold px-4 py-2 md:px-6 md:py-3 rounded-4xl shadow-md">
            Learn More
          </button>
          <button className="  border border-gray-300 font-semibold px-4 py-2 md:px-6 md:py-3 rounded-4xl shadow-md flex items-center gap-4 ">
            Buy Now <IoIosArrowForward />
          </button>
        </div>

        <div className=" h-[50vh]  w-[80vw] md:w-[50vw] lg:w-[30vw]  relative mb-2 flex justify-center items-center mt-8">
          <div
            className=" h-[95%] w-[80%]  rounded-2xl bg-center bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${Watch})` }}
          ></div>

          <div className="absolute top-0 left-0 h-full w-full  flex justify-between flex-col">
            <div className="flex justify-end w-full lg:p-8">
              <div className="flex flex-col p-1 gap-2 bg-white rounded-2xl shadow-lg border border-gray-200 h-fit ">
                <p className="text-sm font-semibold text-gray-600">
                  AI PROCESSING
                </p>
                <p className="font-bold">4.2 TOPS</p>
              </div>
            </div>

            <div className="flex items-center justify-start ">
              <div className="flex flex-col p-1 gap-2 bg-white rounded-2xl shadow-lg border border-gray-200 h-fit ">
                <p className="text-sm font-semibold text-gray-600">
                  Battery Life
                </p>
                <p className="font-bold">72 Hours</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <article className=" bg-gray-100  flex md:flex-row flex-col  max-md:gap-9   p-8 lg:p-10">
        <div className=" h-full w-full md:w-[50%]  flex  justify-center md:justify-end items-end">
          <img src={Img2} alt="" className="h-[40vh] md:h-[60vh]" />
        </div>
        <div className=" h-full w-full md:w-[50%]  flex flex-col pt-5 pl-5 lg:pt-10 lg:pl-20 gap-4  ">
          <p className="text-blue-500  text-sm font-semibold">
            PRODUCT SHOWCASE
          </p>
          <h3 className="text-4xl md:text-6xl font-bold tracking-wide">
            Engineered <br />
            to Perfection.
          </h3>
          <p className="text-gray-500 w-[90%] md:w-[80%] max-md:text-sm lg:w-[45%]">
            Every curve, every material, every algorithm — designed in obsessive
            detail. The Nova X1 is the culmination of five years of biomechanics
            research and silicon innovation.
          </p>

          <div className="flex flex-col gap-5 mt-4">
            <PointCard
              title={"Quantum Neural Engine"}
              point={"On-device inference at 4.2 TOPS"}
            />
            <PointCard
              title={"Bio-Adaptive Shell"}
              point={"Responds to skin temperature and pH"}
            />
            <PointCard
              title={"Photonic Display"}
              point={"Always-on at 2,000 nits peak"}
            />
          </div>
        </div>
      </article>

      <article className=" min-h-[80vh] flex flex-col  justify-center gap-6 items-center mb-8">
        <p className="text-blue-500 font-semibold">CORE TECHNOLOGY</p>
        <div className=" flex flex-col items-center">
          <h2 className="text-4xl md:text-6xl font-semibold">
            Build differently
          </h2>
          <h4 className=" text-4xl md:text-6xl text-gray-500">Entirely.</h4>
        </div>

        {/* card area */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-9 mt-10">
          <Card
            Icon={CiClock1}
            title={"72-Hour Battery"}
            about={
              "Industry-leading endurance powered by our next-generation silicon cell. Never worry about charging mid-adventure"
            }
          />
          <Card
            Icon={CiStar}
            title={"Neural AI Engine"}
            about={
              "4.2 trillion operations per second, all processed on-device. Your health insights stay private, always."
            }
          />
          <Card
            Icon={IoWatchOutline}
            title={"Adaptive Display"}
            about={
              "2,000 nits peak brightness with a micro-AMOLED panel that reads perfectly in sunlight or starlight."
            }
          />
          <Card
            Icon={FaClockRotateLeft}
            title={"Health Continuum"}
            about={
              "ECG, SpO₂, blood glucose estimation, skin temperature, HRV, stress index — 24 biomarkers tracked continuously."
            }
          />
        </div>
      </article>

      <main className="min-h-[90vh] bg-slate-950 flex flex-col items-center gap-3 pt-20">
        <h1 className="text-blue-500">Performance</h1>
        <h2 className="text-white text-6xl font-semibold">
          Numbers That <br />
          move the world.{" "}
        </h2>

        <div className=" w-[70vw]  border grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-[#0D0D0D] rounded-2xl">
          <InfoCard t1={"4.2"} t2={"TOPS"} para={"NEURAL PROCESSING"} />
          <InfoCard t1={"7.2"} t2={"Hrs"} para={"BATTERY LIFE"} />
          <InfoCard t1={"24"} t2={"BIO"} para={"HEALTH MARKERS"} />
          <InfoCard t1={"<1"} t2={"ms"} para={"RESPONSE LATENCY"} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
          <ProgressCard
            title={"CPU Benchmark"}
            percentage={"94"}
            para={"vs industry avg 61"}
            color={"bg-blue-500"}
          />
          <ProgressCard
            title={"GPU Rendering"}
            percentage={"87"}
            para={"vs industry avg 54"}
            color={"bg-cyan-500"}
          />
          <ProgressCard
            title={"AI Interface"}
            percentage={"99"}
            para={"vs industry avg 42"}
            color={"bg-green-400"}
          />
        </div>
      </main>

      <article className=" flex flex-col gap-3 p-10 md:p-30 lg:p-40">
        <h2 className="text-blue-500 font-semibold max-md:text-sm">GALLERY</h2>
        <h1 className=" text-2xl md:text-4xl lg:text-6xl font-semibold">
          Every angle. <br />A masterpiece.
        </h1>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-7">
            <img
              src={I1}
              alt=""
              className=" w-full rounded-2xl shadow-lg  sm:h-[35vh] sm:w-[50vw] md:h-[30vh] md:w-[25vw]  lg:h-[40vh] lg:w-[20vw] border border-gray-300 "
            />
            <img
              src={I2}
              alt=""
              className=" w-full  rounded-2xl shadow-lg sm:h-[35vh] sm:w-[50vw] md:h-[40vh] md:w-[25vw]  lg:h-[50vh] lg:w-[20vw] border border-gray-300"
            />
            <img
              src={I3}
              alt=""
              className=" w-full rounded-2xl shadow-lg sm:h-[35vh] sm:w-[50vw] md:h-[40vh] md:w-[25vw]  lg:h-[50vh] lg:w-[20vw] border border-gray-300 "
            />
          </div>
        </div>

        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-7">
            <img
              src={I4}
              alt=""
              className=" w-full rounded-2xl shadow-lg  sm:h-[35vh] sm:w-[65vw] md:h-[30vh] md:w-[35vw]  lg:h-[40vh] lg:w-[30vw] border border-gray-300  "
            />
            <img
              src={I5}
              alt=""
              className=" w-full  rounded-2xl shadow-lg sm:h-[35vh] sm:w-[65vw] md:h-[30vh] md:w-[35vw]  lg:h-[40vh] lg:w-[30vw] border border-gray-300 "
            />
          </div>
        </div>
      </article>

      <article className="min-h-[90vh] bg-gray-200 flex flex-col justify-center items-center gap-8">
        <h1 className="text-xl text-blue-500 font-semibold">Testimonials</h1>
        <p className="text-7xl font-semibold">
          Loved by those <br />
          who push limits.
        </p>

        <div className="flex justify-center">
          <div className=" grid grid-cols-1 lg:grid-cols-3 gap-5">
            <ReviewCard
              info={"Triathlete & Coach"}
              name={"Sophia Chen"}
              review={
                "The Nova X1 has completely changed how I train. The AI pacing engine predicted my overtraining state three days before I felt it. That alone makes it irreplaceable."
              }
            />
            <ReviewCard
              info={"Cardiologist, Stanford"}
              name={"Marcus Williams"}
              review={
                "I prescribe continuous monitoring for my heart failure patients. The ECG accuracy rivals clinical equipment. It&apos;s genuinely impressive from a medical standpoint."
              }
            />
            <ReviewCard
              info={"Creative Director"}
              name={"Yuki Tanaka"}
              review={
                "I&apos;ve worn every premium wearable there is. Nothing comes close to the finish quality of the X1. It&apos;s the first one I wear to galas."
              }
            />
          </div>
        </div>
      </article>

      <article className="min-h-[90vh]  flex flex-col justify-center items-center gap-8">
        <h1 className="text-xl text-blue-500 font-semibold">Pricing</h1>
        <div>
          <h1 className="text-7xl text-center font-bold">One Device </h1>
          <h2 className="text-7xl font-bold">Three Editions.</h2>
        </div>

        <div className="flex justify-center mt-8 p-5">
          <div className="grid  grid-cols-1 lg:grid-cols-3 gap-6">
            <PriceCard
              title={"NOVA X1"}
              price={"499"}
              about={"The ess.369ential Nova experience"}
              points={[
                "Quantum Neural Engine",
                "24 Biomarker Tracking",
                "Photonic AMOLED Display",
                "72-Hour Battery",
                "Water Resistant 100m",
                "1 Year AI Health Insights",
              ]}
              order={"Order Now"}
              dark={false}
            />
             <PriceCard
              title={"Nova X1 Pro"}
              price={"699"}
              about={"Unlimited intelligence. Unmatched precision."}
              points={[
                "Everything in Nova X1",
                
          "Advanced Glucose Monitoring",
                "Pro Sleep Architecture AI",
                "Titanium Casing",
                "Sapphire Crystal Display",
                "Lifetime AI Health Insights",
              ]}
              order={"Order Pro"}
              dark={true}
            />
             <PriceCard
              title={"NOVA X1 Ultra"}
              price={"999"}
              about={"For those who demand the absolute best."}
              points={[
                "Everything in Nova X1 Pro",
                "Satellite Connectivity",
                "Cellular + eSIM Built-in",
                "Carbon Fiber / Titanium",
                "96-Hour Battery",
                "White Glove Setup",
              ]}
              order={"Order Ultra"}
              dark={false}
            />
          </div>
        </div>
      </article>

      <article className="min-h-[60vh] bg-gray-200 flex flex-col  items-center gap-1">
        <h1 className="text-xl text-blue-500 font-semibold">FAQ</h1>
        <p className="text-7xl font-semibold">
          Questions, answered.
        </p>
        
        <div className="flex justify-center mt-10">
          <div className="flex flex-col gap-3">
            <QuestionCard question={'When will Nova X1 ship'} answer={'Pre-orders ship within 2–4 weeks from your order date. We offer free expedited shipping worldwide.'}/>
            <QuestionCard question={'is the Health data stored locally or cloud'} answer={'All AI inference and health computation happens on-device via the Neural Engine. You control what, if anything, is synced to the cloud — by default, nothing leaves your device.'}/>
            <QuestionCard question={'what is the water resisting rating'} answer={'Nova X1 and Pro carry 100m water resistance. Nova X1 Ultra is rated to 200m and is certified for recreational scuba diving.'}/>            
            <QuestionCard question={'is Nova X1 compatible with both ios and android'} answer={'Yes. The Nova app is available on iOS 17+ and Android 13+. All features are available on both platforms with feature parity.'}/>            
            <QuestionCard question={'Does the health tracking require subscription'} answer={'Standard health monitoring requires no subscription. Advanced AI insights (sleep coaching, predictive health alerts, glucose trend analysis) require Nova Health+ at $9.99/month, included free for 1 year with Pro and Ultra.'}/>            
          </div>
        </div>
       
      </article>
    </>
  );
};

+7;
export default App;
