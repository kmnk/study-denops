import { Denops } from "https://deno.land/x/denops_std@v3.3.2/mod.ts";
import { execute } from "https://deno.land/x/denops_std@v3.3.2/helper/mod.ts";
import { ensureString } from "https://deno.land/x/unknownutil@v2.0.0/mod.ts";

export async function main(denops: Denops): Promise<void> {
  denops.dispatcher = {
    async echo(text: unknown): Promise<unknown> {
      console.log('hoge');
      ensureString(text);
      console.log(text);
      return await Promise.resolve(text);
    },
  };

  await execute(
    denops,
    `command! -nargs=1 HelloWorldEcho echomsg denops#request('${denops.name}', 'echo', [<q-args>])`,
  );
};
