import { useNavigate } from "react-router-dom";

const BarBackBtn = () => {

  const navigate = useNavigate();

    return (
        <div className="flex items-center justify-between pt-11 mb-7 md:hidden">
          <div onClick={() => navigate(-1)} className="w-8 h-8 bg-white rounded-md flex items-center justify-center shadow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
          <div className="text-slate-800 font-medium text-2xl">
            گوشی آیفون 13{" "}
          </div>
          <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center shadow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
    );
}
 
export default BarBackBtn;