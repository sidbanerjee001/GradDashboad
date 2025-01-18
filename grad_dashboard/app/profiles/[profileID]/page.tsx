import NavBar from "@/app/Components/NavBar";

interface ProfilePageProps {
    params: {
      profileID: string;
    };
    searchParams: {
      name?: string;
    };
  }
  
  export default async function ProfilePage({ params, searchParams }: ProfilePageProps) {
    const { profileID } = await params;
    const { name } = await searchParams;
  
    return (
        <div key={profileID} className="bg-dark_background min-h-screen">
            <div className="m-auto w-[75%] py-5 text-white">
                <NavBar dark={true}/>
                hello world 
            </div>
      </div>
    );
  }
  