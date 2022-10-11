import { useEffect, useState } from "react";
import axios from "axios";

import TimeSection from "components/TimeSection";
import Seo from "components/Seo";

export default function CSRPage() {
  const [dateTime, setDateTime] = useState();

  useEffect(() => {
    axios
      .get("https://worldtimeapi.org/api/ip")
      .then(res => {
        setDateTime(res.data.datetime);
        return res.data.datetime;
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <>
      <Seo title="CSR" />
      <main>
        <TimeSection
          title="CSR"
          description="Fetched every render, on client side. Notice the loading."
          dateTime={dateTime}
        />
      </main>
    </>
  );
}
