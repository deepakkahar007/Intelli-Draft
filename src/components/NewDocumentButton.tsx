"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

import { useTransition } from "react";

const NewDocumentButton = () => {
  const { push } = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleCreateNewDocument = () => {
    startTransition(async () => {
      const { docId } = await createNewDocument();
      push(`/doc/${docId}`);
    });
  };
  return (
    <Button
      onClick={handleCreateNewDocument}
      disabled={!isPending}
      className="rounded-2xl"
    >
      {isPending ? "Creating..." : "New Document"}
    </Button>
  );
};

export default NewDocumentButton;
