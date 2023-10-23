import { FirstBlock } from "./firstBlock";
import { FourthBlock } from "./fourthBlock";
import { SecondBlock } from "./secondBlock";
import { ThirdBlock } from "./thirdBlock";
import { FiLogOut } from "react-icons/fi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BsDashLg } from "react-icons/bs";
import { FaRegLightbulb } from "react-icons/fa";

function App() {
  return (
    <div>
      <div
        className="w-full bg-white"
        style={{
          height: "60px",
          display: "flex",
          alignItems: "center",
          marginBottom: "20px",
          paddingLeft: "20px",
          paddingRight: "20px",
          justifyContent: "space-between",
        }}
      >
        <div style={{ flex: 1 }}>Icon</div>
        <div style={{ flex: 1 }}>Welcome back, username!</div>
        <div style={{ flex: 1 }}>
          <div
            style={{
              textAlign: "center",
              fontSize: "20px",
              color: "#6268d6",
              fontWeight: 800,
            }}
          >
            17:01{" "}
            <span style={{ fontWeight: "200", fontSize: "14px" }}>
              min left
            </span>
          </div>
          <div style={{ display: "flex" }}>
            <div style={{ width: "40%", height: "5px", background: "red" }} />
            <div
              style={{ width: "60%", height: "5px", background: "yellow" }}
            />
          </div>
        </div>
        <div
          style={{
            flex: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "right",
            gap: "20px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <span style={{ fontSize: "12px", marginRight: "10px" }}>A</span>
            <div
              style={{
                width: "5px",
                height: "5px",
                borderRadius: "50%",
                background: "black",
              }}
            />
            <div style={{ width: "50px", height: "2px", background: "blue" }} />
            <div
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                background: "blue",
              }}
            />
            <div style={{ width: "50px", height: "2px", background: "black" }} />
            <div
              style={{
                width: "5px",
                height: "5px",
                borderRadius: "50%",
                background: "black",
              }}
            />
            <span style={{ fontSize: "20px", marginLeft: "10px" }}>A</span>
          </div>
          | <FaRegLightbulb />
          | <IoMdNotificationsOutline />
          <BsDashLg />
          <FiLogOut />
          <span
            style={{
              border: "1px solid #ccc",
              borderRadius: "5px",
              padding: "5px 15px",
            }}
          >
            Signout
          </span>
        </div>
      </div>

      <div className="flex" style={{ padding: "0px 20px" }}>
        <FirstBlock />
        <SecondBlock />
        <ThirdBlock />
        <FourthBlock />
      </div>
    </div>
  );
}

export default App;
