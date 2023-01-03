export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[];

export interface Database {
  public: {
    Tables: {
      habits: {
        Row: {
          id: number;
          user_id: string;
          date: string;
          slow_start: boolean;
          meditate: boolean;
          read: boolean;
          exercise: boolean;
          eat_well: boolean;
          skincare: boolean;
          journal: boolean;
          wind_down: boolean;
        };
        Insert: {
          id?: number;
          user_id: string;
          date?: string;
          slow_start?: boolean;
          meditate?: boolean;
          read?: boolean;
          exercise?: boolean;
          eat_well?: boolean;
          skincare?: boolean;
          journal?: boolean;
          wind_down?: boolean;
        };
        Update: {
          id?: number;
          user_id?: string;
          date?: string;
          slow_start?: boolean;
          meditate?: boolean;
          read?: boolean;
          exercise?: boolean;
          eat_well?: boolean;
          skincare?: boolean;
          journal?: boolean;
          wind_down?: boolean;
        };
      };
      profiles: {
        Row: {
          id: string;
          created_at: string;
          fname: string;
          lname: string;
          username: string;
        };
        Insert: {
          id?: string;
          created_at?: string;
          fname?: string;
          lname?: string;
          username?: string;
        };
        Update: {
          id?: string;
          created_at?: string;
          fname?: string;
          lname?: string;
          username?: string;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
  };
}
