"use client"

import { useEffect, useState } from "react";
import { Skill, columns } from "./SkillsColumns";
import { DataTable } from "./SkillsDataTable";
import { skillsData } from '@/utils/skillsData';

interface SkillWithColor extends Skill {
    levelColor: string;
}

function getSkillColor(level: string): string {
    return level.toLowerCase() === "beginner"
        ? "skillLevelLow"
        : level.toLowerCase() === "intermediate"
        ? "skillLevelMed"
        : level.toLowerCase() === "advanced"
        ? "skillLevelHigh"
        : "skillLevelExpert";
}

function transformData(): SkillWithColor[] {
    return skillsData.map((skill) => ({
        id: skill.name,
        skill: skill.name,
        level: skill.level as "Beginner" | "Intermediate" | "Advanced" | "Expert",
        yearsExperience: skill.yearsExperience || 0,
        levelColor: getSkillColor(skill.level)
    }));
}

export default function DemoPage() {
    const [data, setData] = useState<SkillWithColor[]>([]);

    useEffect(() => {
        const transformedData = transformData();
        setData(transformedData);
    }, []);

    return (
        <div className="container mx-auto py-10">
            <DataTable columns={columns} data={data} />
        </div>
    );
}
