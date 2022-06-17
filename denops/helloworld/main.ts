import { Denops } from "https://deno.land/x/denops_std@v3.3.2/mod.ts";
import { ensureString } from "https://deno.land/x/unknownutil@v2.0.0/mod.ts";

export async function main(denops: Denops): Promise<void> {
  denops.dispatcher = {
    async echo(text: unknown): Promise<unknown> {
      // assure `text` is string type.
      ensureString(text);
      return await Promise.resolve(text);
    },
  };
};
