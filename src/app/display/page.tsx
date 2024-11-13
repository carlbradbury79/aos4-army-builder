"use client";
import React, { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ArmyContext } from "@/context/armyContext";
import styled from "styled-components";

const PageWrapper = styled.div`
  padding: 20px;
  background-color: #f0f0f0;
  font-family: Arial, sans-serif;
`;

const ArmyHeader = styled.div`
  margin-bottom: 1rem;
`;

const Regiments = styled.div`
  margin-bottom: 1rem;
`;

const Regiment = styled.div`
  margin-bottom: 0.5rem;
`;

const Hero = styled.div`
  margin-bottom: 0.5rem;
`;

const ArmyListPage: React.FC = () => {
  const { army, totalArmyPoints } = useContext(ArmyContext);
  const router = useRouter();

  useEffect(() => {
    if (!army || !army.armyName) {
      router.push("/");
    }
  }, [army, router]);

  if (!army || !army.armyName) {
    return null; // Render nothing while redirecting
  }

  return (
    <PageWrapper>
      <ArmyHeader>
        <h1>{army.armyName}</h1>
        <div>{totalArmyPoints}/2000pts</div>
        <div>Faction: {army.faction}</div>
        {army.battleFormation && (
          <div>Battle Formation: {army.battleFormation}</div>
        )}
        {army.spellLore && <div>Spell Lore: {army.spellLore}</div>}
        {army.prayerLore && <div>Prayer Lore: {army.prayerLore}</div>}
        {army.manifestationLore && (
          <div>Manifestation Lore: {army.manifestationLore}</div>
        )}
        <div>Drops: {army.regiments.length + army.auxiliaryUnits.length}</div>
        <div>Faction scenery: **coming soon**</div>
      </ArmyHeader>
      <Regiments>
        {army.regiments.map((regiment) => (
          <Regiment key={regiment.id}>
            <h3>{regiment.hero?.isGeneral && "Generals"} Regiment</h3>
            {regiment.hero && (
              <Hero>
                <strong>
                  Hero: {regiment.hero.name} - {regiment.hero.cost}pts
                </strong>
                {regiment.hero.isGeneral && <div>General</div>}
                {regiment.hero.artefactOfPower && (
                  <div>Artefact: {regiment.hero.artefactOfPower}</div>
                )}
                {regiment.hero.heroicTrait && (
                  <div>Heroic Trait: {regiment.hero.heroicTrait}</div>
                )}
              </Hero>
            )}
            <div>Units:</div>
            <ul>
              {regiment.units.map((unit) => (
                <div key={unit.id}>
                  {unit.quantity} {unit.name} {unit.isReinforced && "(r)"} -{" "}
                  {unit.cost}pts
                </div>
              ))}
            </ul>
          </Regiment>
        ))}
      </Regiments>
      {army.auxiliaryUnits.length > 0 && (
        <>
          <h3>Auxiliary Units</h3>
          <ul>
            {army.auxiliaryUnits.map((unit) => (
              <div key={unit.id}>
                {unit.quantity} {unit.name} - {unit.cost}pts
              </div>
            ))}
          </ul>
        </>
      )}
    </PageWrapper>
  );
};

export default ArmyListPage;
