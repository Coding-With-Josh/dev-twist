// import { supabase } from "@/utils/supabase/client";
// import { redirect } from "next/navigation";

// type formProps = {
//   email: string;
//   password: string;
// };

// export async function signUpAction(email: string, password: string) {
//   try {
//     const { data, error } = await supabase.auth.signUp({
//       email: email,
//       password: password,
//     });
//     if (error) {
//       console.log(error); // Handle error
//     } else {
//       // Handle success
//     }
//   } catch (error) {
//     console.log(error); // Handle error
//   }
// }
