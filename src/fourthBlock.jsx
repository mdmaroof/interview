import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

export const FourthBlock = () => {
  return (
    <div
      className="flex-1 border"
      style={{ borderRadius: "5px", background: "#fff", padding: "10px 20px" }}
    >
      <div
        style={{
          display: "flex",
          padding: "0px 10px",
          marginBottom: "10px",
          justifyContent: "space-between",
        }}
      >
        <div>Help Desk</div>
        <div>:</div>
      </div>

      <div style={{ borderBottom: "1px solid #ccc" }}>
        <input
          style={{
            width: "100%",
            borderRadius: "20px",
            border: "2px solid #eee",
            padding: "10px 15px",
            marginBottom: "20px",
          }}
          placeholder="Ask a question"
        />
      </div>

      <div style={{ marginTop: "20px" }}>Calendar</div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "end",
        }}
      >
        <div style={{ marginTop: "10px", fontSize: "24px", fontWeight: "800" }}>
          Jan, 21{" "}
          <span style={{ fontWeight: "200", fontSize: "20px" }}>Tuesday</span>
        </div>
        <div>
          <BiChevronLeft size={28} />
          <BiChevronRight size={28} />
        </div>
      </div>

      <div style={{ marginTop: "20px" }}>
        <table cellSpacing="20" style={{ width: "100%" }}>
          <tr style={{ color: "#babac9" }}>
            <td>Sun</td>
            <td>Mon</td>
            <td>Tue</td>
            <td>Wed</td>
            <td>Thu</td>
            <td>Fri</td>
            <td>Sat</td>
          </tr>

          <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
          </tr>

          <tr>
            <td>8</td>
            <td>9</td>
            <td style={{ background: "green", color: "white" }}>10</td>
            <td>11</td>
            <td style={{ background: "green", color: "white" }}>12</td>
            <td>13</td>
            <td>14</td>
          </tr>

          <tr>
            <td>15</td>
            <td>16</td>
            <td>17</td>
            <td>18</td>
            <td>19</td>
            <td style={{ background: "pink", color: "white" }}>20</td>
            <td style={{ background: "orange", color: "white" }}>21</td>
          </tr>

          <tr>
            <td>22</td>
            <td>23</td>
            <td>24</td>
            <td>25</td>
            <td>26</td>
            <td>27</td>
            <td>28</td>
          </tr>

          <tr>
            <td>29</td>
            <td>30</td>
            <td>31</td>
          </tr>
        </table>
      </div>
    </div>
  );
};
