import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import BottomHomeSection from "./BottomHomeSection";
import CommonHComponent from "./CommonHComponent";
import "./Home.css";

const Home = () => {
  const big = [
    "https://www.kindmeal.my/photos/deal/7/701-4904-m.jpg",
    "https://www.kindmeal.my/photos/deal/7/708-4923-m.jpg",
    "https://www.kindmeal.my/photos/deal/6/684-4446-m.jpg",
    "https://www.kindmeal.my/photos/deal/6/644-3810-m.jpg",
    "https://www.kindmeal.my/photos/deal/6/627-3532-m.jpg",
    "https://www.kindmeal.my/photos/deal/6/669-4206-m.jpg",
  ];

  const imagebottom = [
    "https://www.kindmeal.my/photos/deal/7/715-5155-m.jpg",
    "https://www.kindmeal.my/photos/deal/6/628-4921-m.jpg",
    "https://www.kindmeal.my/photos/deal/7/707-4819-m.jpg",
    "https://www.kindmeal.my/photos/deal/2/271-519-m.jpg",
    "https://www.kindmeal.my/photos/deal/6/644-3810-m.jpg",
    "https://www.kindmeal.my/photos/deal/4/403-1390-m.jpg",
    "https://www.kindmeal.my/photos/deal/6/610-3386-m.jpg",
  ];

  const img1 = [
    {
      img: "https://scontent-xsp1-2.xx.fbcdn.net/v/t15.5256-10/298275514_1793992247612870_4102622818283493322_n.jpg?stp=dst-jpg_s720x720&_nc_cat=107&ccb=1-7&_nc_sid=ad6a45&_nc_ohc=_9L2M1Yf05EAX_rJxTb&_nc_ht=scontent-xsp1-2.xx&edm=ALdPpPkEAAAA&oh=00_AT-Qe7rGxyxKn0-wEEpb3Ss8zGPo7bkCAI9JziXQns3frw&oe=630B7A82",
      subHead: "The Top 7 Smartest Animals",
    },
    {
      img: "https://scontent-xsp1-2.xx.fbcdn.net/v/t15.5256-10/21707660_1430313403713822_4780572855584686080_n.jpg?stp=dst-jpg_p720x720&_nc_cat=111&ccb=1-7&_nc_sid=ad6a45&_nc_ohc=RcBoqAsP5BcAX8IlQCB&_nc_ht=scontent-xsp1-2.xx&edm=ALdPpPkEAAAA&oh=00_AT_LOJ7X7YEtClZI7i3X-WESp5ibUVI3xFdJhQZU6V8Whw&oe=6309CC86",
      subHead: "Creamy Hasselback Potatoes",
    },
    {
      img: "https://scontent-xsp1-2.xx.fbcdn.net/v/t15.5256-10/297490495_5300872103341148_4812180245387187070_n.jpg?stp=dst-jpg_p720x720&_nc_cat=110&ccb=1-7&_nc_sid=ad6a45&_nc_ohc=dJMnZ-0XOzEAX-3m0EE&_nc_ht=scontent-xsp1-2.xx&edm=ALdPpPkEAAAA&oh=00_AT-ZM77KOgdgqqjU3K_BDm_RmS29ZmEuW15LqBw4AFzuZQ&oe=630A5A29",
      subHead: "Busy Beaver Delivers Lettuce To Zoo Friends",
    },
    {
      img: "https://scontent-xsp1-2.xx.fbcdn.net/v/t15.5256-10/297116651_384596210475584_5376654219115704349_n.jpg?stp=dst-jpg_s720x720&_nc_cat=107&ccb=1-7&_nc_sid=ad6a45&_nc_ohc=ggyHZY5ZmbAAX9m9siT&_nc_ht=scontent-xsp1-2.xx&edm=ALdPpPkEAAAA&oh=00_AT99xiTg8YzeBqf46RsQHC0NA2_1kassyQprwpAGzzIIjw&oe=630B021C",
      subHead: "Teaching My Pet Pig To Talk 🐷",
    },
    {
      img: "https://scontent-xsp1-2.xx.fbcdn.net/v/t15.5256-10/297287041_759478638588669_7244009508553843157_n.jpg?stp=dst-jpg_p720x720&_nc_cat=109&ccb=1-7&_nc_sid=ad6a45&_nc_ohc=RDmX5SwUhPkAX-8LWo3&_nc_ht=scontent-xsp1-2.xx&edm=ALdPpPkEAAAA&oh=00_AT8_kprBO8Hi6gN8WsrjERfTdpocasGbKCJdDUzBYPrf1Q&oe=630A3112",
      subHead: "Hatching Animals 🐣",
    },
  ];

  const desc1 = [
    { heading: "Latest News & Videos", desc: "Save Lives with Your Blog" },
  ];

  const img2 = [
    {
      img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      subHead: "Destin Vegetarian Restaurant VyVian",
    },
    {
      img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudCUyMGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      subHead: "Simple Is the Best jolenesaw",
    },
    {
      img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      subHead: "Restaurant Hao Kai Xin 街頭燒蟹炒啦啦 karenkhong",
    },
    {
      img: "https://images.unsplash.com/photo-1513442542250-854d436a73f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHJlc3RhdXJhbnQlMjBmb29kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      subHead: "Your Healthier Options munhaoyoong",
    },
    {
      img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      subHead: "Amelio Desa Parkcity FatJedi",
    },
  ];
  const desc2 = [{ heading: "Yummylicious Moments", desc: "Secret Recipes " }];
  const img3 = [
    {
      img: "https://www.kindmeal.my/photos/item/0/603-9052-s.jpg",
      subHead: "Bak Kut Teh",
    },
    {
      img: "https://www.kindmeal.my/photos/item/0/171-1790-s.jpg",
      subHead: "Mango Delight",
    },
    {
      img: "https://www.kindmeal.my/photos/item/0/404-4635-s.jpg",
      subHead: "The Smoky Spicy Mushroom Olio Spaghetti",
    },
    {
      img: "https://www.kindmeal.my/photos/item/0/116-1057-s.jpg",
      subHead: "Spinach & Cheese Lasagna",
    },
    {
      img: "https://www.kindmeal.my/photos/item/0/303-3241-s.jpg",
      subHead: "https://www.kindmeal.my/photos/item/0/303-3241-s.jpg",
    },
  ];
  const desc3 = [
    { heading: "Discover Restaurants", desc: "Vegetarian Directory " },
  ];
  const img4 = [
    {
      img: "https://www.kindmeal.my/photos/member/41/41025-m.jpg",
      subHead: "StevenChong1",
    },
    {
      img: "https://www.kindmeal.my/photos/member/11/11296-m.jpg",
      subHead: "JacquelineHeng",
    },
    {
      img: "https://www.kindmeal.my/photos/member/18/18245-m.jpg",
      subHead: "WeiYiCheong",
    },
    {
      img: "https://www.kindmeal.my/photos/member/41/41028-m.jpg",
      subHead: "MichelleTan",
    },
    {
      img: "https://www.kindmeal.my/photos/member/39/39295-m.jpg",
      subHead: "Latest Buzz ",
    },
  ];
  const desc4 = [{ heading: "Amazing Superheroes", desc: "Latest Buzz " }];

  const delay = 3000;
  const [stateKindmeal, setStateKindmeal] = useState(0);
  const timeoutRefkindmeal = useRef(null);

  function resetTimeoutkindmeal() {
    if (timeoutRefkindmeal.current) {
      clearTimeout(timeoutRefkindmeal.current);
    }
  }

  useEffect(() => {
    resetTimeoutkindmeal();
    timeoutRefkindmeal.current = setTimeout(
      () =>
        setStateKindmeal((prevIndex) =>
          prevIndex === big.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );
    return () => {
      resetTimeoutkindmeal();
    };
  }, [stateKindmeal, big.length]);

  return (
    <>
      <div id="project1">
        <div id="specp1" className="slideshow">
          <div
            className="slideshowSlider"
            style={{ transform: `translate3d(${-stateKindmeal * 100}%, 0, 0)` }}
          >
            {big.map((item, i) => (
              <>
                <img className="slide" src={item} alt="slide" />
              </>
            ))}
          </div>
        </div>
      </div>
      <div
        style={{
          gap: "1rem",
          display: "flex",
          width: "70%",
          marginLeft: "230px",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          padding: "1rem",
          backgroundColor: "faf9f8",
        }}
      >
        {imagebottom.map((item, i) => (
          <div style={{ height: "70%", width: "100%" }}>
            <img key={i} src={item} alt="logo" />
          </div>
        ))}
      </div>
      <CommonHComponent img={img1} desc={desc1} />
      <CommonHComponent img={img2} desc={desc2} />
      <CommonHComponent img={img3} desc={desc3} />
      <CommonHComponent img={img4} desc={desc4} />
      <div>
        <BottomHomeSection />
      </div>
    </>
  );
};

export default Home;
