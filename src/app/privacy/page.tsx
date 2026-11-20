import { Privacy } from "@/components/privacy";
import { pageMetadata } from "@/config/meta";

export const metadata = pageMetadata("en", "privacy");

export default function Page() {
  return <Privacy locale="en" />;
}
