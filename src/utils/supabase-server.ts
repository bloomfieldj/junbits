import { headers, cookies } from "next/headers";
import { createServerComponentSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "@/types/supabase";

export default () =>
  createServerComponentSupabaseClient<Database>({
    headers,
    cookies,
  });
