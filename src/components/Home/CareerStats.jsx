import DataExplorationIcon from "@mui/icons-material/DataExploration";
import HistoryIcon from "@mui/icons-material/History";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import { FaStackOverflow } from "react-icons/fa6";
const CareerStats = () => {
  return (
    <div className="flex flex-col bg-[var(--bg)]  mx-auto  px-6 py-6 space-y-8 text-[var(--textColor)] h-full">
      <div className="flex items-center gap-4">
        <DataExplorationIcon fontSize="large" />
        <div className="flex flex-col justify-center">
          <h1 className="text-2xl font-bold">Career Stats</h1>
          <span className="text-sm text-gray-400">
            {new Date().toLocaleString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <div className="col-span-1 bg-[var(--bgSoft)] flex flex-col border-1 border-[var(--border)] px-6 py-3 space-x-4 space-y-4  items-start rounded-md">
          <div className="flex items-center justify-start w-full space-x-4 align-middle">
            <span className="text-5xl">
              <HistoryIcon fontSize="inherit" />
            </span>
            <div className="flex items-center justify-center space-x-4 align-middle">
              <h1 className="text-4xl font-bold">3</h1>
              <span>Years</span>
            </div>
          </div>
          <h3>Experience</h3>
        </div>
        <div className="col-span-1 bg-[var(--bgSoft)] flex flex-col border-1 border-[var(--border)] px-6 py-3 space-x-4 space-y-4  items-start rounded-md">
          <div className="flex items-center justify-start w-full space-x-4 align-middle">
            <span className="text-5xl">
              <AccountTreeIcon fontSize="inherit" />
            </span>
            <div className="flex items-center justify-center space-x-4 align-middle">
              <h1 className="text-4xl font-bold">5</h1>
              {/* <span>Years</span> */}
            </div>
          </div>
          <h3>Projects</h3>
        </div>
        <div className="col-span-1 bg-[var(--bgSoft)] flex flex-col border-1 border-[var(--border)] px-6 py-3 space-x-4 space-y-4  items-start rounded-md">
          <div className="flex items-center justify-start w-full space-x-4 align-middle">
            <span className="text-5xl">
              <FaStackOverflow fontSize="inherit" />
            </span>
            <div className="flex items-center justify-center space-x-4 align-middle">
              <h1 className="text-4xl font-bold">13</h1>
              {/* <span>Years</span> */}
            </div>
          </div>
          <h3>Tech Stacks</h3>
        </div>
      </div>
    </div>
  );
};

export default CareerStats;
