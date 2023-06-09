import { Link } from "react-router-dom";
import backIcon from "../../assets/Back.png";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);
const data = {
  labels: ["Recieved", "Reported", "In transit"],
  datasets: [
    {
      label: "Status",
      data: [1, 2, 3],
      backgroundColor: [
        "rgba(30, 30, 30, 1)",
        "rgba(228, 67, 32, 1)",
        "rgba(217, 217, 217, 1)",
      ],
      borderColor: ["rgba(217, 217, 217, 1)"],
      borderWidth: 3,
    },
  ],
};
const options = {
  plugins: {
    legend: {
      position: "right",
      labels: {
        padding: 60, // Set the desired margin value
      },
    },
  },
};
export default function Analytics() {
  // const [displayConfirmGoBack, setDisplayConfirmGoBack] = useState(false);
  // const showConfirmGoBack = () => setDisplayConfirmGoBack(true);
  // const hideConfirmGoBack = () => setDisplayConfirmGoBack(false);

  return (
    <div className="relative flex h-1/2 min-h-screen flex-col bg-secondary-black p-5 pl-10 pr-10">
      <nav className="flex items-center text-4xl font-normal leading-[60px] text-secondary-white">
        <Link
          to="/"
          className="ml-1 flex items-center"
          // onClick={showConfirmGoBack}
        >
          <img className="mr-1" src={backIcon} alt="" />
          Back
        </Link>
      </nav>
      <main className="mt-8 flex flex-col">
        <div className="mt-4 flex flex-col">
          <h1 className="text-6xl font-normal leading-[96px] text-secondary-white">
            Packages analytics
          </h1>
          <div className=" m-auto w-1/5">
            <Pie data={data} options={options} />
          </div>
          <div className="customScroll h-[350px] overflow-y-auto text-4xl font-normal leading-[60px] text-secondary-white">
            <Link to="/track-package/packages-information">
              <div className="flex items-center border-b p-4">
                <div className="">
                  <p>Package name </p>
                </div>
                <div className="mx-auto">
                  <p className="status-red">Reported</p>
                </div>
              </div>
            </Link>
            <Link to="/track-package/packages-information">
              <div className="flex items-center border-b p-4">
                <div className="">
                  <p>Package name </p>
                </div>
                <div className="mx-auto">
                  <p className="status-black">Received</p>
                </div>
              </div>
            </Link>
            <Link to="/track-package/packages-information">
              <div className="flex items-center border-b p-4">
                <div className="">
                  <p>Package name </p>
                </div>
                <div className="mx-auto">
                  <p className="status-white">In transit</p>
                </div>
              </div>
            </Link>
            <Link to="/track-package/packages-information">
              <div className="flex items-center border-b p-4">
                <div className="">
                  <p>Package name </p>
                </div>
                <div className="mx-auto">
                  <p className="status-red">Reported</p>
                </div>
              </div>
            </Link>
            <Link to="/track-package/packages-information">
              <div className="flex items-center border-b p-4">
                <div className="">
                  <p>Package name </p>
                </div>
                <div className="mx-auto">
                  <p className="status-black">Received</p>
                </div>
              </div>
            </Link>
            <Link to="/track-package/packages-information">
              <div className="flex items-center border-b p-4">
                <div className="">
                  <p>Package name </p>
                </div>
                <div className="mx-auto">
                  <p className="status-white">In transit</p>
                </div>
              </div>
            </Link>
            <Link to="/track-package/packages-information">
              <div className="flex items-center border-b p-4">
                <div className="">
                  <p>Package name </p>
                </div>
                <div className="mx-auto">
                  <p className="status-red">Reported</p>
                </div>
              </div>
            </Link>
            <Link to="/track-package/packages-information">
              <div className="flex items-center border-b p-4">
                <div className="">
                  <p>Package name </p>
                </div>
                <div className="mx-auto">
                  <p className="status-black">Received</p>
                </div>
              </div>
            </Link>
            <Link to="/track-package/packages-information">
              <div className="flex items-center border-b p-4">
                <div className="">
                  <p>Package name </p>
                </div>
                <div className="mx-auto">
                  <p className="status-white">In transit</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </main>
      {/* {displayConfirmGoBack && (
        <ModalConfirm
          message="Are you sure you want to go back?"
          linkToConfirm="/"
          hide={hideConfirmGoBack}
        />
      )} */}
    </div>
  );
}
