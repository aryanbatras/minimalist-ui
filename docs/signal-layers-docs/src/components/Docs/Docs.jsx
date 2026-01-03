// Component imports
import { Section1 } from "./pages/docs-page/Section1";
import { Section2 } from "./pages/docs-page/Section2";
import { Section3 } from "./pages/docs-page/Section3";
import { DocsLayout } from "./layout/DocsLayout";

export function DocsPage() {
  return (
    <DocsLayout>
          <Section1 />
          <Section2 />
          <Section3 />
    </DocsLayout>
  );
}
