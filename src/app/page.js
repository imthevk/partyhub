import Header from "./components/molecules/Header";
import CommunityTemplate from "./components/templates/CommunityTemplate";
import San from "next/font/google";
export default function Home() {
  return (
    <div className="py-4">
      <Header
        title="Top vendors love partnering with us—hear their stories of making
        unforgettable events a reality"
      />
      <CommunityTemplate />
    </div>
  );
}
