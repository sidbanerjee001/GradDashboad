"use client";

import { createContext, useContext, useState, useEffect, useCallback } from "react";
import { supabase } from "../lib/supabaseClient";
import { Profile } from "../types/profile";

interface AuthContextType {
  user: any;
  loading: boolean;
  profile: Profile | null;
  fetchProfile: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<any>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchProfile = useCallback(async (forceFetch = false) => {
    if (!user) return;

    const savedProfile = sessionStorage.getItem("profile");
    if (savedProfile && !forceFetch) {
        setProfile(JSON.parse(savedProfile));
    } else {
        const { data: profileData, error } = await supabase
            .from("profiles")
            .select("*")
            .eq("id", user.id)
            .single();

        if (error) {
            return;
        } else {
            setProfile(profileData as Profile);
            sessionStorage.setItem("profile", JSON.stringify(profileData));
        }
    }
}, [user]);

  useEffect(() => {
    const fetchUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();

      if (user) {
        setUser(user);
        await fetchProfile();
      } else {
        setProfile(null);
        sessionStorage.removeItem("profile");
      }

      setLoading(false);
    };

    fetchUser();

    const { data: authListener } = supabase.auth.onAuthStateChange(async (_event, session) => {
      setUser(session?.user || null);
      if (session?.user) {
        await fetchProfile();
      } else {
        setProfile(null);
        sessionStorage.removeItem("profile");
      }
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [fetchProfile]);

  return (
    <AuthContext.Provider value={{ user, loading, profile, fetchProfile }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};
