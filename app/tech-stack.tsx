import { CodeSimpleIcon } from "@phosphor-icons/react/ssr";
import { Badge } from "@/components/ui/badge";

export default function TechStack() {
  return (
    <div className="md:col-span-2 md:row-start-2 col-span-full md:row-span-full flex flex-col gap-2">
      <h2 className="flex gap-2 font-title font-bold uppercase text-lg">
        <CodeSimpleIcon size={26} /> Stack
      </h2>
      <div className="flex flex-col p-4 gap-4 border-1 rounded border-foreground/20 bg-foreground/3">
        <div className="flex flex-col gap-2">
          <h3 className="font-title text-xs font-bold italic">DEV</h3>
          <div className="flex gap-2 flex-wrap">
            <Badge variant="outline">Typescript</Badge>
            <Badge variant="outline">Rust</Badge>
            <Badge variant="outline">Python</Badge>
            <Badge variant="outline">VueJS</Badge>
            <Badge variant="outline">NextJS</Badge>
            <Badge variant="outline">Java</Badge>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-title text-xs font-bold italic">DATA & AI</h3>
          <div className="flex gap-2 flex-wrap">
            <Badge variant="outline">PostgreSQL</Badge>
            <Badge variant="outline">ETL Tools</Badge>
            <Badge variant="outline">AI Agents</Badge>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-title text-xs font-bold italic">OPS</h3>
          <div className="flex gap-2 flex-wrap">
            <Badge variant="outline">Kubernetes</Badge>
            <Badge variant="outline">Docker</Badge>
          </div>
        </div>
      </div>
    </div>
  );
}
