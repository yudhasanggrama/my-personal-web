// components/ExperienceCard.tsx
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

interface ExpProps {
  image: string;
  title: string;
  company: string;
  tasks: string[];
  techStack: string[];
  date: string;
  index: number;
}

export default function ExperienceCard({ image, title, company, tasks, techStack, date, index }: ExpProps) {
  return (
    <Card className="bg-card/50 border-none shadow-md overflow-hidden transition-all hover:shadow-lg">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Logo Container */}
          <div className="w-16 h-16 shrink-0 bg-white rounded-xl overflow-hidden border border-border">
            <Image 
              src={image} 
              alt={`${company} logo`} 
              width={64} 
              height={64} 
              className="w-full h-full object-contain p-1" // Pakai object-contain untuk logo perusahaan
              priority={index === 0} // Load gambar pertama lebih cepat
            />
          </div>
          
          <div className="flex-1">
            <div className="flex flex-col md:flex-row justify-between items-start mb-2">
              <div>
                <h4 className="text-xl font-bold tracking-tight">{title}</h4>
                <p className="text-primary font-medium">{company}</p>
              </div>
              <span className="text-sm text-muted-foreground mt-1 md:mt-0 font-medium">
                {date}
              </span>
            </div>
            
            <ul className="list-disc list-outside ml-4 text-sm text-muted-foreground space-y-1 mb-4">
              {tasks.map((task, i) => (
                <li key={i} className="leading-relaxed">{task}</li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {techStack.map((tech, i) => (
                <Badge key={i} variant="secondary" className="font-normal text-[11px]">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}