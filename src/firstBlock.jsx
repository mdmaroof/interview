export const FirstBlock = () => {
  return (
    <div
      className="flex-1 "
      style={{
        display: "flex",
        flexDirection: "column",
        height: "calc(100vh - 100px)",
      }}
    >
      <div style={{ flex: 1 }}>
        <div
          className="bg-blue"
          style={{
            padding: "10px 10px",
            borderRadius: "5px",
            color: "#fff",
          }}
        >
          Home
        </div>
        <div style={{ padding: "10px 10px" }}>Integration</div>
        <div style={{ padding: "10px 10px" }}>Tasks</div>
        <div style={{ padding: "10px 10px" }}>Generate Report</div>
      </div>

      <div style={{ height: "100px" }}>
        <div style={{ padding: "10px 10px" }}>Setting</div>
        <div style={{ padding: "10px 10px" }}>Help</div>
      </div>
    </div>
  );
};
