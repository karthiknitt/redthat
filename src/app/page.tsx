import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/ModeToggle";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <h2>RedThat</h2>
      <Button>Click Me</Button>
      <ModeToggle />
    </>
  );
}
