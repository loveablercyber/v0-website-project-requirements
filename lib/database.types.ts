export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          username: string | null
          full_name: string | null
          avatar_url: string | null
          bio: string | null
          website: string | null
          created_at: string
          updated_at: string | null
          is_creator: boolean
        }
        Insert: {
          id: string
          username?: string | null
          full_name?: string | null
          avatar_url?: string | null
          bio?: string | null
          website?: string | null
          created_at?: string
          updated_at?: string | null
          is_creator?: boolean
        }
        Update: {
          id?: string
          username?: string | null
          full_name?: string | null
          avatar_url?: string | null
          bio?: string | null
          website?: string | null
          created_at?: string
          updated_at?: string | null
          is_creator?: boolean
        }
      }
      content: {
        Row: {
          id: string
          creator_id: string
          title: string
          description: string | null
          content_url: string
          thumbnail_url: string | null
          content_type: string
          is_premium: boolean
          price: number | null
          created_at: string
          updated_at: string | null
        }
        Insert: {
          id?: string
          creator_id: string
          title: string
          description?: string | null
          content_url: string
          thumbnail_url?: string | null
          content_type: string
          is_premium?: boolean
          price?: number | null
          created_at?: string
          updated_at?: string | null
        }
        Update: {
          id?: string
          creator_id?: string
          title?: string
          description?: string | null
          content_url?: string
          thumbnail_url?: string | null
          content_type?: string
          is_premium?: boolean
          price?: number | null
          created_at?: string
          updated_at?: string | null
        }
      }
      subscriptions: {
        Row: {
          id: string
          user_id: string
          creator_id: string
          plan_id: string
          status: string
          current_period_start: string
          current_period_end: string
          created_at: string
          updated_at: string | null
        }
        Insert: {
          id?: string
          user_id: string
          creator_id: string
          plan_id: string
          status: string
          current_period_start: string
          current_period_end: string
          created_at?: string
          updated_at?: string | null
        }
        Update: {
          id?: string
          user_id?: string
          creator_id?: string
          plan_id?: string
          status?: string
          current_period_start?: string
          current_period_end?: string
          created_at?: string
          updated_at?: string | null
        }
      }
      subscription_plans: {
        Row: {
          id: string
          creator_id: string
          name: string
          description: string | null
          price: number
          interval: string
          features: Json | null
          created_at: string
          updated_at: string | null
        }
        Insert: {
          id?: string
          creator_id: string
          name: string
          description?: string | null
          price: number
          interval: string
          features?: Json | null
          created_at?: string
          updated_at?: string | null
        }
        Update: {
          id?: string
          creator_id?: string
          name?: string
          description?: string | null
          price?: number
          interval?: string
          features?: Json | null
          created_at?: string
          updated_at?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}
