export interface Profile {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
    created_at: string;
    degree: string;
    location: string;
    grad_date: string;

    ContactLinks: {
      LinkedIn: string;
      Facebook: string;
      Calendly: string;
    };
  }
  