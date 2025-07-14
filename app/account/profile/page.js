import SelectCountry from "@/app/_components/SelectCountry";
import Spinner from "@/app/_components/Spinner";
import UpdateProfileForm from "@/app/_components/UpdateProfileForm";
import { auth } from "@/app/_lib/auth";
import { getGuest } from "@/app/_lib/data-service";
import { Suspense } from "react";

export const metadata = {
  title: "Update your guest profile",
};

export default async function Page() {
  const session = await auth();
  const guest = await getGuest(session?.user?.email);

  return (
    <div>
      <h2 className="text-accent-400 mb-4 text-2xl font-semibold">
        Update your guest profile
      </h2>

      <p className="text-primary-200 mb-8 text-lg">
        Providing the following information will make your check-in process
        faster and smoother. See you soon!
      </p>
      <Suspense fallback={<Spinner />}>
        <UpdateProfileForm guest={guest}>
          <SelectCountry
            name="nationality"
            id="nationality"
            className="bg-primary-200 text-primary-800 w-full rounded-sm px-5 py-3 shadow-sm"
            defaultCountry={guest?.nationality}
          />
        </UpdateProfileForm>
      </Suspense>
    </div>
  );
}
