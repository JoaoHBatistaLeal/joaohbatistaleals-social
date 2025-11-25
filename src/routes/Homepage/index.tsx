import PostField from "../../components/PostField/PostField";
import Sidebar from "../../components/Sidebar/Sidebar";

export default function Homepage() {
  document.title = "Home - JoãoHBatistaLeal's Social";

  return (
    <div className="relative min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex justify-start items-start min-h-screen ml-[400px]">
        <div className="w-full max-w-xl">
          <PostField />
        </div>
      </div>
    </div>
  );
}
