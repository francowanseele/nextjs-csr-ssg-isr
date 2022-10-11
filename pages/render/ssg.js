import axios from "axios";

import Seo from "components/Seo";
import TimeSection from "components/TimeSection";

export default function SSGPage({ dateTime }) {
  return (
    <>
      <Seo title="SSG" />

      <main>
        <TimeSection
          title="SSG"
          description="Fetched only once, when running yarn build on deployment."
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
  };
};
