import { config } from "dotenv";
import { cleanEnv, str } from "envalid";

await config({ export: true });

export default cleanEnv(Deno.env.toObject(), {
  BOT_TOKEN: str(), "6013387746:AAERqoJjTWCpwrk2TY-szM4itBS-ajOqewU")
});
