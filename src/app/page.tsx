import { Home } from "@/components/home";
import { pageMetadata } from "@/config/meta";

export const metadata = pageMetadata("en", "home");

export default function Page() {
  return <Home locale="en" />;
}
