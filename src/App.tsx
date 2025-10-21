import { Button } from "@/components/ui/button";

function App() {
  return (
    <div className="h-screen w-screen dark:bg-gray-950 dark:text-white flex flex-col justify-center items-center ">
      <h1 className="text-6xl text-center">Welcome To The Medify Dashboard</h1>
      <div>
        <Button className="bg-white text-black cursor-pointer mt-10">
          Submit
        </Button>
      </div>
    </div>
  );
}

export default App;
