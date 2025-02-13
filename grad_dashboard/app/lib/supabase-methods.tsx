import { supabase } from "./supabaseClient";

export const loadExperiences = async (userId: string): Promise<{ id: string; Role: string; Company: string; StartDate: string; EndDate: string; Description: string }[]> => {
    const { data, error } = await supabase
        .from('career')
        .select('experiences')
        .eq('id', userId)
        .single();

    if (error) {
        console.error('Error fetching experiences:', error);
        return [];
    }

    const experiences = data?.experiences || {};

    return Object.entries(experiences).map(([id, exp]) => {
        if (typeof exp === 'object' && exp !== null) {
        return { id: id, ...(exp as { Role: string; Company: string; StartDate: string; EndDate: string; Description: string }) };
        }
        return { id: id, Role: "", Company: "", StartDate: "", EndDate: "", Description: "" };
    });
};

export const upsertExperience = async (userId: string, newExperience: { Role: string; Company: string; StartDate: string; EndDate: string; Description: string }) => {
    const { data, error } = await supabase
        .from('career')
        .select('experiences')
        .eq('id', userId)
        .single();

    if (error) {
        console.error('Error fetching experiences:', error);
        return;
    }

    const experiences = data?.experiences || {};
    const newId = Object.keys(experiences).length ? Math.max(...Object.keys(experiences).map(Number)) + 1 : 1;

    experiences[newId] = newExperience;

    const { error: updateError } = await supabase
        .from('career')
        .update({ experiences })
        .eq('id', userId);

    if (updateError) {
        console.error('Error updating experiences:', updateError);
    }
};

export const deleteExperience = async (userId: string, experienceId: string) => {
    const { data, error } = await supabase
        .from('career')
        .select('experiences')
        .eq('id', userId)
        .single();

    if (error) {
        console.error('Error fetching experiences:', error);
        return;
    }

    const experiences = data?.experiences || {};
    delete experiences[experienceId];

    const { error: updateError } = await supabase
        .from('career')
        .update({ experiences })
        .eq('id', userId);

    if (updateError) {
        console.error('Error deleting experience:', updateError);
    }
};

export const updateExperience = async (
    userId: string,
    experienceId: string,
    updatedExperience: { Role: string; Company: string; StartDate: string; EndDate: string; Description: string }
  ) => {
    const { data, error } = await supabase
      .from('career')
      .select('experiences')
      .eq('id', userId)
      .single();
  
    if (error) {
      console.error('Error fetching experiences:', error);
      return;
    }
  
    const experiences = data?.experiences || {};
  
    if (!experiences[experienceId]) {
      console.error(`Experience with ID ${experienceId} not found.`);
      return;
    }
  
    experiences[experienceId] = updatedExperience;
  
    const { error: updateError } = await supabase
      .from('career')
      .update({ experiences })
      .eq('id', userId);
  
    if (updateError) {
      console.error('Error updating experience:', updateError);
    } else {
      console.log(`Experience ID ${experienceId} updated successfully.`);
    }

    
  };

  export const updateContactLinks = async (userId: string, contactLinks: {
    LinkedIn?: string;
    Calendly?: string;
    Facebook?: string;
  }) => {
    try {
        const { error } = await supabase
            .from('profiles')
            .upsert({
                id: userId,
                ContactLinks: contactLinks
            }, {
                onConflict: 'id'
            });

        if (error) {
            throw error;
        }
    } catch (error) {
        console.error('Error in updateContactLinks:', error);
    }
  }

  export const updateBio = async (userId: string, data: Array<[string, string]>) => {
    try {
      const updates: Record<string, string> = {};
      
      data.forEach(([key, value]) => {
        updates[key] = value;
      })

      const { data: updatedData, error} = await supabase
          .from('profiles')
          .update(updates)
          .eq('id', userId)

      if (error) {
        throw error;
      }

      return updatedData;

    } catch (error) {
      console.log(error);
      throw error;
    }

  }