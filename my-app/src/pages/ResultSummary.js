import React, { useEffect, useState } from "react";
import { checkCompliance } from "../utils/api";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import "../styles/Result.css";

const ResultSummary = () => {
  const [loading, setLoading] = useState(true);
  const [groups, setGroups] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await checkCompliance(
          "https://skynettechnologies.com",
          1
        );

        if (data && data.group_data) {
          setGroups(data.group_data);
        } else {
          console.log("Invalid API response format:", data);
        }
      } catch (error) {
        console.error("Error fetching compliance data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleDownload = () => {
    const resultSection = document.querySelector(".result-wrapper");

    html2canvas(resultSection).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("accessibility-report.pdf");
    });
  };

  return (
    <div className="result-wrapper">
      <header className="result-header">
        {/* logo here */}
      </header>

      <h3 className="category-title">
        Click on the categories below to view detailed results
      </h3>

      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="category-grid">
          {Object.entries(groups).map(([groupName, items]) => {
            const group = items[0];

            return (
              <div key={groupName} className="category-card">
                <h4>{group.group_name}</h4>

                <div className="category-content">
                  <span className="passed">
                    {group.total_success} Passed
                  </span>
                  <span className="failed">
                    {group.total_error} Failed
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      )}

      <footer className="result-footer">
        <button onClick={handleDownload}>
          Download Report
        </button>
      </footer>
    </div>
  );
};

export default ResultSummary;
