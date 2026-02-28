export const getProjects = () => {
    return  [
        {
        id: 1,
        title: "Circle App",
        description:
            "Circle App is a web-based application designed to foster real-time community interaction. It enables users to connect, engage in discussions, and share content within a fast, responsive, and secure digital ecosystem. Built using Node.js, Express, React (TypeScript), and Socket.IO, Circle App implements JWT-based authentication, state management with Redux, and a well-structured, scalable backend architecture.",
        image: "/img/project/circleapp.jpg",
        tech: ["Express Js", "Prisma", "PostgreSQL", "React Js"],
        repoPrivate: "https://github.com/yudhasanggrama/social-app",
        demo: "https://social-app-nu-pearl.vercel.app/",
        },
        {
        id: 2,
        title: "MySpendly",
        description:
            "MySpendly is an AI-powered web application designed to streamline personal expense management. By seamlessly integrating Optical Character Recognition (OCR) and Artificial Intelligence, it automates the tedious process of tracking finances. Users can simply upload physical receipts, and the app will intelligently extract data and categorize expenses, eliminating the need for manual data entry.",
        image: "/img/project/myspendly.jpg",
        tech: ["Next.js", "Javascript", "Tailwind", "Supabase"],
        repoPrivate: "https://github.com/yudhasanggrama/receipt-manager",
        demo:"https://myspendly-app.vercel.app",
        },

        {
        id: 3,
        title: "LappyGo",
        description:
            "LapyyGo is a feature-rich laptop mini-store built using Next.js 16 and Supabase. It features Midtrans payment integration, real-time stock/order updates, and a comprehensive Admin Dashboard. The project demonstrates a complete e-commerce lifecycle, from secure user authentication to automated email reporting and automated payment webhooks.",
        image: "/img/project/lappygo.jpg",
        tech: ["Next.js", "Supabase", "Javascript", "Tailwind"],
        repoPrivate: "https://github.com/yudhasanggrama/lappygo-store",
        demo: "https://lappygo-store.vercel.app/",
        },
        {
        id: 4,
        title: "PKA System",
        description:
            "PKA System is a digital solution for finding trusted workers, including house assistants, nannies/babysitters, and drivers. With a modern interface and well-organized categories, users can quickly and securely choose workers based on their needs.",
        image: "/img/project/pka.jpg",
        tech: ["PHP", "Javascript", "CSS", "Bootstrap"],
        repoPrivate: true,
        demo: false,
        },

        {
        id: 5,
        title: "SarangTomket23 System",
        description:
            "SarangTomket23 System is an internal web application built for a garment manufacturing company to handle order management, including order processing, production requirements, and status order",
        image: "/img/project/sarang_tomket.jpeg",
        tech: ["PHP", "MySQL", "Javascript", "Bootstrap", "Laravel" , "CSS"],
        repoPrivate: true,
        demo: false,
        },
    ];
} 