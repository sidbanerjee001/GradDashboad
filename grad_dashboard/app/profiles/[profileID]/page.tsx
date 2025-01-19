import FullProfile from "@/app/Components/UI/FullProfile";

interface ProfilePageProps {
  params: {
    profileID: string;
  };
  searchParams: {
    name: string;
  };
}

type ResumeExperience = {
    start: string;
    end: string;
    role: string;
    company: string;
    summary: string;
    link: string;
}

type InlineLink = {
    name: string;
    link: string;
}
  
export default async function ProfilePage({ params, searchParams }: ProfilePageProps) {
  const { profileID } = await params;
  const { name } = await searchParams;

  // DATA WOULD BE PULLED FROM DB EVENTUALLY
  const degree = "B.S. Computer Science";
  const gradYear = 2013;
  const location = "Denver, CO"
  const tags =["Greek Life", "Consulting", "Resume Building", "Networking", "Life after College"];

  const about = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  const discussion = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." 

  const resumeExperiences = [ {
    start: "JAN 2025",
    end: "PRESENT",
    role: "Researcher",
    company: "CNMAT @ UC Berkeley",
    summary: "Studying morphisms between semantic clustering and [music] feature clustering, in pursuit of parameter embedding and network bending for stable audiovisual generation. Permits fine tuning of gen AI in a multimodal medium.",
    link: "https://cnmat.berkeley.edu/"
  }, {
    start: "MAY",
    end: "AUG 2024",
    role: "SWE Intern",
    company: "Tona AI",
    summary: "Full-stack developer for a startup integrating AI into the music production process. Cool work involving designing frontend UI/UX (React, Next.JS), developing backend ML models (PyTorch, LarsNet, Docker), and managing databases (AWS, Supabase).",
    link: "https://www.tona.ai/"
  }, {
    start: "JUN 2021",
    end: "AUG 2022",
    role: "Research Intern",
    company: "Four Eyes Lab @ UCSB",
    summary: "Cognitive-science informed mappings from music to sculpture (1) in pursuit of meaningful synaesthetic artwork & exploring deep reinforcement learning as an experience in extended reality (2) i.e. live ML training in AR/VR.",
    link: "https://ilab.cs.ucsb.edu/"
  }]

  const contactLinks = [{
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/sidbanerjee00/"
  }, {
    name: "Email",
    link: "https://www.google.com"
  }, {
    name: "Calendly",
    link: "https://calendly.com/"
  }];

  return (
      <FullProfile name={name} degree={degree} gradYear={gradYear} location={location} about={about} discussion={discussion} tags={tags} experiences={resumeExperiences} contactLinks={contactLinks}/>
  );
}
  