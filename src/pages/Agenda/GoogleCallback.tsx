import { FC, useEffect } from "react";
// import { useLocation, useHistory } from "react-router-dom";
import HttpService from "@/services/HttpService.ts";
import configRoutes from "@/config/config-routes.ts";

export const GoogleCallback: FC = () => {
  //   const location = useLocation();
  //   const history = useHistory();

  useEffect(() => {
    const fetchToken = async (code: string) => {
      try {
        const response = await HttpService.post<{ message: string }>(
          configRoutes.calendarEvents.syncCalendar,
          { code }
        );
        console.log("ok");
        if (response.status === 200) {
          alert(response.data.message);
          //   history.push("/");  // Redirect to your desired route after successful connection
        }
      } catch (error) {
        console.error(error);
        alert("Failed to connect Google Calendar");
      }
    };

    // const urlParams = new URLSearchParams(location.search);
    // const code = urlParams.get("code");

    // if (code) {
    //   fetchToken(code);
    // } else {
    //   alert("No code found in the URL");
    //   history.push("/");  // Redirect to your desired route if no code is found
    // }
  }, []);

  return <div>Connecting to Google Calendar...</div>;
};
