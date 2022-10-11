import axios from "axios";

import Seo from "components/Seo";
import TimeSection from "components/TimeSection";

export default function ISR20Page({ dateTime }) {
  return (
    <>
      <Seo title="ISR20" />

      <main>
        <TimeSection
          title="ISR20"
          description="If you visit after the revalidate time (20s), your next full refresh visit will trigger fetch."
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
    revalidate: 20,
  };
};
