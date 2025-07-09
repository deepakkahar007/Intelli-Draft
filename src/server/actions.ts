"use server";

import { adminDb } from "@/firebase/firebase-admin";
import { auth } from "@clerk/nextjs/server";

export const createNewDocument = async () => {
  auth().protect();

  const { sessionClaims } = await auth();

  const docCollectionRef = adminDb.collection("documents");

  const docRef = await docCollectionRef.add({
    title: "new doc 1 next",
  });

  await adminDb
    .collection("users")
    .doc(sessionClaims?.email)
    .collection("rooms")
    .doc(docRef.id)
    .set({
      userId: sessionClaims?.email,
      role: "user",
      createdAt: new Date(),
      roomId: docRef.id,
    });

  return { docId: docRef.id };
};
