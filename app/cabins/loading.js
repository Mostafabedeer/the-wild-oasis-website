import Spinner from "@/app/_components/Spinner";

function Loading() {
  return (
    <div className="grid items-center justify-center">
      <Spinner />
      <p className="text-primary-200 text-xl">Loading cabins...</p>
    </div>
  );
}

export default Loading;
