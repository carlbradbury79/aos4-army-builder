"use client";
import React, { use, useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ArmyContext } from "@/context/armyContext";
import Army from "@/components/Army";

const ArmyBuilder: React.FC = () => {
  const { faction } = useContext(ArmyContext);
  const router = useRouter();

  useEffect(() => {
    if (!faction) {
      router.push("/");
    }
  }, [faction, router]);

  return (
    <div>
      <h1>Army Builder</h1>
      <Army />
    </div>
  );
};

export default ArmyBuilder;
