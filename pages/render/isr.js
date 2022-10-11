import axios from "axios";

import Seo from "components/Seo";
import TimeSection from "components/TimeSection";

export default function ISRPage({ dateTime }) {
  return (
    <>
      <Seo templateTitle="ISR" />

      <main>
        <TimeSection
          title="ISR"
          description="If you visit after the revalidate time (5s), your next full refresh visit will trigger fetch."
          dateTime={dateTime}
        />
      </main>
    </>
  );
}

export const getStaticProps = async () => {
  const res = await axios.get("https://worldtimeapi.org/api/ip");

  return {
    props: { dateTime: res.data.datetime },
    revalidate: 5,
  };
};
