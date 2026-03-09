// Using fetch to get team members from the FastAPI backend

export interface TeamMember {
    id: number;
    name: string;
    role: string;
    bio?: string;
    photo_url?: string;
    linkedin_url?: string;
    category: string;
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

export async function getTeamMembers(): Promise<TeamMember[]> {
    try {
        const res = await fetch(`${API_BASE_URL}/api/team`);

        if (!res.ok) {
            throw new Error('Failed to fetch team data');
        }

        return await res.json();
    } catch (error) {
        // Fallback to static mock data if the backend is completely unreachable
        return [
            { id: 1, name: "Prateesh Awasthi", role: "Co-Founder", bio: "", photo_url: "/Images/co-founders/Screenshot 2026-03-09 192646.png", linkedin_url: "https://www.linkedin.com/in/prateesh-awasthi-4a5215109/", category: "co-founders" },
            { id: 2, name: "Ayush Ranjan", role: "Co-Founder", bio: "", photo_url: "/Images/co-founders/Screenshot 2026-03-09 192556.png", linkedin_url: "https://www.linkedin.com/in/ayranjan/", category: "co-founders" },
            { id: 3, name: "Vishrant Dave", role: "Co-Founder and CEO", bio: "", photo_url: "/Images/co-founders/Screenshot 2026-03-09 192348.png", linkedin_url: "https://www.linkedin.com/in/vishrant-dave/", category: "co-founders" },
            { id: 4, name: "Anushtup Nandy", role: "Control Systems Engineer", bio: "Designs advanced control systems for autonomous robotic manipulation. Works on model predictive control (MPC), enabling hyper-redundant robotic arms to navigate complex industrial environments with high precision.", photo_url: "/Images/founding-engineers/Screenshot 2026-03-09 192931.png", linkedin_url: "https://www.linkedin.com/in/anushtup-nandy/", category: "founding-engineers" },
            { id: 5, name: "Pulkit Sinha", role: "Founding Engineer", bio: "Leads the development of customer-facing software systems, building tools that allow users to interact with and operate Armatrix robotic platforms efficiently.", photo_url: "/Images/founding-engineers/Screenshot 2026-03-09 192902.png", linkedin_url: "https://www.linkedin.com/in/pulkit-sinha-803907200/", category: "founding-engineers" },
            { id: 6, name: "Shashank Singh Tomar", role: "Mechatronics Engineer", bio: "Works on the design, integration, and testing of robotic hardware systems, combining mechanical design, electronics, sensors, and control systems to build reliable robotic platforms.", photo_url: "/Images/Engineering/Screenshot 2026-03-09 193356.png", linkedin_url: "https://www.linkedin.com/in/shashank-singh-tomar-773834234/", category: "engineering" },
            { id: 7, name: "Akshat Khandelwal", role: "Head of Operations", bio: "Leads operations at Armatrix, overseeing partnerships, logistics, and internal coordination to ensure smooth execution of robotics development and deployment.", photo_url: "/Images/operations/Screenshot 2026-03-09 193425.png", linkedin_url: "https://www.linkedin.com/in/akshatgokul/", category: "operations" },
            { id: 8, name: "Sounak Senapati", role: "Chief of Staff", bio: "Supports leadership strategy and cross-team coordination, ensuring alignment between engineering, operations, and organizational initiatives at Armatrix.", photo_url: "/Images/operations/Screenshot 2026-03-09 193241.png", linkedin_url: "https://www.linkedin.com/in/sounak-senapati-8442a7174/", category: "operations" }
        ];
    }
}
