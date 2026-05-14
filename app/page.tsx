import { cookies } from "next/headers";
import HomeClient from "./HomeClient";

export default async function Home() {
  const cookieStore = await cookies();
  const unlockAll = cookieStore.get("letters_unlock")?.value === "1";
  return <HomeClient unlockAll={unlockAll} />;
}
