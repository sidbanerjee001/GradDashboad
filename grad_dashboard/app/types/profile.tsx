export interface Profile {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
    created_at: string;
    updated_at: string;

    ContactLinks: {
      LinkedIn: string;
      Facebook: string;
      Calendly: string;
    };
  }
  