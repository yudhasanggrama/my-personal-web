export const getProjects = () => {
    return  [
        {
        id: 1,
        title: "PKA System",
        description:
            "PKA System is a digital solution for finding trusted workers, including house assistants, nannies/babysitters, and drivers. With a modern interface and well-organized categories, users can quickly and securely choose workers based on their needs.",
        image: "/assets/img/project/pka.jpg",
        tech: ["PHP", "Javascript", "CSS", "Bootstrap"],
        repoPrivate: true,
        demo: false,
        },

        {
        id: 2,
        title: "SarangTomket23 System",
        description:
            "SarangTomket23 System is an internal web application built for a garment manufacturing company to handle order management, including order processing, production requirements, and status order",
        image: "/assets/img/project/sarang_tomket.jpeg",
        tech: ["PHP", "MySQL", "Javascript", "Bootstrap", "Laravel" , "CSS"],
        repoPrivate: true,
        demo: false,
        },
    ];
} 