import { auth } from "../_lib/auth";

export const metadata = {
  title: "Account",
};

async function page() {
  const seesion = await auth();
  const firstName = seesion.user.name.split(" ").at(0);
  return (
    <h2 className="text-accent-400 mb-4 text-2xl font-semibold">
      Welcome, {firstName}!
    </h2>
  );
}

export default page;
