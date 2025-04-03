import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
// יש להוסיף את התמונה לפרויקט
import sofaImage from "./assets/images/sofa.png"; // התאם את הנתיב לפי המיקום בפרויקט שלך

function App() {
  const primaryColor = "#BE2A37"; // הצבע האדום מהלוגו
  const bgColor = "#f1efeb"; // צבע רקע בז'/אפור בהיר
  const whiteColor = "#FFFFFF"; // לבן
  const darkGray = "#333333"; // אפור כהה לטקסטים

  return (
    <div
      className="vh-100 d-flex flex-column justify-content-center align-items-center text-center p-3 position-relative overflow-hidden"
      style={{
        background: bgColor,
        direction: "rtl",
      }}
    >
      {/* תמונת הספה בתחתית */}
      <img src={sofaImage} alt="רהיט" className="sofa-image" />

      <div className="container position-relative z-1">
        <h1 className="display-1 main-title" style={{ color: darkGray }}>
          הפתיחה בקרוב
        </h1>

        <p className="lead mb-4 subtitle" style={{ color: darkGray }}>
          בדיוק כמו הרהיטים שלנו, חשוב לנו שתרגישו בבית
        </p>

        <div className="row justify-content-center">
          <div className="col-md-6">
            <div
              className="card bg-light p-4 shadow-sm"
              style={{ textAlign: "right", color: darkGray }}
            >
              <h4 className="mb-3 card-title">רוצים להיות מעודכנים ראשונים?</h4>
              <form>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="הזינו את האימייל שלכם"
                    style={{ textAlign: "right" }}
                  />
                </div>
                <button
                  type="submit"
                  className="btn w-100"
                  style={{
                    backgroundColor: primaryColor,
                    color: whiteColor,
                    border: "none",
                  }}
                >
                  הרשמה
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* אייקונים של רשתות חברתיות */}
        <div className="mt-3">
          <div className="d-flex justify-content-center gap-4">
            <a
              href="https://www.facebook.com/LAFORMAISREL/"
              className="fs-3 social-icon"
              style={{ color: primaryColor }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-facebook"></i>
            </a>
            <a
              href="https://www.instagram.com/laforma_il/?hl=en"
              className="fs-3 social-icon"
              style={{ color: primaryColor }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-instagram"></i>
            </a>
            <a
              href="https://www.tiktok.com/@laformagallery1"
              className="fs-3 social-icon"
              style={{ color: primaryColor }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-tiktok"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
