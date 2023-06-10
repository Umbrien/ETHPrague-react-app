import { Link } from "react-router-dom";
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
      position: window.screen.width <= 321 ? "bottom" : "right",
      labels: {
        padding: 20, // Set the desired margin value
      },
    },
  },
};
export default function Analytics() {
  return (
    <div className="relative flex h-1/2 min-h-screen flex-col bg-secondary-black p-5 pl-10 pr-10 max-sm:pl-0 max-sm:pr-0">
      <nav className="flex items-center text-4xl font-normal leading-[60px] text-secondary-white">
        <Link to="/" className="ml-1 flex items-center">
          <img className="mr-1" src="/back.png" alt="" />
          Back
        </Link>
      </nav>
      <main className="mt-8 flex flex-col">
        <div className="mt-4 flex flex-col">
          <h1 className="text-6xl font-normal leading-[96px] text-secondary-white max-md:text-center max-md:text-4xl">
            Packages analytics
          </h1>
          <div className=" m-auto w-auto max-xl:mt-4">
            <Pie data={data} options={options} />
          </div>
          <div className="customScroll h-[350px] overflow-y-auto text-4xl font-normal leading-[60px] text-secondary-white max-md:h-[400px]">
            <Link to="/track-package/packages-information">
              <div className="flex items-center border-b p-4 max-md:flex-col">
                <div className="">
                  <p>Package name </p>
                </div>
                <div className="mx-auto">
                  <p className="status-red">Reported</p>
                </div>
              </div>
            </Link>
            <Link to="/track-package/packages-information">
              <div className="flex items-center border-b p-4 max-md:flex-col">
                <div className="">
                  <p>Package name </p>
                </div>
                <div className="mx-auto">
                  <p className="status-black">Received</p>
                </div>
              </div>
            </Link>
            <Link to="/track-package/packages-information">
              <div className="flex items-center border-b p-4 max-md:flex-col">
                <div className="">
                  <p>Package name </p>
                </div>
                <div className="mx-auto">
                  <p className="status-white">In transit</p>
                </div>
              </div>
            </Link>
            <Link to="/track-package/packages-information">
              <div className="flex items-center border-b p-4 max-md:flex-col">
                <div className="">
                  <p>Package name </p>
                </div>
                <div className="mx-auto">
                  <p className="status-red">Reported</p>
                </div>
              </div>
            </Link>
            <Link to="/track-package/packages-information">
              <div className="flex items-center border-b p-4 max-md:flex-col">
                <div className="">
                  <p>Package name </p>
                </div>
                <div className="mx-auto">
                  <p className="status-black">Received</p>
                </div>
              </div>
            </Link>
            <Link to="/track-package/packages-information">
              <div className="flex items-center border-b p-4 max-md:flex-col">
                <div className="">
                  <p>Package name </p>
                </div>
                <div className="mx-auto">
                  <p className="status-white">In transit</p>
                </div>
              </div>
            </Link>
            <Link to="/track-package/packages-information">
              <div className="flex items-center border-b p-4 max-md:flex-col">
                <div className="">
                  <p>Package name </p>
                </div>
                <div className="mx-auto">
                  <p className="status-red">Reported</p>
                </div>
              </div>
            </Link>
            <Link to="/track-package/packages-information">
              <div className="flex items-center border-b p-4 max-md:flex-col">
                <div className="">
                  <p>Package name </p>
                </div>
                <div className="mx-auto">
                  <p className="status-black">Received</p>
                </div>
              </div>
            </Link>
            <Link to="/track-package/packages-information">
              <div className="flex items-center border-b p-4 max-md:flex-col">
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
    </div>
  );
}
