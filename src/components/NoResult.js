import React from "react";
import { useTranslation } from "react-i18next";

const NoResult = () => {
  const { t } = useTranslation();
  return (
    <div className="noResult">
      <svg
        width={200}
        height={200}
        viewBox="0 0 116 116"
        className="no-result-view-icon"
        color="#484848"
      >
        <g transform="translate(0 -2)" fill="none" fillRule="evenodd">
          <circle fill="#FF6000" opacity="0.08" cx={54} cy={64} r={54} />
          <path
            d="M49.78 110.844C26.346 106.328 7.936 86.57 6.195 61.673 4.118 31.973 26.552 6.209 56.303 4.129c29.75-2.08 55.552 20.31 57.629 50.01a53.596 53.596 0 01-7.415 31.251"
            stroke="#FF6000"
            strokeWidth={3}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M71.807 80.368c-3.727 2.436-8.702 5.104-14.891 5.104C44.26 85.472 34 75.292 34 62.736 34 50.179 44.26 40 56.916 40s22.389 10.19 22.916 22.736c.295 7.007-3.115 11.829-5.485 15.408l-2.54 2.224zM56.916 43.19c-10.88 0-19.7 8.75-19.7 19.545 0 10.795 8.82 19.545 19.7 19.545 10.88 0 19.7-8.75 19.7-19.545 0-10.795-8.82-19.545-19.7-19.545z"
            fill="#FFF"
          />
          <path
            d="M89 88.582l-9.98-9.98C74.384 81.656 68.197 85 60.5 85 44.76 85 32 72.24 32 56.5S44.76 28 60.5 28 88.344 40.774 89 56.5c.366 8.783-3.874 14.828-6.822 19.315l9.98 9.98c2.266 2.266-.892 5.053-3.158 2.787zM60.5 32C46.968 32 36 42.968 36 56.5S46.968 81 60.5 81 85 70.032 85 56.5 74.032 32 60.5 32z"
            fill="#FF6000"
          />
          <path
            d="M60.5 61a3.5 3.5 0 013.5 3.5c0 1.933-1.567 1.5-3.5 1.5s-3.5.433-3.5-1.5a3.5 3.5 0 013.5-3.5zM67.358 53l1.357 1.358a.96.96 0 01-1.357 1.357L66 54.358l-1.358 1.357a.96.96 0 01-1.357-1.357L64.642 53l-1.357-1.358a.96.96 0 011.357-1.357L66 51.642l1.358-1.357a.96.96 0 011.357 1.357L67.358 53zm-9.643 2.715a.959.959 0 01-1.357 0L55 54.358l-1.358 1.357a.96.96 0 01-1.357-1.357L53.642 53l-1.357-1.358a.96.96 0 011.357-1.357L55 51.642l1.358-1.357a.96.96 0 011.357 1.357L56.358 53l1.357 1.358a.959.959 0 010 1.357z"
            fill="#FF6000"
          />
        </g>
      </svg>

      <p>{t("global.noResult")}</p>
    </div>
  );
};

export default NoResult;