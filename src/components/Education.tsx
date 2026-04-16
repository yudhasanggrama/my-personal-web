"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, CheckCircle2, School, BookOpen } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

interface EducationProps {
    id: number;
    image: string;
    title: string;
    degree?: string;
    field: string;
    study?: string;
    date: string;
    description: string;
}

interface EducationData {
    formal: EducationProps[];
    nonFormal: EducationProps[];
}

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function EducationCard({ edu, showHighlight = false }: { edu: EducationProps; showHighlight?: boolean }) {
    return (
        <motion.div variants={itemVariants}>
            <Card className="group relative bg-card/40 border-none shadow-sm overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <motion.div
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "200%" }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-[-20deg] pointer-events-none z-20"
                />
                <CardContent className="p-6 md:p-10 relative z-10">
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                        <motion.div
                            whileHover={{ scale: 1.05, rotate: 5 }}
                            className="w-20 h-20 md:w-24 md:h-24 shrink-0 bg-white rounded-2xl overflow-hidden border border-border shadow-sm flex items-center justify-center p-3 group-hover:border-primary/50 transition-colors duration-300"
                        >
                            <Image
                                src={edu.image}
                                alt={edu.title}
                                width={96}
                                height={96}
                                className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                            />
                        </motion.div>
                        <div className="flex-1 space-y-4">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                <div className="space-y-1.5">
                                    <h3 className="text-2xl font-bold tracking-tight group-hover:text-primary transition-colors duration-300">
                                        {edu.title}
                                    </h3>
                                    <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                                        <p className="text-primary font-semibold flex items-center gap-2">
                                            {edu.degree ? <GraduationCap className="w-4 h-4" /> : <School className="w-4 h-4" />}
                                            {edu.degree || edu.field}
                                        </p>
                                        {edu.study && (
                                            <span className="text-muted-foreground text-sm font-medium border-l border-border pl-3">
                                                {edu.study}
                                            </span>
                                        )}
                                    </div>
                                </div>
                                <Badge variant="outline" className="flex items-center gap-1.5 py-1 px-3 bg-muted/30 border-primary/20 text-muted-foreground font-medium group-hover:bg-primary/10 group-hover:text-primary transition-all duration-300">
                                    <Calendar className="w-3.5 h-3.5" />
                                    {edu.date}
                                </Badge>
                            </div>

                            <p className="text-muted-foreground text-sm md:text-base leading-relaxed border-l-2 border-primary/10 pl-4">
                                {edu.description}
                            </p>
                            {showHighlight && (
                                <motion.div
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    className="mt-6 bg-primary/5 p-5 rounded-2xl border border-primary/10 relative shadow-inner"
                                >
                                    <p className="font-bold text-primary mb-2 flex items-center gap-2 uppercase text-[10px] tracking-[0.2em]">
                                        <CheckCircle2 className="w-4 h-4" /> Final Project Highlight
                                    </p>
                                    <p className="italic text-sm md:text-base text-muted-foreground leading-relaxed">
                                        "Developed an order management system for garment manufacturing, handling stocks and production status with black-box testing validation."
                                    </p>
                                </motion.div>
                            )}
                        </div>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    );
}

function CategoryHeader({ icon, label, description }: { icon: React.ReactNode; label: string; description: string }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-6"
        >
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 text-primary shrink-0">
                {icon}
            </div>
            <div>
                <h3 className="text-lg font-bold tracking-tight">{label}</h3>
                <p className="text-xs text-muted-foreground">{description}</p>
            </div>
            <div className="flex-1 h-px bg-border ml-2" />
        </motion.div>
    );
}

export default function EducationSection({ educationData }: { educationData: EducationData }) {
    const { formal, nonFormal } = educationData;

    return (
        <>
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
                <div className="absolute top-[10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 blur-[120px] rounded-full" />
                <div className="absolute bottom-[10%] right-[-10%] w-[40%] h-[40%] bg-primary/5 blur-[120px] rounded-full" />
            </div>

            <div className="container mx-auto px-4 max-w-5xl relative z-10">
                <SectionHeader
                    number="03"
                    label="Academic"
                    accent="Background"
                    description="Building technical skills through formal education and real-world system development projects."
                    align="center"
                />

                <div className="space-y-16">
                    {/* Formal Education */}
                    <div>
                        <CategoryHeader
                            icon={<GraduationCap className="w-5 h-5" />}
                            label="Formal Education"
                            description="Pendidikan akademik terstruktur"
                        />
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            {formal.map((edu) => (
                                <EducationCard key={edu.id} edu={edu} showHighlight={edu.id === 1} />
                            ))}
                        </motion.div>
                    </div>

                    {/* Non-Formal Education */}
                    <div>
                        <CategoryHeader
                            icon={<BookOpen className="w-5 h-5" />}
                            label="Non-Formal Education"
                            description="Course, bootcamp, dan certification"
                        />
                        {nonFormal.length > 0 ? (
                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="space-y-8"
                            >
                                {nonFormal.map((edu) => (
                                    <EducationCard key={edu.id} edu={edu} />
                                ))}
                            </motion.div>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                className="text-center py-12 text-muted-foreground text-sm border border-dashed border-border rounded-2xl"
                            >
                                Data akan segera ditambahkan.
                            </motion.div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
