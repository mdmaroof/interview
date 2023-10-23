export const ThirdBlock = () => {
  return (
    <div className="flex-2">
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            borderRadius: "10px",
            marginBottom: "30px",
            border: "1px solid #ccc",
            background: "#fff",
            height: "300px",
          }}
        >
          <div
            className="bg-blue"
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "15px 0px",
              borderRadius: "10px 10px 0px 0px",
              color: "#fff",
            }}
          >
            2 TOTAL CLOSINGS
          </div>

          <div
            style={{
              padding: "10px 30px",
              margin: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderBottom: "2px solid lightBlue",
            }}
          >
            <div>All</div>
            <div>Sample</div>
            <div>Sample</div>
          </div>
        </div>

        <div
          style={{
            borderRadius: "10px",
            marginBottom: "30px",
            border: "1px solid #ccc",
            background: "#fff",
            height: "300px",
          }}
        >
          <div
            className="bg-blue"
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "15px 0px",
              borderRadius: "10px 10px 0px 0px",
              color: "#fff",
            }}
          >
            1 TODAY REQUISITIONS
          </div>

          <div
            style={{
              padding: "10px 30px",
              margin: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderBottom: "2px solid lightBlue",
            }}
          >
            <div>All</div>
            <div>Sample</div>
            <div>Sample</div>
          </div>
        </div>
      </div>
    </div>
  );
};
