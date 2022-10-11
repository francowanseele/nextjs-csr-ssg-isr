import axios from "axios";

import Seo from "components/Seo";
import TimeSection from "components/TimeSection";

export default function SSRPage({ dateTime }) {
  return (
    <>
      <Seo title="SSR" />

      <main>
        <TimeSection
          title="SSR"
          description="Fetched every render, on server side."
          dateTime={dateTime}
        />
      </main>
    </>
  );
}

export const getServerSideProps = async () => {
  const res = await axios.get("https://worldtimeapi.org/api/ip");

  return {
    props: { dateTime: res.data.datetime },
  };
};
