import React, { useState, useEffect } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { FaCodeFork } from "react-icons/fa6";

const languageColors = {
  JavaScript: "#f1e05a",
  HTML: "#e34c26",
  CSS: "#563d7c",
  PHP: "#4F5D95",
  Python: "#3572A5",
  Java: "#b07219",
  TypeScript: "#2b7489",
  Shell: "#89e051",
  Vue: "#41b883",
  C: "#555555",
  "C++": "#f34b7d",
};

const getLanguageColor = (language) => {
  return languageColors[language] || "#cccccc"; // Default color
};

const GitHubRepos = ({ username }) => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setLoading(true);
        // Fetch top 5 most recently updated repos
        const response = await fetch(
          `https://api.github.com/users/${username}/repos?sort=updated&direction=desc&per_page=5`
        );
        if (!response.ok) {
          throw new Error(
            `Failed to fetch repositories: ${response.statusText}`
          );
        }
        const data = await response.json();
        console.log(data);

        setRepos(data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setRepos([]);
      } finally {
        setLoading(false);
      }
    };

    if (username) {
      fetchRepos();
    }
  }, [username]);

  return (
    <div className="p-4">
      <h3 className="flex items-center mb-4 text-lg font-semibold gap-x-2">
        <GitHubIcon />
        <span>Latest Repositories</span>
      </h3>
      {loading && (
        <div className="flex items-center justify-center h-48">
          <div className="w-8 h-8 border-4 border-[var(--border)] rounded-full border-t-transparent animate-spin"></div>
        </div>
      )}
      {error && <p className="text-sm text-red-500">Error: {error}</p>}
      {!loading && !error && repos.length > 0 && (
        <ul className="space-y-4">
          {repos.map((repo) => (
            <li
              key={repo.id}
              className="p-3 transition-all duration-300 border rounded-md border-[var(--border)] hover:bg-[var(--bgSofter)]"
            >
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col justify-between h-full"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-blue-400 hover:underline">
                      {repo.name}
                    </span>
                    <LaunchIcon
                      fontSize="small"
                      className="text-[var(--textColorSoft)]"
                    />
                  </div>
                  <p className="mt-2 text-xs text-[var(--textColorSoft)]">
                    {repo.description || "No description provided."}
                  </p>
                </div>
                <div className="flex items-center mt-3 text-xs text-[var(--textColorSoft)] gap-x-4">
                  {repo.language && (
                    <div className="flex items-center gap-x-1">
                      <span
                        className="w-3 h-3 rounded-full"
                        style={{
                          backgroundColor: getLanguageColor(repo.language),
                        }}
                      ></span>
                      <span>{repo.language}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-x-1">
                    <StarBorderIcon style={{ fontSize: "1rem" }} />
                    <span>{repo.stargazers_count}</span>
                  </div>
                  <div className="flex items-center gap-x-1">
                    <FaCodeFork />
                    <span>{repo.forks_count}</span>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default GitHubRepos;
