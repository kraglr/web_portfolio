import React, { useEffect, useState } from "react";
import axios from "axios";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import GitHubIcon from "@mui/icons-material/GitHub";
const GitHubContributions = ({ username }) => {
  const [weeks, setWeeks] = useState([]);
  const [months, setMonths] = useState([]);
  const [selectedYear, setSelectedYear] = useState("2025");
  const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

  const years = ["2025", "2024", "2023", "2022"];

  const contributionLevels = {
    0: "#2a2a2a",
    1: "#0e4429",
    2: "#006d32",
    3: "#26a641",
    4: "#39d353",
  };

  const getColorLevel = (count) => {
    // console.log(contributionLevels);

    if (count === 0) return contributionLevels[0];
    if (count < 5) return contributionLevels[1];
    if (count < 10) return contributionLevels[2];
    if (count < 20) return contributionLevels[3];
    return contributionLevels[4];
  };

  const fetchContributions = async () => {
    const from = `${selectedYear}-01-01T00:00:00Z`;
    const to = `${selectedYear}-12-31T23:59:59Z`;

    const query = `
      {
        user(login: "${username}") {
          contributionsCollection(from: "${from}", to: "${to}") {
            contributionCalendar {
              weeks {
                contributionDays {
                  date
                  contributionCount
                }
              }
            }
          }
        }
      }
    `;

    try {
      const res = await axios.post(
        "https://api.github.com/graphql",
        { query },
        {
          headers: {
            Authorization: `Bearer ${GITHUB_TOKEN}`,
          },
        }
      );

      const weeksData =
        res.data.data.user.contributionsCollection.contributionCalendar.weeks;

      // Extract month labels from the first day of weeks
      const monthLabels = [];
      weeksData.forEach((week, index) => {
        const firstDay = week.contributionDays[0];
        const date = new Date(firstDay.date);
        const month = date.getMonth();
        if (
          monthLabels.length === 0 ||
          new Date(monthLabels[monthLabels.length - 1].date).getMonth() !==
            month
        ) {
          monthLabels.push({
            date: firstDay.date,
            label: date.toLocaleString("default", { month: "short" }),
            index,
          });
        }
      });

      setWeeks(weeksData);
      setMonths(monthLabels);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchContributions();
  }, [selectedYear]);

  return (
    <div className="overflow-x-auto p-4 rounded-md mx-auto  bg-[var(--bg)] text-sm ">
      <div className="flex items-center gap-4 mb-4 text-[var(--textColor)]">
        {/* showStickyNav ? "fixed top-0 left-1/2 -translate-x-1/2 translate-y-0
        opacity-100 w-full grid-cols-[1fr_3fr_1fr]" : "fixed bottom-0 left-1/2
        -translate-x-1/2 translate-y-2 opacity-95 w-[90%] grid-cols-[3fr_1fr]"
        }`} */}
        <GitHubIcon fontSize="large" />
        <div className="flex flex-col justify-center">
          <h1 className="text-2xl font-bold">Github Contributions</h1>
        </div>
      </div>

      {/* Year Selector */}

      <div className="flex space-x-3">
        <div className="flex bg-[var(--bg)] border-1 border-[var(--border)] p-2 rounded-md">
          {/* Y-axis labels (Mon, Wed, Fri) */}
          <div className="flex flex-col mt-[15px] mr-2 text-[10px] text-[var(--textColor)] h-fit">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
              (day, idx) => (
                <span
                  key={day}
                  className={`h-[11px] mb-[3px] ${
                    day === "Mon" || day === "Wed" || day === "Fri"
                      ? "visible"
                      : "invisible"
                  }`}
                >
                  {day}
                </span>
              )
            )}
          </div>

          {/* Graph */}
          <div>
            {/* Month labels */}
            <div className="flex ml-[14px]">
              {weeks.map((week, weekIdx) => {
                const monthLabel = months.find(
                  (month) => month.index === weekIdx
                );
                return (
                  <div
                    key={`label-${weekIdx}`}
                    className="w-[13px] text-[10px] text-[var(--textColor)] text-center"
                  >
                    {monthLabel?.label || ""}
                  </div>
                );
              })}
            </div>

            {/* Grid */}
            <div className="flex gap-[2px] mt-1">
              {weeks.map((week, weekIdx) => (
                <div key={weekIdx} className="flex flex-col gap-[3px]">
                  {week.contributionDays.map((day) => (
                    <div
                      key={day.date}
                      data-tooltip-id="tooltip"
                      data-tooltip-content={`${day.date}: ${day.contributionCount} contributions`}
                      style={{
                        backgroundColor: getColorLevel(day.contributionCount),
                      }}
                      className="w-[11px] h-[11px] rounded-[2px]"
                    ></div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 flex-grow-1">
          {years.map((year) => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`px-3 py-1 w-full rounded-md text-sm ${
                selectedYear === year
                  ? "bg-blue-600 text-white"
                  : "bg-gray-800 hover:bg-gray-700"
              }`}
            >
              {year}
            </button>
          ))}
        </div>
      </div>
      {/* Legend */}
      <div className="flex items-center gap-1 mt-4 text-xs text-gray-400">
        <span>Less</span>
        {Object.values(contributionLevels).map((color, i) => (
          <div
            key={i}
            className="w-[11px] h-[11px] rounded-[2px]"
            style={{ backgroundColor: color }}
          ></div>
        ))}
        <span>More</span>
      </div>
      {/* Tooltip element */}
      <Tooltip id="tooltip" place="top" effect="solid" className="z-50" />
    </div>
  );
};

export default GitHubContributions;
