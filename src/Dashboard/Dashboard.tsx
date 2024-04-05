import React from "react";
import OverallCardComponent from "../components/OverallStatsCardComponent";
import DailyCardComponent from "../components/DailyCardComponent";
import { DarkThemeToggle, Flowbite } from "flowbite-react";


const Dashboard = () => {
  return (
    <>
      <Flowbite>
        <div className="min-h-screen dark:bg-slate-900 py-2">
          <div className="flex">
            <div>
              <h1 className="text-gray-500 text-4xl px-10 pt-10 font-extrabold">
                Social Media Dashboard
              </h1>
              
            </div>
            <div className="ml-auto">
            <DarkThemeToggle/>
            </div>
          </div>  
            
              <h2 className="text-gray-400 text-2xl px-10 pt-2 pb-8 font-bold">
                Total Followers: 23,004
              </h2>

             
              
            
            
         

          
            <div className="lg:grid lg:grid-cols-4 gap-10 lg:gap-0">
              <OverallCardComponent
                cardColor={"bg-blue-500"}
                title={"@nathanf"}
                stats={"1987"}
                statType="FOLLOWERS"
                update={12}
                isIncreasing={true}
                mediaType={"facebook"}
              />
              <OverallCardComponent
                cardColor={"bg-blue-300"}
                title={"@nathanf"}
                stats={"1044"}
                statType="FOLLOWERS"
                update={99}
                isIncreasing={true}
                mediaType={"twitter"}
              />
              <OverallCardComponent
                cardColor={"bg-yellow-500"}
                title={"@realnathanf"}
                stats={"11K"}
                statType="FOLLOWERS"
                update={1099}
                isIncreasing={true}
                mediaType={"instagram"}
              />
              <OverallCardComponent
                cardColor={"bg-red-600"}
                title={"Nathan F."}
                stats={"8239"}
                statType="SUBSCRIBERS"
                update={144}
                isIncreasing={false}
                mediaType={"youtube"}
              />
            </div>
          
          {/* <DarkThemeToggle /> */}

          <div className="flex">
            <div>
              <h1 className="text-gray-500 text-4xl px-8 py-4 font-extrabold">
                Overview - Today
                
              </h1>
              
            </div>
          </div>

          <div className="lg:grid lg:grid-cols-4 gap-10 lg:gap-0">
          <DailyCardComponent
                title={"Page Views"}
                stats={"87"}
                update={3}
                isIncreasing={true}
                mediaType={"facebook"}
          />
          <DailyCardComponent
                title={"Likes"}
                stats={"52"}
                update={2}
                isIncreasing={false}
                mediaType={"facebook"}
          />
          <DailyCardComponent
                title={"Likes"}
                stats={"5462"}
                update={2257}
                isIncreasing={true}
                mediaType={"instagram"}
          />
          <DailyCardComponent
                title={"Page Views"}
                stats={"52k"}
                update={1375}
                isIncreasing={true}
                mediaType={"instagram"}
          />
          <DailyCardComponent
                title={"Retweets"}
                stats={"117"}
                update={303}
                isIncreasing={true}
                mediaType={"twitter"}
          />
          <DailyCardComponent
                title={"Likes"}
                stats={"507"}
                update={553}
                isIncreasing={true}
                mediaType={"twitter"}
          />
          <DailyCardComponent
                title={"Page Views"}
                stats={"107"}
                update={19}
                isIncreasing={false}
                mediaType={"youtube"}
          />
          <DailyCardComponent
                title={"Page Views"}
                stats={"1407"}
                update={12}
                isIncreasing={false}
                mediaType={"youtube"}
          />
          </div>
          
      
        </div>
      </Flowbite>
    </>
  );
};

export default Dashboard;
